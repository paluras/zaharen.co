import React from "react";

function Modal({ src, alt, onClose }) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal">
          <img className="big-img" src={src} alt={alt} />
        </div>
      </div>
    );
  }

  export default Modal