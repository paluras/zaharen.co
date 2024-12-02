// Component
import React, { useState, useEffect } from "react";
import { client } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import Modal from "./Modal";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

const AboutMuzicComponent = () => {
  const [bandData, setBandData] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const query = `*[_type == "about"][0]{
      mainText,
      images
    }`;

    client.fetch(query).then((data) => {
      setBandData(data);
    });
  }, []);

  function handleImageClick(image) {
    setSelectedImg(image);
  }

  if (!bandData) return <div>Loading...</div>;

  return (
    <div className="page-band">
      <div>
        <div className="container-lower">
          <PortableText value={bandData.mainText} />
        </div>
      </div>

      <div className="media band-photos">
        {bandData.images.map((image) => (
          <img
            key={image._key}
            src={builder.image(image).url()}
            alt={image.alt}
            onClick={() => handleImageClick(image)}
          />
        ))}
        {selectedImg && (
          <Modal
            src={builder.image(selectedImg).url()}
            alt="full-image"
            onClose={() => setSelectedImg(null)}
          />
        )}
      </div>
    </div>
  );
};

export default AboutMuzicComponent;
