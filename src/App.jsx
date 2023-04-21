import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Landing";
import Blog from "./Blogs";
import Home from "./Home";
import img from "../img.json";
import Modal from "./components/Modal";
import SongPlayer from "./components/Player";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [show, setShow] = useState("0px");
  const [show2, setShow2] = useState("0px");
  const [crt, setCrt] = useState("");
  const [stateCrt, setStateCrt] = useState(false);
  const [popupState, setpopupState] = useState(false);
  const [popupState2, setpopupState2] = useState(false);

  function handleClickCRT() {
    setStateCrt(!stateCrt);
    stateCrt ? setCrt("crt") : setCrt("");
  }
  function handlePopUp() {
    setpopupState(!popupState);
    if (show === "0px") setShow("17vh");
    else {
      setShow("0px");
    }
  }
  function handlePopUp2() {
    setpopupState2(!popupState2);
    if (show2 === "0px") setShow2("23vh");
    else {
      setShow2("0px");
    }
  }

  function handleImageClick(src) {
    setSelectedImg(src);
  }

  const filmComp = (
    <div className="media">
      <div>
        <h4>Punguista (2022)</h4>
        <iframe
          className="video-container"
          width="300"
          height="300"
          src="https://www.youtube.com/embed/m8iwG8cajcM?modestbranding=1&showinfo=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h4>Salve Boutique (2022)</h4>
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/m8iwG8cajcM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h4>Isabelle (2021)</h4>
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/m8iwG8cajcM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h4>Titanik Kabaret - theater (2021)</h4>
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/m8iwG8cajcM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h4>Die Melodie Der Welt - rescore (2021)</h4>
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/m8iwG8cajcM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h4>inHabited - contest rescore (2020)</h4>
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/m8iwG8cajcM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h4>Pelicam IFF - jingle (2020)</h4>
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/m8iwG8cajcM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h4>The Master of the Waters (2020)</h4>
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/m8iwG8cajcM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h4>Danny and the Wild Bunch - contest rescore (2019)</h4>
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/m8iwG8cajcM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );

  const textMusictext = {
    text1: (
      <a href="https://on.soundcloud.com/zCpfC" target="_blank">
        Piano Sonata No.1 (2022)
      </a>
    ),
    text2: (
      <a
        target="_blank"
        href="https://open.spotify.com/album/4z5ldoG03eOzAsPBvbpCj0?si=oTJCNnzKQK2T6UJ1zU4IvA"
      >
        Primordial feelings (2021)
      </a>
    ),
    text3: (
      <a href="https://on.soundcloud.com/4Lgkt" target="_blank">
        Cold Feet
      </a>
    ),
    text4: (
      <a href="https://youtu.be/GlA0zGgIUH8" target="_blank">
        Inside of you (2020)
      </a>
    ),
    text5: (
      <a href="https://on.soundcloud.com/ULp64" target="_blank">
        Provincial (2019)
      </a>
    ),
    textConditions1: <div>Conditions 1</div>,
    textConditions2: <div>Conditions 2</div>,
    textConditions4: <div>Conditions 4</div>,
  };

  const textMusic = (
    <div className="text-music song">
      <div>
        <SongPlayer song={"Audio/Sonata no.1.mp3"} text={textMusictext.text1} />
      </div>
      <div className="allthecacat">
        <div className="container-player">
          <img
            className="icon"
            onClick={handlePopUp}
            src={popupState ? "/icons/up.svg" : "/icons/down.svg"}
            alt=""
          />
          <a
            target="_blank"
            href="https://open.spotify.com/album/4z5ldoG03eOzAsPBvbpCj0?si=oTJCNnzKQK2T6UJ1zU4IvA"
          >
            Primordial feelings (2021)
          </a>
        </div>
        <div style={{ height: `${show}` }} className="drop-down-album">
          <div>
            <SongPlayer
              song={"Audio/Primordial feelings.mp3"}
              text={"Primordial Feelings"}
            />
          </div>
          <div>
            <SongPlayer
              song={"/Audio/Cold feet.mp3"}
              text={"Cold Feet"}
            />
          </div>
        </div>
      </div>
      <div>
        <SongPlayer
          song={"Audio/Inside of you.mp3"}
          text={textMusictext.text4}
        />
      </div>
      <div className="allthecacat">
        <div className="container-player">
          <img
            className="icon"
            onClick={handlePopUp2}
            src={popupState2 ? "/icons/up.svg" : "/icons/down.svg"}
            alt=""
          />
           <a href="https://on.soundcloud.com/4Lgkt" target="_blank">
        Conditions(2021)
      </a>
        </div>
        <div style={{ height: `${show2}` }} className="drop-down-album">
          <div>
            <SongPlayer
              song={"Audio/condition 1.mp3"}
              text={textMusictext.textConditions1}
            />
          </div>
          <div>
            <SongPlayer
              song={"Audio/condition 2.mp3"}
              text={textMusictext.textConditions2}
            />
          </div>
          <div>
            <SongPlayer
              song={"Audio/condition 4.mp3"}
              text={textMusictext.textConditions4}
            />
          </div>
        </div>
      </div>
      <div>
        <SongPlayer song={"Audio/Provincial.mp3"} text={textMusictext.text5} />
      </div>
    </div>
  );
  const textMix = (
    <div className="text-mix">
      <div className="even">
        <div>
          <span>Mixing Engineer</span> <br></br> L'elisir d'amore (2023)
          <br></br>dr. Cristian Mihailescu
        </div>
        <div></div>
        <div>
          <span>Sound Design</span> <br></br> Good, Evil and the Sun (2023){" "}
          <br></br> dr. Yutaro Keino
        </div>
        <div></div>
      </div>
      <div className="odd">
        <div></div>
        <div>
          <span>Sound Design</span> <br></br> Punguista (2022) <br></br> dr.
          Yutaro Keino
        </div>
        <div></div>
        <div>
          <span>Recording Engineer</span> <br></br> The Spell(2022) <br></br>{" "}
          Alice Sonia Michael
        </div>
        <div></div>
      </div>
      <div className="even">
        <div>
          <span>Recording Engineer</span> <br></br>Istehlal LP (2022)
          <br></br> Mohamad Zatari Trio
        </div>
        <div></div>
        <div>
          <span>Mixing Engineer</span> <br></br> Isabelle (2021)<br></br> dr.
          Cristian Nicolae
        </div>
      </div>
      <div className="odd">
        <div></div>
        <div>
          <span>Recording Engineer</span> <br></br>Sailor (2021) <br></br> Fine
          It’s Pink
        </div>
        <div></div>
        <div>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=vhOumBg0gDA&embeds_euri=https%3A%2F%2Feditor.wixapps.net%2F&embeds_origin=https%3A%2F%2Feditor.wixapps.net&feature=emb_logo"
          >
            <span>Mixing Engineer</span>
          </a>{" "}
          <br />
          Live Concert (2020) <br /> Mohamad Zatari Trio
        </div>
      </div>
      <div className="even">
        <div>
          <span>Recording Engineer </span>
          <br /> Love Create Inspire (2020) <br></br>Urma{" "}
        </div>
        <div></div>
        <div>
          <a
            target="_blank"
            href="https://www.imdb.com/title/tt7624934/?ref_=nm_knf_t_1"
          >
            <span>Assistent Sound Editor</span>
          </a>{" "}
          <br /> Zoo (2018) <br /> dr. Antonio Tublen
        </div>
      </div>
    </div>
  );

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

  const aboutMusic = (
    <div className="page-band">
      <div>
        <div>
          Zaharenco is a jazz quartet whose music aims to explore the New Jazz
          scene by fusing jazz with classical and rock influences. He submits
          his works to the issue of musical predictability, seeking a balance
          between predictability and uncertainty, and thus managing to reach a
          wide range of emotions.
          <a
            style={{ color: "#ff68b4" }}
            target="_blank"
            href="https://open.spotify.com/album/4z5ldoG03eOzAsPBvbpCj0?si=Tgr-UWa9Rcag4uDjxw-uug"
          >
            {" "}
            Primordial feelings
          </a>
          , his first EP, is an exposition of the 2 main topics addressed: the
          impulsive being and the ever-changing sentimental self.
        </div>
      </div>

      <div className="media">
        {img.pageBand.map((image) => (
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
    </div>
  );

  const events = (
    <>
      <div className="event">18 Nov 2022 - Uzina, Bucharest</div>
      <div className="event">17 Sep 2022 - Străzi deschise, Bucharest</div>
      <div className="event">03 Sep 2022 - Jazz in the Park, Cluj-Napoca</div>
      <div className="event">30 July 2022 - Tam tam Festival, Brașov</div>
      <div className="event">04 May 2022 - Point, Bucharest</div>
    </>
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

  const bandMedia = (
    <div className="media">
      {img.pageBandMedia.map((image) => (
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
      <iframe
        width="300"
        height="300"
        src="https://www.youtube.com/embed/oHCpuh29s5Q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        width="300"
        height="300"
        src="https://www.youtube.com/embed/LT-DftXVJLc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );

  const contacts = (
    <div className="contact-text">
      <div>
        <a href="mailto:zaharencu.alexandru@gmail.com?" target="_blank">
          <img width={"42px"} src="\icons\Mail.png" alt="" />
          Mail
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/zaharen.co" target="_blank">
          <img width={"42px"} src="\icons\Facebook.png" alt="" />
          Facebook
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/zaharen.co/" target="_blank">
          <img width={"42px"} src="\icons\Instagram.png" alt="" />
          Instagram
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com/@zaharenco" target="_blank">
          <img width={"42px"} src="\icons\Youtube.png" alt="" />
          Youtube
        </a>
      </div>
      <div>
        <a
          href="https://open.spotify.com/artist/4azDTEsE76hndB8paNOEe8?si=dBL-mht3RRapA-CO_-miEg&fbclid=IwAR2IwJVZyvZxF0uPJiI8uBJBqBTCiKa0-0b0wqabiZUxj5rDimbykAR5saY&nd=1"
          target="_blank"
        >
          <img width={"42px"} src="\icons\Spotify.png" alt="" />
          Spotify
        </a>
      </div>
      <div>
        <a
          href="https://linktr.ee/zaharen.co?utm_source=linktree_profile_share&ltsid=56442ba0-afdf-4bbd-8046-e6c2f7bf8572"
          target="_blank"
        >
          <img width={"42px"} src="\icons\linktree.png" alt="" />
          LinkTree
        </a>
      </div>
    </div>
  );

  const navItems = [
    { text: "Bio", url: "/bio", key: "1" },
    { text: "Photos", url: "/photos", key: 2 },
    { text: "Inspo", url: "/inspiration", key: 3 },
    { text: "Contact", url: "/contacts", key: 4 },
  ];

  const navItemsPort = [
    { text: "Music", url: "/music", key: 5 },
    { text: "Film Composition", url: "/film", key: 6 },
    { text: "Multimedia Art", url: "/visual", key: 7 },
    { text: "Mixing", url: "/mixing", key: 8 },
  ];
  const navItemsBand = [
    { text: "Music", url: "/about-music", key: 9 },
    { text: "Events", url: "/events", key: 10 },
    { text: "Media", url: "/music-media", key: 11 },
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
              textBlog={textMusic}
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
              textBlog={filmComp}
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
              textBlog={textMix}
              tittleBlog={"Mixing"}
              navItems={navItemsPort}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
        <Route
          path="/about-music"
          element={
            <Blog
              textBlog={aboutMusic}
              tittleBlog={"About"}
              navItems={navItemsBand}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
        <Route
          path="/events"
          element={
            <Blog
              textBlog={events}
              tittleBlog={"Events"}
              navItems={navItemsBand}
              crt={crt}
              handleClickCRT={handleClickCRT}
            />
          }
        />
        <Route
          path="/music-media"
          element={
            <Blog
              textBlog={bandMedia}
              tittleBlog={"Band Media"}
              navItems={navItemsBand}
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
