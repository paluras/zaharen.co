import { useState, useRef } from "react";

function SongPlayer(props) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const progressBarRef = useRef(null);
  function handlePlayPause() {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      setShowProgressBar(true);
    }

    setIsPlaying(!isPlaying);
  }

  function handleTimeUpdate() {
    const audio = audioRef.current;

    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
  }

  function handleProgressBarClick(event) {
    const audio = audioRef.current;
    const progressBar = progressBarRef.current;

    const progressBarRect = progressBar.getBoundingClientRect();

    const clickPosition = event.clientX - progressBarRect.left;

    const progressBarWidth = progressBar.offsetWidth;

    if (progressBarWidth !== 0) {
      const progress = clickPosition / progressBarWidth;
      const time = progress * audio.duration;

      if (isFinite(time)) {
        audio.currentTime = time;
        setCurrentTime(time);
      }
    }
  }

  const progressBarStyles = {
    width: `${(currentTime / duration) * 100}%`,
  };

  return (
    <div className="for-nothing">
      <div className="container-player">
        <audio
          key={props.keys}
          ref={audioRef}
          src={props.song}
          onTimeUpdate={handleTimeUpdate}
        />
        <img
          onClick={handlePlayPause}
          className="icon"
          src={isPlaying ? "/icons/stop.svg" : "/icons/play.svg"}
          alt={isPlaying ? "Stop" : "Play"}
        />
        <div className="test pink">
          <div onClick={handlePlayPause}>{props.text}</div>
          {props.iconLink}
        </div>
      </div>
      {showProgressBar && (
        <div
          className="progress-bar"
          onClick={handleProgressBarClick}
          ref={progressBarRef}
        >
          <div className="progress-bar-fill" style={progressBarStyles} />
        </div>
      )}
    </div>
  );
}

export default SongPlayer;
