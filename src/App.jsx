import { useState, useEffect, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
const LandingPage = lazy(() => import("./Landing"));
const Blog = lazy(() => import("./Blogs"));
const Events = lazy(() => import("./components/Events"));
const VisualArtComponent = lazy(() =>
  import("./components/VisualArtComponent")
);
const Horoscope = lazy(() => import("./components/HoroscopText"));
const MixComponent = lazy(() => import("./components/MixComponent"));
const AboutMuzicComponent = lazy(() =>
  import("./components/AboutMuzicComponent")
);
const BioComponent = lazy(() => import("./components/BioComponent"));
const Contacts = lazy(() => import("./components/Contacts"));
const Spotify = lazy(() => import("./components/Spotify"));
const TextMusic = lazy(() => import("./components/TextMusic"));

const TextFilm = lazy(() => import("./components/TextFilm"));
const MediaPhotos = lazy(() => import("./components/MediaPhotos"));
const BandMedia = lazy(() => import("./components/BandMedia"));
const Catatro = lazy(() => import("./components/media-visual/Catatro"));
const Primordial = lazy(() => import("./components/media-visual/Primordial"));

import LinkTree from "./pages/linktree/Linktree";
import { Suspense } from "react";

const LoadingFallback = () => (
  <div
    style={{
      backgroundColor: "black",
      height: "100vh",
      width: "100vw",
    }}
    className="loading-container"
  >
    {/* Add a proper loading spinner/animation */}
  </div>
);

function App() {
  const [words, setWords] = useState(["Film & Theatre", "Multimedia Art"]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 670) {
        setWords(["Film & Theatre", "Multi Media"]);
      } else {
        setWords(["Film & Theatre", "Multimedia Art"]);
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
    { text: "Playlist", url: "/inspiration", keys: 3 },
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
  const navItemsHoro = [{ text: "", url: "/news", keys: 12 }];

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
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
              <Blog
                tittleBlog={"NEW JAZZ ROMANIA"}
                navItems={navItems}
                number={211}
              >
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
                tittleBlog={"FILM & THEATRE"}
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
            path="visual/visual3"
            element={
              <Blog
                tittleBlog={"Catoptro-tono v.2"}
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
            path="/news"
            element={
              <Blog tittleBlog={"News"} navItems={navItemsHoro} number={255}>
                <Horoscope />
              </Blog>
            }
          />
          <Route path="/linktree" element={<LinkTree />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
