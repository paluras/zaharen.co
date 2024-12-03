import React, { useState, useEffect } from "react";
import { client } from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Modal from "./Modal";

const builder = imageUrlBuilder(client);

const BandMedia = () => {
  const [mediaData, setMediaData] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const query = `*[_type == "bandMedia"][0]{
      photos,
      youtubeUrl
    }`;

    client.fetch(query).then((data) => {
      setMediaData(data);
    });
  }, []);

  function handleImageClick(image) {
    setSelectedImg(image);
  }

  if (!mediaData) return <div></div>;

  return (
    <div className="media">
      {mediaData.photos.map((image) => (
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
        width="300"
        height="300"
        src={mediaData.youtubeUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BandMedia;
