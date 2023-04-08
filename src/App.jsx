import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Landing";
import Blog from "./Blogs";
import Home from "./Home";
import img from "../img.json";
import Modal from "./components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  const [crt, setCrt] = useState("");
  const [stateCrt, setStateCrt] = useState(false);

  function handleClickCRT() {
    setStateCrt(!stateCrt);
    stateCrt ? setCrt("crt") : setCrt("");
  }

  function handleImageClick(src) {
    setSelectedImg(src);
  }

  const bioText = `Alexandru Zaharencu is a musician, composer, and multimedia artist. His music is distinguished by a dramatic component, a balance of predictability and honesty, and an approach to various genres ranging from jazz to contemporary music, film music, or sound design.
  He was born in Tulcea, Romania, in 1998, and spent 12 years there studying classical piano performance. He continued his education at the National University of Music in Bucharest, where he earned bachelor's degrees in jazz-pop composition under Andrei Tudor and a master's in modern composition under Diana Rotaru.
  As a composer, he has worked on numerous film and theater music projects, as well as advertising and choreographic projects. He additionally exhibited interactive installations such as Primordial feelings, an audio-visual installation based on the conversion of cathode ray tube TVs into oscilloscopes, which was shown at the Diploma 2021 festival, and Catoptro-tono v.1, which is based on catoptrophobia, the fear of mirrors, which was presented at arca.expo 1.3. In addition to his artistic work, he has worked as an audio engineer for music and film sound, as well as a sound designer or foley artist. Since 2021, he has been leading his fusion band Zaharenco, which combines jazz, classical architecture, and rock influences.
  `;

  const visualArts = (
    <div className="visual-art">
      <div className="visual-container">
        <Link to="visual1">
          Catoptro-tono v.1 - AI based Sound Installation (2022)
        </Link>
        The catoptrophobia, or fear of mirrors, is the core of this
        installation. Through this work, I want to investigate the idea of sound
        self-mirroring based on motion tracking and the premise of gradually
        distorting one's perception of oneself and expressing it through sound
        alterations. My project collaborator was Python engineer Teo Milea. We
        used Ableton in conjunction with a trained artificial intelligence to
        produce the sound motion tracking. This works was part of the arca.expo
        1.3 exhibition.
      </div>
      <div className="visual-container">
        <Link to="visual2">
          Primordial feelings - Audio-Visual Installation (2021)
        </Link>
        The art installation exhibited at the 2021 Diploma Festival. The
        installation consists of four tvs and two pairs of headphones. Each TV
        is modified to represent an analog oscilloscope, which is used to
        visualize sound, and reflects one of the musical instruments used in the
        works. Because cathode ray tube televisions are perceived as
        "primordial" technology by the youth today, the television has been
        chosen as the primary visual component.
      </div>
    </div>
  );

  const spotify = (
    <div className="inspo-section">
      <iframe
        className="spotify"
        src="https://open.spotify.com/embed/track/1Qrg8KqiBpW07V7PNxwwwL?utm_source=generator&theme=0"
        width="100%"
        height="152px"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );

  const mediaPhotos = (
    <div className="media">
      {img.pageOne.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          onClick={() => handleImageClick(image.src)}
        />
      ))}
      {selectedImg && (
        <Modal
          src={selectedImg}
          alt="full-image"
          onClose={() => setSelectedImg(null)}
        />
      )}
    </div>
  );

  const mediaVisual1 = (
    <div className="media">
      {img.pageTwo.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          onClick={() => handleImageClick(image.src)}
        />
      ))}
      {selectedImg && (
        <Modal
          src={selectedImg}
          alt="full-image"
          onClose={() => setSelectedImg(null)}
        />
      )}
      <video width="300" height="300" controls>
        <source
          src="https://raw.githubusercontent.com/paluras/new/master/src/assets/project1/video.webm"
          alt=""
        />
      </video>
    </div>
  );

  const mediaVisual2 = (
    <div className="media">
      {img.pageThree.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          onClick={() => handleImageClick(image.src)}
        />
      ))}
      {selectedImg && (
        <Modal
          src={selectedImg}
          alt="full-image"
          onClose={() => setSelectedImg(null)}
        />
      )}
      <video width="300" height="300" controls>
        <source
          src="https://raw.githubusercontent.com/paluras/new/master/src/assets/project2/pVid1.webm"
          alt=""
        />
      </video>
      <video width="300" height="300" controls>
        <source
          src="https://raw.githubusercontent.com/paluras/new/master/src/assets/project2/vidP2.webm"
          alt=""
        />
      </video>
      <video width="300" height="300" controls>
        <source
          src="https://raw.githubusercontent.com/paluras/new/master/src/assets/project2/vidp3.webm"
          alt=""
        />
      </video>
    </div>
  );

  const contacts = (
    <div className="contact-text">
      <div>
        <a href="mailto:zaharencu.alexandru@gmail.com?">
        <img width={"42px"} src="\icons\Mail.png" alt="" />Mail
       </a>
      </div>
      <div>
        <a href="https://www.facebook.com/zaharen.co">
          <img width={"42px"} src="\icons\Facebook.png" alt="" />Facebook
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/zaharen.co/">
        <img width={"42px"} src="\icons\Instagram.png" alt="" />Instagram
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com/@zaharenco">
        <img width={"42px"} src="\icons\YouTube.png" alt="" />Youtube
        </a>
      </div>
      <div>
        <a href="https://open.spotify.com/artist/4azDTEsE76hndB8paNOEe8?si=dBL-mht3RRapA-CO_-miEg&fbclid=IwAR2IwJVZyvZxF0uPJiI8uBJBqBTCiKa0-0b0wqabiZUxj5rDimbykAR5saY&nd=1">
        <img width={"42px"} src="\icons\Spotify.png" alt="" />
          Spotify
          
        </a>
      </div>
      <div>
        <a href="https://linktr.ee/zaharen.co?utm_source=linktree_profile_share&ltsid=56442ba0-afdf-4bbd-8046-e6c2f7bf8572">
          
        <img width={"42px"} src="\icons\ShareThis.png" alt="" />LinkTree
         
        </a>
      </div>
    </div>
  );

  const navItems = [
    { text: "Bio", url: "/bio" },
    { text: "Photos", url: "/photos" },
    { text: "Inspo", url: "/inspiration" },
    { text: "Contact", url: "/contacts" },
  ];

  const navItemsPort = [
    { text: "Music", url: "/music" },
    { text: "Film Composition", url: "/film" },
    { text: "Multimedia Art", url: "/visual" },
    { text: "Mixing", url: "/mixing" },
  ];

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<LandingPage crt={crt} handleClickCRT={handleClickCRT} />}
        />
        <Route
          path="/home"
          element={<Home crt={crt} handleClickCRT={handleClickCRT} />}
        />
        <Route
          path="/bio"
          element={
            <Blog
              textBlog={bioText}
              tittleBlog={"Bio"}
              navItems={navItems}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
        <Route
          path="/photos"
          element={
            <Blog
              textBlog={"Photo photo photo"}
              tittleBlog={"Photos"}
              media={mediaPhotos}
              navItems={navItems}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <Blog
              textBlog={""}
              tittleBlog={"Contacts"}
              contact={contacts}
              navItems={navItems}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
        <Route
          path="/inspiration"
          element={
            <Blog
              textBlog={spotify}
              tittleBlog={"Inspiration"}
              navItems={navItems}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
        <Route
          path="/music"
          element={
            <Blog
              textBlog={"Music"}
              tittleBlog={"Music"}
              navItems={navItemsPort}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
        <Route
          path="/film"
          element={
            <Blog
              textBlog={"text"}
              tittleBlog={"Film Composition"}
              navItems={navItemsPort}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
        <Route
          path="/visual"
          element={
            <Blog
              textBlog={visualArts}
              tittleBlog={"Visual"}
              navItems={navItemsPort}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
        <Route
          path="/visual/visual1"
          element={
            <Blog
              textBlog={mediaVisual1}
              tittleBlog={"Catoptro-tono v.1"}
              navItems={navItemsPort}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
        <Route
          path="/visual/visual2"
          element={
            <Blog
              textBlog={mediaVisual2}
              tittleBlog={"Primordial feelings "}
              navItems={navItemsPort}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
        <Route
          path="/mixing"
          element={
            <Blog
              textBlog={"text"}
              tittleBlog={"Mixing"}
              navItems={navItemsPort}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
