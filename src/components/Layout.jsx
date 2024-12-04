// components/Layout.jsx
import { useLocation } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import NavSecond from "./SecondNav";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

function Layout({ navConfig }) {
  const [crt, setCrt] = useState(null);
  const [currentTitle, setCurrentTitle] = useState("");
  const location = useLocation();

  const getNavConfig = (path) => {
    if (
      path.startsWith("/bio") ||
      path.startsWith("/photos") ||
      path.startsWith("/contacts") ||
      path.startsWith("/inspiration")
    ) {
      return navConfig.about;
    }
    if (
      path.startsWith("/music") ||
      path.startsWith("/film") ||
      path.startsWith("/visual") ||
      path.startsWith("/mixing")
    ) {
      return navConfig.portfolio;
    }
    if (
      path.startsWith("/about-music") ||
      path.startsWith("/events") ||
      path.startsWith("/media")
    ) {
      return navConfig.band;
    }
    return navConfig.news;
  };

  const getTitleFromPath = (path) => {
    // Handle nested routes first
    if (path.startsWith("/visual/visual1")) return "Catoptro-tono v.1";
    if (path.startsWith("/visual/visual2")) return "Primordial feelings";
    if (path.startsWith("/visual/visual3")) return "Catoptro-tono v.2";

    const titles = {
      "/bio": "BIO",
      "/photos": "PHOTOS",
      "/contacts": "CONTACTS",
      "/inspiration": "NEW JAZZ ROMANIA",
      "/music": "MUSIC",
      "/film": "FILM & THEATRE",
      "/visual": "MULTIMEDIA ART",
      "/mixing": "MIXING",
      "/about-music": "ABOUT",
      "/events": "EVENTS",
      "/media": "BAND MEDIA",
      "/news": "NEWS",
    };

    return titles[path] || "DEFAULT TITLE";
  };

  useEffect(() => {
    console.log("Route changed to:", location.pathname);
    const newTitle = getTitleFromPath(location.pathname);
    console.log("New title:", newTitle);
    setCurrentTitle(newTitle);
  }, [location.pathname]);

  const currentNavItems = getNavConfig(location.pathname);
  const currentStartNumber =
    currentNavItems.find((item) => location.pathname.startsWith(item.url))
      ?.startNumber || 200;

  const pageTransition = {
    initial: {
      clipPath: "inset(0 0 100% 0)",
    },
    animate: {
      clipPath: "inset(0 0 0% 0)",
    },
    exit: {
      clipPath: "inset(100% 0 0 0)",
    },
    transition: {
      duration: 0.2,
      ease: "linear",
    },
  };

  const titleTransition = {
    initial: {
      clipPath: "inset(0 0 100% 0)",
    },
    animate: {
      clipPath: "inset(0 0 0% 0)",
    },
    exit: {
      clipPath: "inset(100% 0 0 0)",
    },
    transition: {
      duration: 0.15,
      ease: "linear",
    },
  };
  return (
    <div className="App">
      <div>
        <div className="page-main">
          <div className="components-blog">
            <main className={`main-blogs ${crt}`}>
              <div className="blog-top">
                <Nav startNumber={currentStartNumber}>
                  <span
                    className="crt-mode"
                    onClick={() =>
                      setCrt((prev) => (prev === null ? "crt" : null))
                    }
                  >
                    CRT
                  </span>
                </Nav>
                <NavSecond navItems={currentNavItems} />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTitle}
                    className="container-tittle"
                    {...titleTransition}
                    style={{ overflow: "hidden" }}
                  >
                    {currentTitle}
                  </motion.div>
                </AnimatePresence>

                <div className="the-main-content">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={location.pathname}
                      className="container-main"
                      {...pageTransition}
                      style={{
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div className="container-para">
                        <div className="text">
                          <Suspense>
                            <Outlet />
                          </Suspense>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <Footer />
              <div className="place-ex"></div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
