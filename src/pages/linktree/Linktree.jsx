import React, { useEffect, useState } from "react";
import { LinktreeButton } from "./components/LinktreeButton";
import "./linktree.style.css";
import { fetchData } from "../../services/strapi"; // Ensure this path is correct

export default function LinkTree() {
  const [videoSrc, setVideoSrc] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData("linktrees");
        if (result && result.data) {
          setData(result.data);
        }
        console.log("Data fetched:", result);
      } catch (error) {
        console.error("Error fetching linktrees:", error);
      }
    };

    getData();
  }, []);

  const updateVideoSource = () => {
    const width = window.innerWidth;

    if (width <= 480) {
      setVideoSrc("./condition5video.webm"); // for mobile devices
    } else {
      setVideoSrc("./condition5bigVideo.webm"); // for desktops
    }
  };

  useEffect(() => {
    updateVideoSource();
    window.addEventListener("resize", updateVideoSource);

    return () => window.removeEventListener("resize", updateVideoSource);
  }, []);

  return (
    <main className="linktree-main">
      <header className="linktree-header">
        <img
          className="linktree-zaharenco-logo"
          aria-hidden
          src="./Zaharenco-logo.png"
          alt="logo"
        />
        <p>Composer based in Bucharest, Romania</p>
      </header>

      <section>
        <div className="img-container-linktree">
          <a
            target="_blank"
            href="https://open.spotify.com/track/1uoIexbNMtcmitN7q9c5B1?si=GjilGNsJSGa3q68pZuzkCg&context=spotify%3Aalbum%3A1Bwz0ywI3x5zpLNRbT8UgA&nd=1&dlsi=b67c240ef5d44a98"
          >
            <video
              playsInline
              id="linktree-img"
              src={videoSrc}
              autoPlay
              muted
              loop
              alt="Cover Album For Zaharenco"
            />
          </a>
        </div>
        <LinktreeButton linkProp={"./"} imgProp={""} textProp={"Zaharen.co"} />
        {data?.length > 0 &&
          data.map((item) => (
            <LinktreeButton
              key={item.id} // Ensure each item has a unique key
              linkProp={item.attributes.srclinktree} // Adjust according to your data structure
              imgProp={item.attributes.img || null} // Adjust according to your data structure
              textProp={item.attributes.thetext} // Adjust according to your data structure
            />
          ))}

        <LinktreeButton
          linkProp={
            "https://open.spotify.com/artist/4azDTEsE76hndB8paNOEe8?si=NHCTZCI7QIOVzVyIRbufUQ&utm_medium=share&utm_source=linktree&nd=1&dlsi=dbbb9deb79524a45"
          }
          imgProp={""}
          textProp={"Spotify"}
        />
        <LinktreeButton
          linkProp={"https://music.apple.com/ro/artist/zaharenco/1591749000"}
          imgProp={""}
          textProp={"Apple Music"}
        />

        <LinktreeButton
          linkProp={
            "https://soundcloud.com/zaharenco?ref=clipboard&p=i&c=0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          }
          imgProp={""}
          textProp={"SoundCloud"}
        />
        <LinktreeButton
          linkProp={"https://www.youtube.com/@zaharenco"}
          imgProp={""}
          textProp={"Youtube"}
        />

        <LinktreeButton
          linkProp={
            "https://www.behance.net/gallery/156292383/Catoptro-tono-v1-AI-Based-Installation"
          }
          imgProp={""}
          textProp={"Catoptro-tono v.1 - Ai Based Sound Installation"}
        />
        <LinktreeButton
          linkProp={
            "https://www.behance.net/gallery/156288983/Primordial-Feelings-Audio-Visual-Installation"
          }
          imgProp={""}
          textProp={"Primordial feelings - Audio-Visual Installation"}
        />

        <LinktreeButton
          linkProp={"https://www.behance.net/zaharenco"}
          imgProp={""}
          textProp={"Behance"}
        />
      </section>
    </main>
  );
}