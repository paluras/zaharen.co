import React, { useState, useEffect } from "react";
import { client } from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Modal from "./Modal";

const builder = imageUrlBuilder(client);

const MediaPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const query = `*[_type == "mediaGallery"][0]{
      photos
    }`;

    client.fetch(query).then((data) => {
      if (data && data.photos) {
        setPhotos(data.photos);
      }
    });
  }, []);

  function handleImageClick(image) {
    setSelectedImg(image);
  }

  return (
    <div className="media">
      {photos.map((image) => (
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
  );
};

export default MediaPhotos;
