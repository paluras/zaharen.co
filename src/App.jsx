// App.jsx
import { useState, useEffect, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Remove lazy loading for Layout
import LandingPage from "./Landing";

// Lazy load components

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
const Catatrov2 = lazy(() => import("./components/media-visual/Catatrov2"));
const Primordial = lazy(() => import("./components/media-visual/Primordial"));
const LinkTree = lazy(() => import("./pages/linktree/Linktree"));

function App() {
  const [words, setWords] = useState(["Film & Theatre", "Multimedia Art"]);

  useEffect(() => {
    const handleResize = () => {
      setWords(
        window.innerWidth < 670
          ? ["Film & Theatre", "Multi Media"]
          : ["Film & Theatre", "Multimedia Art"]
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation configuration
  const navConfig = {
    about: [
      { text: "Bio", url: "/bio", keys: "1", startNumber: 200 },
      { text: "Photos", url: "/photos", keys: 2, startNumber: 206 },
      { text: "Playlist", url: "/inspiration", keys: 3, startNumber: 211 },
      { text: "Contact", url: "/contacts", keys: 4, startNumber: 214 },
    ],
    portfolio: [
      { text: "Music", url: "/music", keys: 5, startNumber: 222 },
      { text: words[0], url: "/film", keys: 6, startNumber: 226 },
      { text: words[1], url: "/visual", keys: 7, startNumber: 233 },
      { text: "Mixing", url: "/mixing", keys: 8, startNumber: 236 },
    ],
    band: [
      { text: "About", url: "/about-music", keys: 9, startNumber: 239 },
      { text: "Events", url: "/events", keys: 10, startNumber: 243 },
      { text: "Media", url: "/media", keys: 11, startNumber: 248 },
    ],
    news: [{ text: "", url: "/news", keys: 12, startNumber: 255 }],
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/linktree" element={<LinkTree />} />

      <Route element={<Layout navConfig={navConfig} />}>
        <Route path="/bio" element={<BioComponent />} />
        <Route path="/photos" element={<MediaPhotos />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/inspiration" element={<Spotify />} />
        <Route path="/music" element={<TextMusic />} />
        <Route path="/film" element={<TextFilm />} />
        <Route path="/visual" element={<VisualArtComponent />} />
        <Route path="/mixing" element={<MixComponent />} />
        <Route path="/visual/visual1" element={<Catatro />} />
        <Route path="/visual/visual2" element={<Primordial />} />
        <Route path="/visual/visual3" element={<Catatrov2 />} />
        <Route path="/about-music" element={<AboutMuzicComponent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/media" element={<BandMedia />} />
        <Route path="/news" element={<Horoscope />} />
      </Route>
    </Routes>
  );
}

export default App;
