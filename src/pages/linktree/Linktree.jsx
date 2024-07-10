import React, { useEffect, useState } from "react";
import { LinktreeButton } from "./components/LinktreeButton";
import "./linktree.style.css";
import { Helmet } from "react-helmet";

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

  // Function to track button clicks
  const trackButtonClick = (buttonName) => {
    if (window.fbq) {
      window.fbq("track", "Lead", {
        button_name: buttonName,
      });
    }
  };

  return (
    <main className="linktree-main">
      <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '438399329170276');
            fbq('track', 'PageView');
          `}
        </script>
      </Helmet>
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
            onClick={() => trackButtonClick("Cover Album")}
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
          altText={"Spotify"}
        />
        <LinktreeButton
          linkProp={
            "https://music.apple.com/tr/album/condition-5-single/1750855792"
          }
          imgProp={"./icons/applelogo.png"}
          altText={"Apple Music"}
          textProp={""}
        />
        <LinktreeButton
          linkProp={
            "https://soundcloud.com/zaharenco/condition-5?si=64706e423ae44ba59b072f02532a3ab9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          }
          imgProp={"./icons/soundcloudlogo.png"}
          altText={"SoundCloud"}
        />
        <LinktreeButton
          linkProp={"https://music.youtube.com/watch?v=d104n1_4-JQ"}
          imgProp={"./icons/youtubemusiclogo.png"}
          altText={"YouTube Music"}
        />
        <LinktreeButton
          linkProp={"https://tidal.com/track/368003631?u"}
          imgProp={"./icons/tidallogo.png"}
          altText={"Tidal"}
        />
        <LinktreeButton
          linkProp={
            "https://www.youtube.com/watch?v=d104n1_4-JQ&list=OLAK5uy_l7WTg0-6Mxygnc5Qnr1QVl3e7B9htiGdE"
          }
          imgProp={"./icons/youtubelogo.png"}
          textProp={""}
          altText={"YouTube"}
        />

        <LinktreeButton
          linkProp={"./"}
          imgProp={""}
          altText={"Zaharen.co"}
          textProp={"Zaharen.co"}
        />
      </section>
    </main>
  );
}
