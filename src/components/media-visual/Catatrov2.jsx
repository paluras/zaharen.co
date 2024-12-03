import React, { useState, useEffect } from "react";
import { client } from "../../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Modal from "../Modal";

const builder = imageUrlBuilder(client);

const Catatrov2 = () => {
  const [projectData, setProjectData] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const query = `*[_type == "catatroProject"][0]{
      images,
      youtubeUrl
    }`;

    client.fetch(query).then((data) => {
      setProjectData(data);
    });
  }, []);

  function handleImageClick(image) {
    setSelectedImg(image);
  }

  if (!projectData) return <div>Loading...</div>;

  return (
    <div className="media">
      {projectData.images.map((image) => (
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
      <iframe
        src={projectData.youtubeUrl}
        width="300"
        height="300"
        allow="autoplay"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default Catatrov2;
