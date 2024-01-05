import React from 'react';

const Spotify = () => {
    return (
        <div className="inspo-section">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/7bMNLNMcOXNeZR48vBuPHT?utm_source=generator"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    );
};

export default Spotify;
