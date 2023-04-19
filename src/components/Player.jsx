import { useState, useRef } from "react";

function SongPlayer(props) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayPause() {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <div className="for-nothing">
      <audio ref={audioRef} src={props.song} />
      <img
        src={isPlaying ? "/icons/stop.svg" : "/icons/play.svg"}
        alt={isPlaying ? "Stop" : "Play"}
        onClick={handlePlayPause}
      />
    </div>
  );
}

export default SongPlayer