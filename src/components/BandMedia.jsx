import React from "react";
import img from "../../img.json";
import { useState } from "react";
import Modal from "./Modal";

const BandMedia = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  function handleImageClick(src) {
    setSelectedImg(src);
  }

  return (
    <div className="media">
      {img.pageBandMedia.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          onClick={() => handleImageClick(image.src)}
        />
      ))}
      {selectedImg && (
        <Modal
          src={selectedImg}
          alt="full-image"
          onClose={() => setSelectedImg(null)}
        />
      )}

      <iframe
        width="300"
        height="300"
        src="https://www.youtube.com/embed/LT-DftXVJLc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default BandMedia;
