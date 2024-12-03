import React from "react";
import img from "../../../img.json";
import { useState } from "react";
import Modal from "../Modal";

const Catatro = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  function handleImageClick(src) {
    setSelectedImg(src);
  }
  return (
    <div className="media">
      {img.pageTwo.map((image) => (
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
        src="https://drive.google.com/file/d/1xX09-kh43imFjhgSbo-AKIT4WblZxf3j/preview"
        width="300"
        height="300"
        allow="autoplay"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default Catatro;
