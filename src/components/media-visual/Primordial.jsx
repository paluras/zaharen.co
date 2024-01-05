import React from "react";
import img from "../../../img.json";
import { useState } from "react";
import Modal from "../Modal";

const Primordial = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  function handleImageClick(src) {
    setSelectedImg(src);
  }
  return (
    <div className="media">
      <iframe
        width="300"
        height="300"
        src="https://www.youtube-nocookie.com/embed/I-kYxLFyJv0?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>{" "}
      {img.pageThree.map((image) => (
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
        src="https://www.youtube-nocookie.com/embed/_S5MQPStk6s?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        width="300"
        height="300"
        src="https://www.youtube-nocookie.com/embed/qffrRDsCp0Y?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>{" "}
    </div>
  );
};

export default Primordial;
