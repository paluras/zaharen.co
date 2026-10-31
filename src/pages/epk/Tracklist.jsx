import { useCallback, useEffect, useRef, useState } from "react";
import { tracks } from "./content";
import { prefersReducedMotion } from "./useScrollReveal";

const PLAYED = "#e2592e";
const UNPLAYED = "#3a3a3a";

const playIcon = (
  <svg className="ic-play" viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 1.5v11l9-5.5z" />
  </svg>
);
const pauseIcon = (
  <svg className="ic-pause" viewBox="0 0 14 14" aria-hidden="true">
    <path d="M2.5 1.5h3.2v11H2.5zM8.3 1.5h3.2v11H8.3z" />
  </svg>
);

function formatTime(seconds) {
  const total = Math.max(0, Math.floor(seconds || 0));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

function parseDuration(duration) {
  const [minutes, seconds] = duration.split(":").map(Number);
  return minutes * 60 + seconds;
}

// Mounted while its track plays, so the bars grow in each time playback starts.
function Waveform({ peaks, progress, label, onSeek }) {
  const canvasRef = useRef(null);
  const growRef = useRef(prefersReducedMotion() ? 1 : 0);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const width = canvas?.clientWidth;
    const height = canvas?.clientHeight;
    if (!width) return;

    const ratio = window.devicePixelRatio || 1;
    if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
    }

    const context = canvas.getContext("2d");
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    const barWidth = width / peaks.length;
    peaks.forEach((peak, index) => {
      const barHeight = Math.max(2, (peak / 100) * height * 0.94 * growRef.current);
      context.fillStyle = index / peaks.length < progressRef.current ? PLAYED : UNPLAYED;
      context.fillRect(index * barWidth + barWidth * 0.2, (height - barHeight) / 2, barWidth * 0.6, barHeight);
    });
  }, [peaks]);

  useEffect(() => {
    if (growRef.current >= 1) return undefined;
    let frame;
    const grow = () => {
      growRef.current = Math.min(1, growRef.current + 0.07);
      draw();
      if (growRef.current < 1) frame = requestAnimationFrame(grow);
    };
    frame = requestAnimationFrame(grow);
    return () => cancelAnimationFrame(frame);
  }, [draw]);

  useEffect(draw, [draw, progress]);

  useEffect(() => {
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [draw]);

  return (
    <div className="wave">
      <canvas ref={canvasRef} aria-hidden="true" />
      <input
        className="seek"
        type="range"
        min="0"
        max="1000"
        step="1"
        value={Math.round(progress * 1000)}
        aria-label={label}
        onChange={(event) => onSeek(event.target.value / 1000)}
      />
    </div>
  );
}

function TrackItem({ track, index, text, isPlaying, isOpen, progress, onPlay, onToggle, onSeek }) {
  return (
    <li className={isPlaying ? "on" : undefined} data-reveal="up">
      <button
        type="button"
        className="play"
        aria-pressed={isPlaying}
        aria-label={track.title}
        onClick={() => onPlay(index)}
      >
        {playIcon}
        {pauseIcon}
      </button>
      <details open={isOpen} onToggle={(event) => onToggle(index, event.currentTarget.open)}>
        <summary>
          <span className="n">{track.number}</span>
          <span className="ti">
            <b>{track.title}</b>
            {track.feat && <i>{track.feat}</i>}
          </span>
          <span className="meta">
            {track.tag && <span className="badge">{track.tag}</span>}
            <span className="dur">{track.duration}</span>
          </span>
          <span className="chev" aria-hidden="true" />
        </summary>
        <div className="cred">
          {track.rows.map((row) => (
            <div key={row.instruments.join()}>
              <span className="what">
                {row.instruments.map((instrument) => text.instruments[instrument]).join(", ")}
              </span>
              <span className="who">{row.people}</span>
            </div>
          ))}
        </div>
      </details>
      {isPlaying && (
        <Waveform
          peaks={track.peaks}
          progress={progress}
          label={`${text.seek}: ${track.title}`}
          onSeek={onSeek}
        />
      )}
    </li>
  );
}

