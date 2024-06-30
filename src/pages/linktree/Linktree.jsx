import React, { useEffect, useState } from "react";
import { LinktreeButton } from "./components/LinktreeButton";
import "./linktree.style.css";

export default function LinkTree() {
  const [videoSrc, setVideoSrc] = useState("");
  const [data, setData] = useState([
    {
      id: 888,
      attributes: { srclinktree: "asdasd", img: "", thetext: "asdasd" },
    },
  ]);
  const [loading, setLoading] = useState(true); // Loading state to show loading indicator
  const [error, setError] = useState(null); // Error state to show error message if needed

  const token =
    "98518ba649c215aa43da7e313e4e85acb08e00dd07b530f11547648809b42a2cb9c63d821b20f2a83299a144e4ade9a53e7e174b5e90e640587b048a9239ff6e23ae7e7b2a5ebe97234e39b4a7649aa977de51d757983d0c2f6d7d08fcdbde4034a3b16299f7b23171b568da6f014493185cef930d3f6515e2ac9249841c694e";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const response = await fetch("/api/external-api", {
          headers: {
            Authorization: `Bearer ${token}`, // Include your token here
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setData(data); // Update state with fetched data
      } catch (error) {
        setError(error.message); // Set error message if fetch fails
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount
  console.log(data);
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

        {!loading &&
          !error &&
          data.length > 0 &&
          data.map((item) => (
            <LinktreeButton
              key={item.id}
              linkProp={item.attributes.srclinktree} // Accessing the srclinktree from attributes
              imgProp={item.attributes.img || ""} // Accessing the img from attributes, default to empty string
              textProp={item.attributes.thetext} // Accessing the thetext from attributes
            />
          ))}
        {/* Static LinktreeButton instances */}
        <LinktreeButton linkProp={"./"} imgProp={""} textProp={"Zaharen.co"} />
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
