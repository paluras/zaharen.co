import React from "react";
import SongPlayer from "./Player";
import VideoModal from "./VideoModal";

const TextFilm = () => {
  const iconLinkVideo = [
    <VideoModal videoId={"Ntmdd6Rc15c "} />,
    <VideoModal videoId={"FtvhTk3XnaU "} />,
  ];
  return (
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
};

export default TextFilm;
