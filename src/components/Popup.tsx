import React from "react";
import "./VideoWithPopup.css";
import ttlogometer2 from "../assets/meter3.png";
import resizeImage from "../services/image-url";

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
}
const Popup: React.FC<PopupProps> = ({ isVisible, onClose }) => {
  return (
    <div className={`popup-box ${isVisible ? "showPopup" : ""}`}>
      <div className="popup-box-text">TruthTroll at 80% FALSE</div>
      {resizeImage(100, ttlogometer2)}
      <a href="/your-page-link" className="popup-button">
        Drill Down
      </a>
      <a href="/" className="popup-button" onClick={onClose}>
        Cancel
      </a>
    </div>
  );
};

export default Popup;
