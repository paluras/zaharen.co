import React, { useState } from 'react';

function VideoModal(props) {
  const [showModal, setShowModal] = useState(false);
  const videoId = props.videoId; // replace with your YouTube video ID

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div onClick={handleClick}><img className="icon" width={"32px"} src="/icons/link.svg" alt="link" /></div>
      {showModal && (
        
        <div onClick={handleClose} className="modal-overlay">
          <div className="modal">
            
            <iframe className='video-film-modal'
              title="YouTube video"
              width="80%"
              height="80%"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoModal;