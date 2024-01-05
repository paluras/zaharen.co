import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import TickerTape from "./components/Sliding/SlidingText.component";
import Table from "./components/landing/Table";

function LandingPage() {
  const [count, setCount] = useState(true);
  const [start, setStart] = useState("tv-main");
  const [displays, setDisplay] = useState("flex");
  const [clicked, setClicked] = useState(false);

  const [compenentOverflow, setComponentOverflow] = useState("hidden");
  const [shouldRender, setShouldRender] = useState(false);
  const [one, setOne] = useState("0");
  const [selectedButton, setSelectedButton] = useState("Button 1");
  const [crt, setCrt] = useState(null);

  function handleClickCRT() {
    crt === null ? setCrt("crt") : setCrt(null);
  }

  const [words, setWords] = useState(["FILM COMPOSITION", "MULTIMEDIA ART"]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 670) {
        setWords(["FILM", "MULTIMEDIA"]);
      } else {
        setWords(["FILM COMPOSITION", "MULTIMEDIA ARTS"]);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const hasRendered = sessionStorage.getItem("hasRendered");
    if (!hasRendered) {
      // Set the flag to indicate that the content has been rendered
      sessionStorage.setItem("hasRendered", "true");
      setShouldRender(true);
    }
    if (hasRendered) {
      setOne("1");
      setComponentOverflow("scroll");
    }
  }, []);

  // This is top notch retarded
  useEffect(() => {
    let theDisplay1;
    let componentDisplay;

    if (clicked) {
      theDisplay1 = setTimeout(() => {
        setDisplay("none");
      }, 2000);

      componentDisplay = setTimeout(() => {
        setComponentOverflow("scroll");
      }, 500);
    }
    return () => clearTimeout(theDisplay1, componentDisplay);
  }, [clicked]);

  function handleClick() {
    setCount(count);
    count ? setStart("tv-main-2") : setStart("tv-main");

    count ? setOne("1") : setOne("0");
    setClicked(true);
  }

  const handleClickDisplay = (buttonName) => {
    setSelectedButton(buttonName);
  };
// Bad logic so i have to keep this array here
  const obj = [
    [
      {
        path: "/bio",
        title: "BIO",
        dots: 203,
        id: 1,
      },
      {
        path: "/photos",
        title: "Photos",
        dots: 209,
        id: 2,
      },
      {
        path: "/inspiration",
        title: "Inspiration",
        dots: 214,
        id: 3,
      },
      {
        path: "/contacts",
        title: "Contact",
        dots: 217,
        id: 4,
      },
    ],
    [
      {
        path: "/music",
        title: "MUSIC",
        dots: 225,
        id: 5,
      },
      {
        path: "/film",
        title: `${words[0]}`,
        dots: 229,
        id: 6,
      },
      {
        path: "/visual",
        title: `${words[1]}`,
        dots: 236,
        id: 7,
      },
      {
        path: "/mixing",
        title: "Mixing",
        dots: 239,
        id: 8,
      },
    ],
    [
      {
        path: "/about-music",
        title: "ABOUT",
        dots: 242,
        id: 9,
      },
      {
        path: "/events",
        title: "EVENT",
        dots: 246,
        id: 10,
      },
      {
        path: "/music-media",
        title: "MEDIA",
        dots: 251,
        id: 11,
      },
    ],
    [
      {
        path: "/horoscop",
        title: "HOROSCOP",
        dots: 255,
        id: 12,
      },
    ],
  ];

  return (
    <div className="App">
      {shouldRender && (
        <div style={{ display: `${displays}` }} className="img-container">
          <img
            onClick={handleClick}
            className={start}
            src="/tv.png"
            alt="tv landing page"
          ></img>
        </div>
      )}
      <div className="white"></div>
      <div style={{ opacity: `${one}` }}>
        <div
          style={{ overflowY: `${compenentOverflow}` }}
          className="components"
        >
          <main className={`main ${crt}`}>
            <Nav startNumber={101}>
              {" "}
              <span className="crt-mode" onClick={() => handleClickCRT()}>
                CRT
              </span>
            </Nav>
            <div className="for-fix">
              <img
                className="logo"
                src="/Zaharenco-logo.png"
                alt="logo-zaharenco"
              />

              <div className="container">
                <div className="container-left">
                  <ul>
                    <li onClick={() => handleClickDisplay("Button 1")}>
                      ABOUT
                    </li>
                    <li onClick={() => handleClickDisplay("Button 2")}>
                      PORTFOLIO
                    </li>
                    <li onClick={() => handleClickDisplay("Button 3")}>BAND</li>
                    <li onClick={() => handleClickDisplay("Button 4")}>
                      HOROSCOP
                    </li>
                  </ul>
                </div>
                <div className="container-right">
                  {selectedButton === "Button 1" && (
                    <div className="table">
                     <Table obj={obj[0]} />
                    </div>
                  )}
                  {selectedButton === "Button 2" && (
                    <div className="table">
                       <div className="table">
                     <Table obj={obj[1]} />
                    </div>
                    </div>
                  )}
                  {selectedButton === "Button 3" && (
                    <div className="table">
                      <Table obj={obj[2]} />
                    </div>
                  )}
                  {selectedButton === "Button 4" && (
                    <div className="table">
                      <Table obj={obj[3]} />
                    </div>
                  )}
                </div>
              </div>

              <div className="container-lower">
                <p>
                  Experience the artistic realm of Alexandru Zaharencu. Discover
                  his captivating music, compelling compositions, and
                  mesmerizing multimedia creations.
                </p>
                <p>
                  {" "}
                  From jazz to contemporary, film scores to interactive
                  installations, his diverse talent knows no boundaries.{" "}
                </p>
                <p>
                  {" "}
                  Welcome to a world where imagination and innovation
                  intertwine.
                </p>
                <p className="gpt">-Text generated by ChatGPT</p>

                <div className="colored-box">
                  <TickerTape />
                </div>
                <div className="line-border">
                  <div className="line"></div>
                  <p>www.zaharen.co</p>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <Footer />
            <div className="place-ex"></div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
