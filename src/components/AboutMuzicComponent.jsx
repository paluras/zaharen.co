import React from "react";
import img from "../../img.json";
import { useState } from "react";
import Modal from "./Modal";

const AboutMuzicComponent = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  function handleImageClick(src) {
    setSelectedImg(src);
  }
  return (
    <div className="page-band">
      <div>
        <div className="container-lower">
          <p>
            Zaharenco is a jazz quartet whose music aims to explore the New Jazz
            scene by fusing jazz with classical and rock influences.
          </p>
          <p>
            {" "}
            He submits his works to the issue of musical predictability, seeking
            a balance between predictability and uncertainty, and thus managing
            to reach a wide range of emotions.
          </p>
          <p>
            <a
              style={{ color: "#ff68b4" }}
              target="_blank"
              href="https://open.spotify.com/album/4z5ldoG03eOzAsPBvbpCj0?si=Tgr-UWa9Rcag4uDjxw-uug"
            >
              {" "}
              Primordial feelings
            </a>
            , his first EP, is an exposition of the 2 main topics addressed: the
            impulsive being and the ever-changing sentimental self.
          </p>
        </div>
      </div>

      <div className="media band-photos">
        {img.pageBand.map((image) => (
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
      </div>
    </div>
  );
};

export default AboutMuzicComponent;
