import React, { useEffect, useState } from "react";
import { LinktreeButton } from "./components/LinktreeButton";
import "./linktree.style.css";
import { Helmet } from "react-helmet";

export default function LinkTree() {
  // const [videoSrc, setVideoSrc] = useState("");

  // const updateVideoSource = () => {
  //   const width = window.innerWidth;

  //   if (width <= 480) {
  //     setVideoSrc("./condition5video.webm"); // for mobile devices
  //   } else {
  //     setVideoSrc("./condition5bigVideo.webm"); // for desktops
  //   }
  // };

  // useEffect(() => {
  //   updateVideoSource();
  //   window.addEventListener("resize", updateVideoSource);
  //   return () => window.removeEventListener("resize", updateVideoSource);
  // }, []);

  // Function to track button clicks
  const trackButtonClick = (buttonName) => {
    if (window.fbq) {
      window.fbq("track", "Subscribe", {
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
            href="https://open.spotify.com/track/0mqUU3foODusY7YLK5PJlq?si=g93ZQZC4STimjD57Cyb-DQ&context=spotify%3Aalbum%3A6nWWlyMKA5CzX2LMaXagkU"
            onClick={() => trackButtonClick("Cover Album")}
          >
            <img
              id="linktree-img"
              src={"./Artwork Condition 4 v.5.jpg"}
              alt="Cover Album For Zaharenco"
            />
          </a>
        </div>
        <LinktreeButton
          linkProp={"https://youtu.be/xryrrX6E2PM?si=tCr8XsLZtvULaO7x"}
          imgProp={"./icons/youtubelogo.png"}
          textProp={""}
          altText={"YouTube"}
        />
        <LinktreeButton
          linkProp={
            "https://open.spotify.com/track/0mqUU3foODusY7YLK5PJlq?si=g93ZQZC4STimjD57Cyb-DQ&context=spotify%3Aalbum%3A6nWWlyMKA5CzX2LMaXagkU"
          }
          imgProp={"./icons/spotifylogo.png"}
          textProp={""}
          altText={"Spotify"}
        />
        <LinktreeButton
          linkProp={
            "https://open.spotify.com/playlist/7fP4Kd7jjElcPbHKihCmq3?si=7IHYCAQHRguxwPLYhmf04A"
          }
          imgProp={""}
          altText={"New Jazz Romania Playlist"}
          textProp={"New Jazz Romania Playlist"}
        />
        <LinktreeButton
          linkProp={
            "https://music.apple.com/au/album/s/1761316442?i=1761316443&app=music&itscg=10002&itsct=mus_1591749000&ct=pTf1e4CmIaPuOWw&at=1010l367Y&ls=1&mttnsubad=song_preadd_Measure"
          }
          imgProp={"./icons/applelogo.png"}
          altText={"Apple Music"}
          textProp={""}
        />
        <LinktreeButton
          linkProp={"https://on.soundcloud.com/e6hTbUim9KUiwBjg9"}
          imgProp={"./icons/soundcloudlogo.png"}
          altText={"SoundCloud"}
        />
        <LinktreeButton
          linkProp={
            "https://music.youtube.com/watch?v=xryrrX6E2PM&si=qkSJ5K9fvqv_7n0p"
          }
          imgProp={"./icons/youtubemusiclogo.png"}
          altText={"YouTube Music"}
        />
        <LinktreeButton
          linkProp={"https://tidal.com/track/368003631?u"}
          imgProp={"./icons/tidallogo.png"}
          altText={"Tidal"}
        />

        <LinktreeButton
          linkProp={"./"}
          imgProp={""}
          altText={"Website"}
          textProp={"Website"}
        />
      </section>
    </main>
  );
}
