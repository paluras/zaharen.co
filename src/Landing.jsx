import React from "react";
import { useState, useEffect, lazy, Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import TickerTape from "./components/Sliding/SlidingText.component";

function LandingPage({ crt, handleClickCRT }) {
  const [count, setCount] = useState(true);
  const [start, setStart] = useState("tv-main");
  const [mainPage, setMainPage] = useState("page");
  const [displays, setDisplay] = useState("flex");
  const [clicked, setClicked] = useState(false);
  const [secondDisplay, setSecondDisplay] = useState("0");
  const [compenentOverflow, setComponentOverflow] = useState("hidden");
  const [shouldRender, setShouldRender] = useState(false);
  const [one, setOne] = useState("0");

  const [words, setWords] = useState(["FILM COMPOSITION", "MULTIMEDIA ART"])

  useEffect(() =>{
    const handleResize = ()=>{
      if(window.innerWidth < 670){
        setWords(["FILM","MULTIMEDIA"])
      }else{
        setWords(["FILM COMPOSITION", "MULTIMEDIA ARTS"])
      }
    }
    handleResize()
    window.addEventListener("resize",handleResize)
    return()=>{
      window.removeEventListener("resize",handleResize)
    }
  }, [])


  useEffect(() => {
    const hasRendered = sessionStorage.getItem("hasRendered");
    if (!hasRendered) {
      // Set the flag to indicate that the content has been rendered
      sessionStorage.setItem("hasRendered", "true");
      setShouldRender(true);
    }
    if (hasRendered) {
      setOne("1");
      setComponentOverflow("scroll")
    }
  }, []);

  useEffect(() => {
    let theDisplay1;
    let theDisplay2;
    let componentDisplay;
    
    if (clicked) {
      theDisplay1 = setTimeout(() => {
        setDisplay("none");
      }, 2000);
      theDisplay2 = setTimeout(() => {
        setSecondDisplay("1");
      }, 300);
      componentDisplay = setTimeout(() => {
        setComponentOverflow("scroll");
      }, 500);
    }
    return () => clearTimeout(theDisplay1, theDisplay2, componentDisplay);
  }, [clicked]);

  function handleClick() {
    setCount(count);
    count ? setStart("tv-main-2") : setStart("tv-main");
    count ? setMainPage("page-main") : setStart("page");
    count ? setOne("1") : setOne("0");
    setClicked(true);
  }

  const [selectedButton, setSelectedButton] = useState("Button 1");

  const handleClickDisplay = (buttonName) => {
    setSelectedButton(buttonName);
  };




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
            <Nav handleClickCRT={handleClickCRT} number={100} />
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
                      <Link to="/bio">
                        <div className="row">
                          <div className="title">BIO</div>
                          <div className="dots"></div>
                          <div className="value">245</div>
                        </div>
                      </Link>
                      <Link to="/photos">
                        {" "}
                        <div className="row">
                          <div className="title">Photos</div>
                          <div className="dots"></div>
                          <div className="value">254</div>
                        </div>
                      </Link>
                      <Link to="/inspiration">
                        <div className="row">
                          <div className="title">inspiration</div>
                          <div className="dots"></div>
                          <div className="value">222</div>
                        </div>
                      </Link>
                      <Link to="/contacts">
                        {" "}
                        <div className="row">
                          <div className="title">CONTACTS</div>
                          <div className="dots"></div>
                          <div className="value">745</div>
                        </div>
                      </Link>
                    </div>
                  )}
                  {selectedButton === "Button 2" && (
                    <div className="table">
                      <Link to="/music">
                        {" "}
                        <div className="row">
                          <div className="title">MUSIC</div>
                          <div className="dots"></div>
                          <div className="value">124</div>
                        </div>
                      </Link>
                      <Link to="/film">
                        {" "}
                        <div className="row">
                          <div className="title">{words[0]}</div>
                          <div className="dots"></div>
                          <div className="value">135</div>
                        </div>
                      </Link>
                      <Link to="/visual">
                        <div className="row">
                          <div className="title">{words[1]}</div>
                          <div className="dots"></div>
                          <div className="value">412</div>
                        </div>
                      </Link>
                      <Link to="/mixing">
                        {" "}
                        <div className="row">
                          <div className="title">Mixing</div>
                          <div className="dots"></div>
                          <div className="value">765</div>
                        </div>
                      </Link>
                    </div>
                  )}
                  {selectedButton === "Button 3" && (
                    <div className="table">
                      <Link to="/about-music">
                        <div className="row">
                          <div className="title">ABOUT</div>
                          <div className="dots"></div>
                          <div className="value">245</div>
                        </div>
                      </Link>
                      <Link to="/events">
                        {" "}
                        <div className="row">
                          <div className="title">EVENT</div>
                          <div className="dots"></div>
                          <div className="value">254</div>
                        </div>
                      </Link>
                      <Link to="/music-media">
                        {" "}
                        <div className="row">
                          <div className="title">MEDIA</div>
                          <div className="dots"></div>
                          <div className="value">222</div>
                        </div>
                      </Link>
                    </div>
                  )}
                  {selectedButton === "Button 4" && (
                    <div className="table">
                      <Link to="/horoscop">
                      <div className="row">
                         
                        <div className="title">HOROSCOP</div>
                        <div className="dots"></div>
                        <div className="value">111</div>
                      </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="container-lower">
                <p>
                  Experience the artistic realm of Alexandru Zaharencu. Discover
                  his captivating music, compelling compositions, and
                  mesmerizing multimedia creations.</p><p> From jazz to contemporary,
                  film scores to interactive installations, his diverse talent
                  knows no boundaries. </p><p> Welcome to a world where imagination and
                  innovation intertwine.
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
