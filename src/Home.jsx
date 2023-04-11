import React from "react";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function Home({ crt, handleClickCRT }) {
  const [selectedButton, setSelectedButton] = useState("Button 1");

  const handleClickDisplay = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="App">
      <div className="page-main">
        <div className="components">
          <main className={`main ${crt}`}>
            <Nav handleClickCRT={handleClickCRT} />

            <img
              className="logo"
              src="https://raw.githubusercontent.com/paluras/new/master/src/assets/Zaharenco-logo.png"
              alt="logo-zaharenco"
            />

            <div className="container">
              <div className="container-left">
                <ul>
                  <li onClick={() => handleClickDisplay("Button 1")}>About</li>
                  <li onClick={() => handleClickDisplay("Button 2")}>
                    Portfolio
                  </li>
                  <li onClick={() => handleClickDisplay("Button 3")}>Band</li>
                  <li onClick={() => handleClickDisplay("Button 4")}>
                    Horoscop
                  </li>
                </ul>
              </div>
              <div className="container-right">
                {selectedButton === "Button 1" && (
                  <div className="table">
                    <div className="row">
                      <div className="title">
                        <Link to="/bio"> Bio</Link>
                      </div>
                      <div className="dots"></div>
                      <div className="value">245</div>
                    </div>
                    <div className="row">
                      <div className="title">
                        <Link to="/photos">Photos</Link>
                      </div>
                      <div className="dots"></div>
                      <div className="value">254</div>
                    </div>
                    <div className="row">
                      <div className="title">
                        <Link to="/inspiration">Inspiration</Link>
                      </div>
                      <div className="dots"></div>
                      <div className="value">222</div>
                    </div>
                    <div className="row">
                      <div className="title">
                        <Link to="/contacts"> Contacts</Link>
                      </div>
                      <div className="dots"></div>
                      <div className="value">745</div>
                    </div>
                  </div>
                )}
                {selectedButton === "Button 2" && (
                  <div className="table">
                    <div className="row">
                      <div className="title">
                        <Link to="/music">Music</Link>
                      </div>
                      <div className="dots"></div>
                      <div className="value">124</div>
                    </div>
                    <div className="row">
                      <div className="title">
                        <Link to="/film">Film</Link>
                      </div>
                      <div className="dots"></div>
                      <div className="value">135</div>
                    </div>
                    <div className="row">
                      <div className="title">
                        <Link to="/visual">Multimedia</Link>
                      </div>
                      <div className="dots"></div>
                      <div className="value">412</div>
                    </div>
                    <div className="row">
                      <div className="title">
                        <Link to="/mixing">Mixing</Link>
                      </div>
                      <div className="dots"></div>
                      <div className="value">765</div>
                    </div>
                  </div>
                )}
                {selectedButton === "Button 3" && (
                  <div className="table">
                    <div className="row">
                      <div className="title"><Link to="/about-music">About</Link></div>
                      <div className="dots"></div>
                      <div className="value">245</div>
                    </div>
                    <div className="row">
                      <div className="title"><Link to="/events">Event</Link></div>
                      <div className="dots"></div>
                      <div className="value">254</div>
                    </div>
                    <div className="row">
                      <div className="title"><Link to="/music-media">Media</Link></div>
                      <div className="dots"></div>
                      <div className="value">222</div>
                    </div>
                  </div>
                )}
                {selectedButton === "Button 4" && (
                  <div className="table">
                    <div className="row">
                      <div className="title">asdasdt</div>
                      <div className="dots"></div>
                      <div className="value">12412</div>
                    </div>
                    <div className="row">
                      <div className="title">asdasf</div>
                      <div className="dots"></div>
                      <div className="value">135234</div>
                    </div>
                    <div className="row">
                      <div className="title">asfdfg</div>
                      <div className="dots"></div>
                      <div className="value">412</div>
                    </div>
                    <div className="row">
                      <div className="title">asdf</div>
                      <div className="dots"></div>
                      <div className="value">7654</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="container-lower">
              <p>
                Zaharenco is a jazz quartet whose music aims to explore the New
                Jazz scene by fusing jazz with classical and rock influences. He
                submits his works to the issue of musical predictability,
                seeking a balance between predictability and uncertainty, and
                thus managing to reach a wide range of emotions.
              </p>
              <div className="colored-box">
                <p>
                  Primordial feelings, his first EP, is an exposition of the 2
                  main topics addressed: the impulsive being and the
                  ever-changing sentimental self.
                </p>
              </div>
              <div className="line-border">
                <div className="line"></div>
                <p>www.zaharen.co</p>
                <div className="line"></div>
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
