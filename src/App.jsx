import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Landing";
import Blog from "./Blogs";
import img from "../img.json";
import Modal from "./components/Modal";
import SongPlayer from "./components/Player";
import VideoModal from "./components/VideoModal";
import Horoscope from "./components/HoroscopText";
import Layout from "./components/Layout";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [show, setShow] = useState("106px");
  const [show2, setShow2] = useState("154px");
  const [show3, setShow3] = useState("154px");
  const [crt, setCrt] = useState("");
  const [stateCrt, setStateCrt] = useState(false);
  const [popupState, setpopupState] = useState(true);
  const [popupState2, setpopupState2] = useState(true);
  const [popupState3, setpopupState3] = useState(true);
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
  function handleClickCRT() {
    setStateCrt(!stateCrt);
    stateCrt ? setCrt("crt") : setCrt("");
  }
  function handlePopUp() {
    setpopupState(!popupState);
    /// 96px cause the initioal font is 28px x  amount of items plus 20(gap) x amount of items
    if (show === "0px") setShow("106px");
    else {
      setShow("0px");
    }
  }
  function handlePopUp2() {
    setpopupState2(!popupState2);

    if (show2 === "0px") setShow2("154px");
    else {
      setShow2("0px");
    }
  }
  function handlePopUp3() {
    setpopupState3(!popupState3);
    if (show3 === "0px") setShow3("154px");
    else {
      setShow3("0px");
    }
  }

  function handleImageClick(src) {
    setSelectedImg(src);
  }

  let link = (
    <img
      className="icon link"
      width={"28px"}
      src="/icons/link.svg"
      alt="link"
    />
  );

  let iconLink = [
    <a href="https://on.soundcloud.com/zCpfC" target="_blank">
      {link}
    </a>,
    <a href="https://youtu.be/GlA0zGgIUH8" target="_blank">
      {link}
    </a>,
    <a href="https://on.soundcloud.com/ULp64" target="_blank">
      <img className="icon" width={"32px"} src="/icons/link.svg" alt="link" />
    </a>,
  ];

  let iconLinkVideo = [
    <VideoModal videoId={"Ntmdd6Rc15c "} />,
    <VideoModal videoId={"FtvhTk3XnaU "} />,
  ];

  const textMusic = (
    <div className="text-music song">
      <div className="allthecacat">
        <div className="container-player">
          <img
            className="icon"
            onClick={handlePopUp3}
            src={popupState3 ? "/icons/up.svg" : "/icons/down.svg"}
            alt=""
          />
          <div onClick={handlePopUp3} className="test">
            Iona - ballet for one dancer (2023)
          </div>
        </div>
        <div style={{ maxHeight: `${show3}` }} className="drop-down-album">
          <div>
            <SongPlayer song={"Audio/iona1.mp3"} text={"Scene I"} keys={"7"} />
          </div>
          <div>
            <SongPlayer
              song={"/Audio/iona2.mp3"}
              text={"Scene II"}
              keys={"8"}
            />
          </div>
          <div>
            <SongPlayer
              song={"/Audio/iona3.mp3"}
              text={"Scene III"}
              keys={"8"}
            />
          </div>
        </div>
      </div>
      <div>
        <SongPlayer
          song={"Audio/Sonata no.1.mp3"}
          text={"Piano Sonata No.1 (2022)"}
          iconLink={iconLink[0]}
          keys={"6"}
        />
      </div>
      <div className="allthecacat">
        <div className="container-player">
          <img
            className="icon"
            onClick={handlePopUp}
            src={popupState ? "/icons/up.svg" : "/icons/down.svg"}
            alt=""
          />
          <div onClick={handlePopUp} className="test">
            Primordial feelings (2021)
          </div>
          <a
            target="_blank"
            href="https://open.spotify.com/album/4z5ldoG03eOzAsPBvbpCj0?si=oTJCNnzKQK2T6UJ1zU4IvA"
          >
            {link}
          </a>
        </div>
        <div style={{ maxHeight: `${show}` }} className="drop-down-album">
          <div>
            <SongPlayer
              song={"Audio/Primordial feelings.mp3"}
              text={"Primordial Feelings"}
              keys={"7"}
            />
          </div>
          <div>
            <SongPlayer
              song={"/Audio/Cold feet.mp3"}
              text={"Cold Feet"}
              keys={"8"}
            />
          </div>
        </div>
      </div>
      <div>
        <SongPlayer
          song={"Audio/Inside of you.mp3"}
          text={"Inside of you (2020)"}
          iconLink={iconLink[1]}
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
          <div onClick={handlePopUp2} className="test">
            Conditions (2021)
          </div>
          <a href="https://on.soundcloud.com/4Lgkt" target="_blank">
            {link}
          </a>
        </div>
        <div style={{ maxHeight: `${show2}` }} className="drop-down-album">
          <div>
            <SongPlayer song={"Audio/condition 1.mp3"} text={"Conditions 1"} />
          </div>
          <div>
            <SongPlayer song={"Audio/condition 2.mp3"} text={"Conditions 2"} />
          </div>
          <div>
            <SongPlayer song={"Audio/condition 4.mp3"} text={"Conditions 4"} />
          </div>
        </div>
      </div>
      <div>
        <SongPlayer
          song={"Audio/Provincial.mp3"}
          text={"Provincial (2019)"}
          iconLink={iconLink[2]}
          key={9}
        />
      </div>
    </div>
  );

  const textFilm = (
    <div className="text-music film">
      <div>
        <SongPlayer
          song={"/film-music/Punguista music.mp3"}
          text={"Punguista (2022)"}
          key={1}
        />
      </div>

      <div>
        <SongPlayer
          song={"/film-music/Salve Boutique Ad.mp3"}
          text={"Salve Boutique (2022)"}
          iconLink={iconLinkVideo[0]}
          key={2}
        />
      </div>
      <div>
        <SongPlayer
          song={"/film-music/Isabelle Soundtrack.mp3"}
          text={"Isabelle (2021)"}
          iconLink={""}
          key={3}
        />
      </div>
      <div className="video-justtittle">Titanik Kabaret - Theater (2021)</div>
      <div className="video-justtittle">
        Die Melodie Der Welt - Rescore (2021)
        <VideoModal videoId={"KXFbLKqSpLk "} />
      </div>
      <div className="video-justtittle">
        inHabited - contest rescore (2020)
        <VideoModal videoId={"Nx7hPJIzaDA "} />
      </div>
      <div className="video-justtittle">Pelicam IFF - Jingle (2020)</div>
      <div>
        <SongPlayer
          song={"/film-music/The master of the waters.mp3"}
          text={"The Master of the Waters (2020)"}
          iconLink={""}
          key={4}
        />
      </div>
      <div>
        <SongPlayer
          song={"/film-music/Danny and the wild bunch.mp3"}
          text={"Danny and the Wild Bunch - contest rescore (2019)"}
          iconLink={iconLinkVideo[1]}
          key={5}
        />
      </div>
    </div>
  );
  const textMix = (
    <div className="text-mix">
      <div className="odd">
        <div></div>
        <div className="good">
          <span>Sound Design</span> <br></br> Little light (2023)<br></br> dr.
          Mara Bugarin
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="even">
        <div className="good">
          <span>Mixing Engineer</span> <br></br> L'elisir d'amore (2023)
          <br></br>dr. Cristian Mihailescu
        </div>
        <div></div>
        <div className="good">
          <span>Sound Design</span> <br></br> Good, Evil and the Sun (2023){" "}
          <br></br> dr. Yutaro Keino
        </div>
        <div></div>
      </div>
      <div className="odd">
        <div></div>
        <div className="good">
          <span>Sound Design</span> <br></br> Punguista (2022) <br></br> dr.
          Yutaro Keino
        </div>
        <div></div>
        <div className="good">
          <span>Recording Engineer</span> <br></br> The Spell(2022) <br></br>{" "}
          Alice Sonia Michael
        </div>
        <div></div>
      </div>
      <div className="even">
        <div className="good">
          <span>Recording Engineer</span> <br></br>Istehlal LP (2022)
          <br></br> Mohamad Zatari Trio
        </div>
        <div></div>
        <div className="good">
          <a
            className="mix-flex"
            target="_blank"
            href="https://www.imdb.com/title/tt13333354/?ref_=nm_knf_t_2 "
          >
            <span>Mixing Engineer</span>
            <img
              className="icon"
              width="24px"
              src="/icons/link.svg"
              alt="link icon"
            />{" "}
          </a>{" "}
          <p style={{ marginBottom: "0px" }}>Isabelle (2021)</p> dr. Cristian
          Nicolae
        </div>
      </div>
      <div className="odd">
        <div></div>
        <div className="good">
          <span>Recording Engineer</span> <br></br>Sailor (2021) <br></br> Fine
          It’s Pink
        </div>
        <div></div>
        <div className="good">
          <a
            className="mix-flex"
            target="_blank"
            href="https://www.youtube.com/watch?v=vhOumBg0gDA&embeds_euri=https%3A%2F%2Feditor.wixapps.net%2F&embeds_origin=https%3A%2F%2Feditor.wixapps.net&feature=emb_logo"
          >
            <span>Mixing Engineer</span>
            <img
              className="icon"
              width="24px"
              src="/icons/link.svg"
              alt="link icon"
            />{" "}
          </a>{" "}
          <p>Live Concert (2020)</p> Mohamad Zatari Trio
        </div>
      </div>
      <div className="even">
        <div className="good">
          <span>Recording Engineer </span>
          <br /> Love Create Inspire (2020) <br></br>Urma{" "}
        </div>
        <div></div>
        <div className="good">
          <a
            className="mix-flex"
            target="_blank"
            href="https://www.imdb.com/title/tt7624934/?ref_=nm_knf_t_1"
          >
            <span>Assistent Sound Editor</span>
            <img
              className="icon"
              width="24px"
              src="/icons/link.svg"
              alt="link icon"
            />{" "}
          </a>
          <p>Zoo (2018)</p> dr. Antonio Tublen
        </div>
      </div>
    </div>
  );

  const bioText = (
    <>
      {" "}
      <p>
        Alexandru Zaharencu is a musician, composer, and multimedia artist. His
        music is distinguished by a dramatic component, a balance of
        predictability and honesty, and an approach to various genres ranging
        from jazz to contemporary music, film music, or sound design.
      </p>
      <p>
        {" "}
        He was born in Tulcea, Romania, in 1998, and spent 12 years there
        studying classical piano performance. He continued his education at the
        National University of Music in Bucharest, where he earned bachelor's
        degrees in jazz-pop composition under Andrei Tudor and a master's in
        modern composition under Diana Rotaru.
      </p>
      <p>
        {" "}
        As a composer, he has worked on numerous film and theater music
        projects, as well as advertising and choreographic projects. He
        additionally exhibited interactive installations such as Primordial
        feelings, an audio-visual installation based on the conversion of
        cathode ray tube TVs into oscilloscopes, which was shown at the Diploma
        2021 festival, and Catoptro-tono v.1, which is based on catoptrophobia,
        the fear of mirrors, which was presented at arca.expo 1.3.
      </p>
      <p>
        {" "}
        In addition to his artistic work, he has worked as an audio engineer for
        music and film sound, as well as a sound designer or foley artist. Since
        2021, he has been leading his fusion band Zaharenco, which combines
        jazz, classical architecture, and rock influences.
      </p>
    </>
  );
  const visualArts = (
    <div className="visual-art">
      <div className="visual-container">
        <Link to="visual1">
          Catoptro-tono v.1 - AI based Sound Installation (2022)
          <img
            className="icon"
            width="24px"
            src="/icons/link.svg"
            alt="link icon"
          />
        </Link>
        <p>
          The catoptrophobia, or fear of mirrors, is the core of this
          installation. Through this work, I want to investigate the idea of
          sound self-mirroring based on motion tracking and the premise of
          gradually distorting one's perception of oneself and expressing it
          through sound alterations.
        </p>
        <p>
          {" "}
          My project collaborator was Python engineer Teo Milea. We used Ableton
          in conjunction with a trained artificial intelligence to produce the
          sound motion tracking. This works was part of the arca.expo 1.3
          exhibition.
        </p>
      </div>
      <div className="visual-container">
        <Link to="visual2">
          Primordial feelings - Audio-Visual Installation (2021)
          <img
            className="icon"
            width="24px"
            src="/icons/link.svg"
            alt="link icon"
          />
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
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/7bMNLNMcOXNeZR48vBuPHT?utm_source=generator"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen=""
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

  const aboutMusic = (
    <div className="page-band">
      <div>
        <div className="container-lower">
          <p>
            Zaharenco is a jazz quartet whose music aims to explore the New Jazz
            scene by fusing jazz with classical and rock influences.
          </p>
          <p>
            {" "}
            He submits his works to the issue of musical predictability, seeking
            a balance between predictability and uncertainty, and thus managing
            to reach a wide range of emotions.
          </p>
          <p>
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
          </p>
        </div>
      </div>

      <div className="media band-photos">
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
      <iframe
        src="https://drive.google.com/file/d/1xX09-kh43imFjhgSbo-AKIT4WblZxf3j/preview"
        width="300"
        height="300"
        allow="autoplay"
        allowFullScreen="true"
      ></iframe>
    </div>
  );

  const mediaVisual2 = (
    <div className="media">
      <iframe
        width="300"
        height="300"
        src="https://www.youtube-nocookie.com/embed/I-kYxLFyJv0?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>{" "}
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
      <iframe
        width="300"
        height="300"
        src="https://www.youtube-nocookie.com/embed/_S5MQPStk6s?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        width="300"
        height="300"
        src="https://www.youtube-nocookie.com/embed/qffrRDsCp0Y?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>{" "}
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
          <img width={"42px"} src="\icons\Mail.png" alt="mail icon" />
          Mail
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/zaharen.co" target="_blank">
          <img width={"42px"} src="\icons\Facebook.png" alt="facebook icon" />
          Facebook
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/zaharen.co/" target="_blank">
          <img width={"42px"} src="\icons\Instagram.png" alt="instagram icon" />
          Instagram
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com/@zaharenco" target="_blank">
          <img width={"42px"} src="\icons\Youtube.png" alt="youtube icon" />
          Youtube
        </a>
      </div>
      <div>
        <a
          href="https://open.spotify.com/artist/4azDTEsE76hndB8paNOEe8?si=dBL-mht3RRapA-CO_-miEg&fbclid=IwAR2IwJVZyvZxF0uPJiI8uBJBqBTCiKa0-0b0wqabiZUxj5rDimbykAR5saY&nd=1"
          target="_blank"
        >
          <img width={"42px"} src="\icons\Spotify.png" alt="spotify icon" />
          Spotify
        </a>
      </div>
      <div>
        <a
          href="https://linktr.ee/zaharen.co?utm_source=linktree_profile_share&ltsid=56442ba0-afdf-4bbd-8046-e6c2f7bf8572"
          target="_blank"
        >
          <img width={"42px"} src="\icons\linktree.png" alt="linktree icon" />
          LinkTree
        </a>
      </div>
    </div>
  );

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
        <Route
          path="/"
          element={<Layout  />}
        >
        <Route index element={<LandingPage crt={crt} handleClickCRT={handleClickCRT} />}/>
        <Route
          path="bio"
          element={
            <Blog
              textBlog={bioText}
              tittleBlog={"BIO"}
              navItems={navItems}
              crt={crt}
              handleClickCRT={handleClickCRT}
              number={200}
            />
          }
        />
        <Route
          path="photos"
          element={
            <Blog
              textBlog={""}
              tittleBlog={"PHOTOS"}
              media={mediaPhotos}
              navItems={navItems}
              crt={crt}
              handleClickCRT={handleClickCRT}
              number={206}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <Blog
              textBlog={""}
              tittleBlog={"CONTACTS"}
              contact={contacts}
              navItems={navItems}
              crt={crt}
              handleClickCRT={handleClickCRT}
              number={214}
            />
          }
        />
        <Route
          path="/inspiration"
          element={<Blog
              textBlog={spotify}
              tittleBlog={"INSPIRATION"}
              navItems={navItems}
              crt={crt}
              handleClickCRT={handleClickCRT}
              number={211}
            />
          }
        />
        <Route
          path="/music"
          element={
            <Blog
              textBlog={textMusic}
              tittleBlog={"MUSIC"}
              navItems={navItemsPort}
              crt={crt}
              handleClickCRT={handleClickCRT}
              number={222}
            />
          }
        />
        <Route
          path="/film"
          element={
            <Blog
              textBlog={textFilm}
              tittleBlog={"FILM COMPOSITION"}
              navItems={navItemsPort}
              crt={crt}
              handleClickCRT={handleClickCRT}
              number={226}
            />
          }
        />
        <Route
          path="/visual"
          element={
            <Blog
              textBlog={visualArts}
              tittleBlog={"MULTIMEDIA ART"}
              navItems={navItemsPort}
              crt={crt}
              handleClickCRT={handleClickCRT}
              number={233}
            />
          }
        />
          <Route
            path="visual/visual1"
            element={
              <Blog
                textBlog={mediaVisual1}
                tittleBlog={"Catoptro-tono v.1"}
                navItems={navItemsPort}
                crt={crt}
                handleClickCRT={handleClickCRT}
                number={241}
              />
            }
          />
          <Route
            path="visual/visual2"
            element={
              <Blog
                textBlog={mediaVisual2}
                tittleBlog={"Primordial feelings "}
                navItems={navItemsPort}
                crt={crt}
                handleClickCRT={handleClickCRT}
                number={242}
              />
            }
          />
        

        <Route
          path="/mixing"
          element={
            <Blog
              textBlog={textMix}
              tittleBlog={"MIXING"}
              navItems={navItemsPort}
              crt={crt}
              handleClickCRT={handleClickCRT}
              number={236}
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
              number={239}
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
              number={243}
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
              number={248}
            />
          }
        />
        <Route
          path="/horoscop"
          element={
            <Blog
              textBlog={<Horoscope />}
              tittleBlog={"Horoscop"}
              navItems={navItemsHoro}
              crt={crt}
              handleClickCRT={handleClickCRT}
              number={255}
            />
          }
        />
        </Route>
      </Routes>
    </>
  );
}

export default App;
