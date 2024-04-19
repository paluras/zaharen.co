import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landing";
import Blog from "./Blogs";
import Events from "./components/Events";
import VisualArtComponent from "./components/VisualArtComponent";
import Horoscope from "./components/HoroscopText";
import Layout from "./components/Layout";
import MixComponent from "./components/MixComponent";
import AboutMuzicComponent from "./components/AboutMuzicComponent";
import BioComponent from "./components/BioComponent";
import Contacts from "./components/Contacts";
import Spotify from "./components/Spotify";
import TextMusic from "./components/TextMusic";
import TextFilm from "./components/TextFilm";
import MediaPhotos from "./components/MediaPhotos";
import BandMedia from "./components/BandMedia";
import Catatro from "./components/media-visual/Catatro";
import Primordial from "./components/media-visual/Primordial";

function App() {
  const [words, setWords] = useState(["Film Composition", "Multimedia Art"]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 670) {
        setWords(["Film", "Multi Media"]);
      } else {
        setWords(["Film Composition", "Multimedia Art"]);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // this should be context

  // Display the nav items based on Home / About etc
  const navItems = [
    { text: "Bio", url: "/bio", keys: "1" },
    { text: "Photos", url: "/photos", keys: 2 },
    { text: "Inspo", url: "/inspiration", keys: 3 },
    { text: "Contact", url: "/contacts", keys: 4 },
  ];

  const navItemsPort = [
    { text: "Music", url: "/music", keys: 5 },
    { text: `${words[0]}`, url: "/film", keys: 6 },
    { text: `${words[1]}`, url: "/visual", keys: 7 },
    { text: "Mixing", url: "/mixing", keys: 8 },
  ];
  const navItemsBand = [
    { text: "About", url: "/about-music", keys: 9 },
    { text: "Events", url: "/events", keys: 10 },
    { text: "Media", url: "/music-media", keys: 11 },
  ];
  const navItemsHoro = [{ text: "", url: "/horoscop", keys: 12 }];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route
            path="bio"
            element={
              <Blog tittleBlog={"BIO"} navItems={navItems} number={200}>
                <BioComponent />
              </Blog>
            }
          />
          <Route
            path="photos"
            element={
              <Blog
                tittleBlog={"PHOTOS"}
                media={<MediaPhotos />}
                navItems={navItems}
                number={206}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <Blog
                tittleBlog={"CONTACTS"}
                contact={<Contacts />}
                navItems={navItems}
                number={214}
              />
            }
          />
          <Route
            path="/inspiration"
            element={
              <Blog tittleBlog={"INSPIRATION"} navItems={navItems} number={211}>
                <Spotify />
              </Blog>
            }
          />
          <Route
            path="/music"
            element={
              <Blog tittleBlog={"MUSIC"} navItems={navItemsPort} number={222}>
                <TextMusic />
              </Blog>
            }
          />
          <Route
            path="/film"
            element={
              <Blog
                tittleBlog={"FILM COMPOSITION"}
                navItems={navItemsPort}
                number={226}
              >
                <TextFilm />
              </Blog>
            }
          />
          <Route
            path="/visual"
            element={
              <Blog
                tittleBlog={"MULTIMEDIA ART"}
                navItems={navItemsPort}
                number={233}
              >
                <VisualArtComponent />
              </Blog>
            }
          />
          <Route
            path="visual/visual1"
            element={
              <Blog
                tittleBlog={"Catoptro-tono v.1"}
                navItems={navItemsPort}
                number={241}
              >
                <Catatro />
              </Blog>
            }
          />
          <Route
            path="visual/visual2"
            element={
              <Blog
                tittleBlog={"Primordial feelings "}
                navItems={navItemsPort}
                number={242}
              >
                <Primordial />
              </Blog>
            }
          />

          <Route
            path="/mixing"
            element={
              <Blog tittleBlog={"MIXING"} navItems={navItemsPort} number={236}>
                <MixComponent />
              </Blog>
            }
          />
          <Route
            path="/about-music"
            element={
              <Blog tittleBlog={"About"} navItems={navItemsBand} number={239}>
                <AboutMuzicComponent />
              </Blog>
            }
          />
          <Route
            path="/events"
            element={
              <Blog tittleBlog={"Events"} navItems={navItemsBand} number={243}>
                <Events />
              </Blog>
            }
          />
          <Route
            path="/music-media"
            element={
              <Blog
                tittleBlog={"Band Media"}
                navItems={navItemsBand}
                number={248}
              >
                <BandMedia />
              </Blog>
            }
          />
          <Route
            path="/horoscop"
            element={
              <Blog
                tittleBlog={"Horoscop"}
                navItems={navItemsHoro}
                number={255}
              >
                <Horoscope />
              </Blog>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
