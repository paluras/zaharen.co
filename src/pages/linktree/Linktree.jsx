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

        {/* {!loading &&
          !error &&
          data.length > 0 &&
          data.map((item) => (
            <LinktreeButton
              key={item.id}
              linkProp={item.attributes.srclinktree} // Accessing the srclinktree from attributes
              imgProp={item.attributes.img || ""} // Accessing the img from attributes, default to empty string
              textProp={item.attributes.thetext} // Accessing the thetext from attributes
            />
          ))} */}
        {/* Static LinktreeButton instances */}
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
