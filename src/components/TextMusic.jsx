import React from "react";
import { useState } from "react";
import SongPlayer from "./Player";

const TextMusic = () => {
  const [show, setShow] = useState("106px");
  const [show2, setShow2] = useState("154px");
  const [show3, setShow3] = useState("154px");
  const [popupState, setpopupState] = useState(true);
  const [popupState2, setpopupState2] = useState(true);
  const [popupState3, setpopupState3] = useState(true);

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
};

export default TextMusic;
