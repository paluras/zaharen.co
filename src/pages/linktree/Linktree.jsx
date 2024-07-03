import React, { useEffect, useState } from "react";
import { LinktreeButton } from "./components/LinktreeButton";
import "./linktree.style.css";

export default function LinkTree() {
  const [videoSrc, setVideoSrc] = useState("");

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
        <LinktreeButton
          linkProp={
            "https://open.spotify.com/track/1uoIexbNMtcmitN7q9c5B1?si=190fe1597f5d45fb"
          }
          imgProp={"./icons/spotifylogo.png"}
          textProp={""}
        />
        <LinktreeButton
          linkProp={
            "https://music.apple.com/tr/album/condition-5-single/1750855792"
          }
          imgProp={"./icons/applelogo.png"}
          textProp={""}
        />
        <LinktreeButton
          linkProp={
            "https://soundcloud.com/zaharenco/condition-5?si=64706e423ae44ba59b072f02532a3ab9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          }
          imgProp={"./icons/soundcloudlogo.png"}
        />
        <LinktreeButton
          linkProp={"https://music.youtube.com/watch?v=d104n1_4-JQ"}
          imgProp={"./icons/youtubemusiclogo.png"}
        />
        <LinktreeButton
          linkProp={"https://tidal.com/track/368003631?u"}
          imgProp={"./icons/tidallogo.png"}
        />
        <LinktreeButton
          linkProp={
            "https://www.youtube.com/watch?v=d104n1_4-JQ&list=OLAK5uy_l7WTg0-6Mxygnc5Qnr1QVl3e7B9htiGdE"
          }
          imgProp={"./icons/youtubelogo.png"}
          textProp={""}
        />

        <LinktreeButton linkProp={"./"} imgProp={""} textProp={"Zaharen.co"} />
      </section>
    </main>
  );
}
