import React, { useRef, useState } from "react";
import "./VideoWithPopup.css";
import ShowVideo from "./ShowVideo";
import Popup from "./Popup";

const VideoWithPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const videoStartedRef = useRef(false); // Ref to track if the video has started
  const popupShownRef = useRef(false); // Ref to track if the popup was already shown

  const handleVideoStart = () => {
    if (!videoStartedRef.current) {
      videoStartedRef.current = true;
      if (!popupShownRef.current) {
        setTimeout(() => {
          setShowPopup(true);
          popupShownRef.current = true; // Mark the popup as shown
        }, 5000); // Show popup after 5 seconds of video playing
      }
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <>
      <ShowVideo onPlay={handleVideoStart} />
      <Popup isVisible={showPopup} onClose={handleClosePopup} />
    </>
  );
};

export default VideoWithPopup;