export default function Tracklist({ text, onPlayerVisible }) {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [barDismissed, setBarDismissed] = useState(false);

  const current = currentIndex === null ? null : tracks[currentIndex];
  const total = duration || (current ? parseDuration(current.duration) : 0);
  const progress = total ? Math.min(1, time / total) : 0;
  const showBar = current !== null && !barDismissed;

  useEffect(() => {
    onPlayerVisible(showBar);
  }, [showBar, onPlayerVisible]);

  // A paused player gets out of the way once the reader scrolls on down the
  // page; it comes back as soon as anything plays again.
  useEffect(() => {
    if (isPlaying || currentIndex === null) {
      setBarDismissed(false);
      return undefined;
    }
    const pausedAt = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY - pausedAt > 40) setBarDismissed(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPlaying, currentIndex]);

  const startTrack = (index) => {
    const audio = audioRef.current;
    audio.src = tracks[index].src;
    setCurrentIndex(index);
    setTime(0);
    setDuration(0);
    audio.play().catch(() => {});
  };

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  };

  const playTrack = (index) => {
    if (index === currentIndex) togglePlayback();
    else startTrack(index);
  };

  const seek = (fraction) => {
    const audio = audioRef.current;
    if (!total) return;
    audio.currentTime = fraction * total;
    setTime(audio.currentTime);
  };

  const skip = (delta) => {
    const next = currentIndex + delta;
    if (next >= 0 && next < tracks.length) startTrack(next);
  };

  const previous = () => {
    if (time > 3) seek(0);
    else skip(-1);
  };

  const handleEnded = () => {
    if (currentIndex < tracks.length - 1) {
      startTrack(currentIndex + 1);
    } else {
      setCurrentIndex(null);
      setTime(0);
    }
  };

  const toggleDetails = (index, open) => {
    setOpenIndex((currentOpen) => {
      if (open) return index;
      return currentOpen === index ? null : currentOpen;
    });
  };

  const renderSide = (from, to) =>
    tracks.slice(from, to).map((track, offset) => {
      const index = from + offset;
      const isCurrent = index === currentIndex;
      return (
        <TrackItem
          key={track.file}
          track={track}
          index={index}
          text={text}
          isPlaying={isCurrent && isPlaying}
          isOpen={openIndex === index}
          progress={isCurrent ? progress : 0}
          onPlay={playTrack}
          onToggle={toggleDetails}
          onSeek={seek}
        />
      );
    });

  return (
    <>
      <h3 className="side" data-reveal="up">
        {text.sideA}
      </h3>
      <ol className="tracks">{renderSide(0, 4)}</ol>
      <h3 className="side side-b" data-reveal="up">
        {text.sideB}
      </h3>
      <ol className="tracks" start={5}>
        {renderSide(4)}
      </ol>

      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onEnded={handleEnded}
      />

      <div
        className={`pbar${showBar ? " show" : ""}`}
        role="region"
        aria-label={text.player}
        aria-hidden={!showBar}
      >
        <div className="pb-in">
          <div className="pb-ctl">
            <button type="button" className="pb-b" aria-label={text.previousTrack} onClick={previous}>
              <svg viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 2h1.8v10H2zM12 2v10L5 7z" />
              </svg>
            </button>
            <button
              type="button"
              className={`pb-b pb-play${isPlaying ? " on" : ""}`}
              aria-label={text.playPause}
              onClick={togglePlayback}
            >
              {playIcon}
              {pauseIcon}
            </button>
            <button type="button" className="pb-b" aria-label={text.nextTrack} onClick={() => skip(1)}>
              <svg viewBox="0 0 14 14" aria-hidden="true">
                <path d="M10.2 2H12v10h-1.8zM2 2l7 5-7 5z" />
              </svg>
            </button>
          </div>
          <div className="pb-t">
            <b>{current?.title}</b>
            <span>
              {formatTime(time)} / {formatTime(total)}
            </span>
          </div>
          <input
            className="pb-seek"
            type="range"
            min="0"
            max="1000"
            step="1"
            value={Math.round(progress * 1000)}
            aria-label={text.seek}
            style={{ "--p": `${progress * 100}%` }}
            onChange={(event) => seek(event.target.value / 1000)}
          />
        </div>
      </div>
    </>
  );
}
