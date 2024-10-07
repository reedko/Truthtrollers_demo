import React, { useCallback } from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  onPlay: () => void;
}

const ShowVideo: React.FC<VideoPlayerProps> = ({ onPlay }) => {
  const handleStart = useCallback(() => {
    onPlay(); // Trigger the onPlay callback when the video starts
  }, [onPlay]);

  return (
    <div className="fullscreen-container">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=EffXrNhJtKI"
        controls
        playing={true}
        width="75vw"
        height="75vh"
        onPlay={handleStart} // Call only when the video starts
      />
    </div>
  );
};

export default React.memo(ShowVideo);
