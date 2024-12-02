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
            Zaharenco is a jazz quartet that explores the New Jazz scene by
            blending jazz with classical and rock influences. Zaharenco music
            addresses the challenge of musical predictability, striving for a
            balance between certainty and surprise to evoke a wide range of
            emotions.
          </p>
          <p>
            <a
              className="pink"
              href="https://youtu.be/_2n43gWQdxc?si=PjmhtL45qizZhbVM"
            >
              Primordial Feelings
            </a>
            , the quartet’s first EP, presents an exploration of two central
            themes: the impulsive being and the ever-changing sentimental self.
          </p>
          <p>
            In 2024, Zaharenco released two more singles,{" "}
            <a
              className="pink"
              href="https://youtu.be/SYItzRqGkkY?si=Y3qpfSJ9hxlPvtzf"
            >
              Condition 5
            </a>{" "}
            and{" "}
            <a
              style={{
                color: "#ff68b4",
              }}
              href="https://youtu.be/xryrrX6E2PM?si=n-iwjlz3zLvf9qUr"
            >
              Contition 4 (Suspended in Mid-Air)
            </a>
            , both marking the lead-up to the upcoming album.
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
