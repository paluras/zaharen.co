import { useState, useEffect, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
const LandingPage = lazy(() => import("./Landing"));
// import LandingPage from "./Landing";
const Blog = lazy(() => import("./Blogs"));
// import Blog from "./Blogs";
const Events = lazy(() => import("./components/Events"));
// import Events from "./components/Events";
const VisualArtComponent = lazy(() =>
  import("./components/VisualArtComponent")
);
// import VisualArtComponent from "./components/VisualArtComponent";

const Horoscope = lazy(() => import("./components/HoroscopText"));
// import Horoscope from "./components/HoroscopText";
import Layout from "./components/Layout";
const MixComponent = lazy(() => import("./components/MixComponent"));
// import MixComponent from "./components/MixComponent";
const AboutMuzicComponent = lazy(() =>
  import("./components/AboutMuzicComponent")
);
// import AboutMuzicComponent from "./components/AboutMuzicComponent";
const BioComponent = lazy(() => import("./components/BioComponent"));
// import BioComponent from "./components/BioComponent";
const Contacts = lazy(() => import("./components/Contacts"));
// import Contacts from "./components/Contacts";
const Spotify = lazy(() => import("./components/Spotify"));
// import Spotify from "./components/Spotify";
const TextMusic = lazy(() => import("./components/TextMusic"));
// import TextMusic from "./components/TextMusic";

const TextFilm = lazy(() => import("./components/TextFilm"));
// import TextFilm from "./components/TextFilm";
const MediaPhotos = lazy(() => import("./components/MediaPhotos"));
// import MediaPhotos from "./components/MediaPhotos";
const BandMedia = lazy(() => import("./components/BandMedia"));
// import BandMedia from "./components/BandMedia";
const Catatro = lazy(() => import("./components/media-visual/Catatro"));
// import Catatro from "./components/media-visual/Catatro";
const Primordial = lazy(() => import("./components/media-visual/Primordial"));
// import Primordial from "./components/media-visual/Primordial";

import LinkTree from "./pages/linktree/Linktree";
// const LinkTree = lazy(() => import("./pages/linktree/Linktree"));
import { Suspense } from "react";

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
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div
                  style={{
                    backgroundColor: "black",
                    height: "100vh",
                    width: "100wh",
                  }}
                >
                  Loading...
                </div>
              }
            >
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <LandingPage />
              </Suspense>
            }
          />
          <Route
            path="bio"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog tittleBlog={"BIO"} navItems={navItems} number={200}>
                  <BioComponent />
                </Blog>
              </Suspense>
            }
          />
          <Route
            path="photos"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog
                  tittleBlog={"PHOTOS"}
                  media={<MediaPhotos />}
                  navItems={navItems}
                  number={206}
                />
              </Suspense>
            }
          />
          <Route
            path="/contacts"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog
                  tittleBlog={"CONTACTS"}
                  contact={<Contacts />}
                  navItems={navItems}
                  number={214}
                />
              </Suspense>
            }
          />
          <Route
            path="/inspiration"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog
                  tittleBlog={"NEW JAZZ ROMANIA"}
                  navItems={navItems}
                  number={211}
                >
                  <Spotify />
                </Blog>
              </Suspense>
            }
          />
          <Route
            path="/music"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog tittleBlog={"MUSIC"} navItems={navItemsPort} number={222}>
                  <TextMusic />
                </Blog>
              </Suspense>
            }
          />
          <Route
            path="/film"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog
                  tittleBlog={"FILM & THEATRE"}
                  navItems={navItemsPort}
                  number={226}
                >
                  <TextFilm />
                </Blog>
              </Suspense>
            }
          />
          <Route
            path="/visual"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog
                  tittleBlog={"MULTIMEDIA ART"}
                  navItems={navItemsPort}
                  number={233}
                >
                  <VisualArtComponent />
                </Blog>
              </Suspense>
            }
          />
          <Route
            path="visual/visual1"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog
                  tittleBlog={"Catoptro-tono v.1"}
                  navItems={navItemsPort}
                  number={241}
                >
                  <Catatro />
                </Blog>
              </Suspense>
            }
          />
          <Route
            path="visual/visual2"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog
                  tittleBlog={"Primordial feelings "}
                  navItems={navItemsPort}
                  number={242}
                >
                  <Primordial />
                </Blog>
              </Suspense>
            }
          />

          <Route
            path="/mixing"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog
                  tittleBlog={"MIXING"}
                  navItems={navItemsPort}
                  number={236}
                >
                  <MixComponent />
                </Blog>
              </Suspense>
            }
          />
          <Route
            path="/about-music"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog tittleBlog={"About"} navItems={navItemsBand} number={239}>
                  <AboutMuzicComponent />
                </Blog>
              </Suspense>
            }
          />
          <Route
            path="/events"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog
                  tittleBlog={"Events"}
                  navItems={navItemsBand}
                  number={243}
                >
                  <Events />
                </Blog>
              </Suspense>
            }
          />
          <Route
            path="/music-media"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100vh",
                      width: "100wh",
                    }}
                  >
                    Loading...
                  </div>
                }
              >
                <Blog
                  tittleBlog={"Band Media"}
                  navItems={navItemsBand}
                  number={248}
                >
                  <BandMedia />
                </Blog>
              </Suspense>
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
