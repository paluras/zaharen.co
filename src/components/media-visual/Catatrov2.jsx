import React from "react";
import img from "../../../img.json";
import { useState } from "react";
import Modal from "../Modal";

const Catatrov2 = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  function handleImageClick(src) {
    setSelectedImg(src);
  }
  return (
    <div className="media">
      {img.captov2.map((image) => (
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
        src="https://www.youtube-nocookie.com/embed/TXJ5TWWE5RM?si=vFZrFJ6EySEqd2K3"
        width="300"
        height="300"
        allow="autoplay"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default Catatrov2;
