import React from "react";
import { useState } from "react";
import SongPlayer from "./Player";

const TextMusic = () => {
  const [show, setShow] = useState("0px");
  const [show2, setShow2] = useState("0px");
  const [show3, setShow3] = useState("0px");
  const [popupState, setpopupState] = useState(false);
  const [popupState2, setpopupState2] = useState(false);
  const [popupState3, setpopupState3] = useState(false);

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
  const link = (
    <img
      className="icon link"
      width={"28px"}
      src="/icons/link.svg"
      alt="link"
    />
  );

  const iconLink = [
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
  return (
    <div className="text-music song">
      {/* CONDITION 5 */}
      <div>
        <SongPlayer
          song={"Audio/Zaharenco - Condition 4 [master 48 24 -11dB] 3.mp3"}
          text={"Condition 4 (2024) "}
          keys={"6"}
        />
        <p
          style={{
            marginLeft: "24px",
          }}
        >
          Latest Zaharenco Release – the second track from the upcoming album,
          featuring Lucas Contreras on guitar, Laura Benedek on bass, and Sergiu
          Părgras on drums. Recorded at Avanpost Media, with Laurent Larzilliere
          as recording engineer and Dan Georgescu handling mixing and mastering.
        </p>
      </div>
      {/* CONDITION 5 */}
      <div>
        <SongPlayer
          song={"Audio/Zaharenco - Condition 5.mp3"}
          text={"Condition 5 (2024)"}
          keys={"6"}
        />
        <p
          style={{
            marginLeft: "24px",
          }}
        >
          Featuring Lucas Contreras on guitar, Laura Benedek on bass, and Sergiu
          Părgras on drums. Recorded at Avanpost Media, with Laurent Larzilliere
          as recording engineer and Dan Georgescu handling mixing and mastering.
        </p>
      </div>
      {/* IONA */}
      <div className="allthecacat">
        <div className="container-player">
          <img
            className="icon"
            onClick={handlePopUp3}
            src={popupState3 ? "/icons/up.svg" : "/icons/down.svg"}
            alt="Open close"
          />
          <div>
            <h2 className="pink" onClick={handlePopUp3}>
              Iona - ballet for one dancer (2023)
            </h2>
            <p>
              This piece is inspired by the dramaturgy of Iona by Marin Sorescu
              and represents my Master's degree project. It follows the
              narrative aspect of the ambiance, reflecting the emotions of the
              sole character in the drama. This version is a mockup.
            </p>
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
      {/* INSIDE OF YOU */}
      <div>
        <SongPlayer
          song={"Audio/Sonata no.1.mp3"}
          text={"Piano Sonata No.1 (2022)"}
          iconLink={iconLink[0]}
          keys={"6"}
        />
        <p
          style={{
            marginLeft: "24px",
          }}
        >
          Performed by Adriana Toacsen
        </p>
      </div>
      {/* PRIMORDIAL FEELINGS */}
      <div className="allthecacat">
        <div className="container-player">
          <img
            className="icon"
            onClick={handlePopUp}
            src={popupState ? "/icons/up.svg" : "/icons/down.svg"}
            alt=""
          />
          <div>
            <h2 onClick={handlePopUp} className="test pink">
              Primordial feelings (2021)
            </h2>

            <p
              style={{
                fontSize: "1.2rem",
              }}
            >
              The first EP released under the name Zaharenco, it explores two
              main themes: the impulsive being and the ever-changing sentimental
              self. It also served as the starting point for the
              <a
                style={{
                  color: "#ff68b4",
                }}
                href="/visual/visual2"
              >
                {" "}
                Primordial Feelings installation
              </a>{" "}
              . Featuring Florian Nicolau on bass and Sergiu Părgras on drums.
              Recorded at Avanpost Media.
            </p>
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

      {/* INSIDE OF YOU */}
      <div>
        <SongPlayer
          song={"Audio/Inside of you.mp3"}
          text={"Inside of you (2020)"}
          iconLink={iconLink[1]}
        />
        <p
          style={{
            marginLeft: "24px",
          }}
        >
          This song is based on my exploration of Live Looping techniques.{" "}
        </p>
      </div>

      {/* CONDITIONS */}
      <div className="allthecacat">
        <div className="container-player">
          <img
            className="icon"
            onClick={handlePopUp2}
            src={popupState2 ? "/icons/up.svg" : "/icons/down.svg"}
            alt=""
          />
          <h2 onClick={handlePopUp2} className="test pink">
            Conditions (2021)
          </h2>
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
        </div>
      </div>
      {/* PROVINCIAL */}
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
};

export default TextMusic;
