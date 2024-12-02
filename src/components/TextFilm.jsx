import React from "react";
import SongPlayer from "./Player";
import VideoModal from "./VideoModal";

const TitleWithVideo = ({ title, videoId }) => (
  <div className="video-justtittle">
    {title}
    {videoId && <VideoModal videoId={videoId} />}
  </div>
);

const Description = ({ children }) => <p className="description">{children}</p>;

export default function TextFilm() {
  const iconLinkVideo = [
    <VideoModal videoId="Ntmdd6Rc15c" />,
    <VideoModal videoId="FtvhTk3XnaU" />,
    <VideoModal videoId="Ot8_3PkYjf0?si=6Dsa_QI63UUNw958" />,
  ];

  return (
    <div className="text-music film">
      <div className="film-item">
        <TitleWithVideo
          title="Matilda The Musical (2024)"
          videoId="Ot8_3PkYjf0?si=6Dsa_QI63UUNw958"
        />
        <Description>
          Dir. Emil Pantelimon, <br />
          The Comic Opera for Children Sound design <br />
          Sound design
        </Description>
      </div>

      <div className="film-item">
        <TitleWithVideo title="Little Light (2023)" />
        <Description>
          Dir. Mara Bugarin <br />
          Electronic composition
        </Description>
      </div>

      <div className="film-item">
        <SongPlayer
          song="/film-music/Punguista music.mp3"
          text="Punguista (2022)"
          key={1}
        />
        <Description>
          Dir. Yutaro Keino <br />
          Ensemble Conductor – Angel Spiroski <br />
          The collaboration began during the Living Music Project in Skopje.
          Composed for strings septet.
        </Description>
      </div>

      <div className="film-item">
        <SongPlayer
          song="/film-music/Salve Boutique Ad.mp3"
          text="Salve Boutique (2022)"
          iconLink={iconLinkVideo[0]}
          key={2}
        />
      </div>

      <div className="film-item">
        <SongPlayer
          song="/film-music/Isabelle Soundtrack.mp3"
          text="Isabelle (2021)"
          iconLink=""
          key={3}
        />
        <Description>
          Dir. Cristian Nicolae <br />
          Electronic composition
        </Description>
      </div>

      <div className="film-item">
        <TitleWithVideo
          title="Die Melodie Der Welt - Rescore (2021)"
          videoId="KXFbLKqSpLk"
        />
        <Description>Rescoring and Sound design</Description>
      </div>

      <div>
        <TitleWithVideo title="Pelicam IFF (2020)" />
        <Description>Jingle</Description>
      </div>
      <div className="film-item">
        <SongPlayer
          song="/film-music/The master of the waters.mp3"
          text="The Master of the Waters (2020)"
          iconLink=""
          key={4}
        />
        <Description>Dir. Mihaela Crudu</Description>
      </div>

      <div className="film-item">
        <SongPlayer
          song="/film-music/Danny and the wild bunch.mp3"
          text="Danny and the Wild Bunch - contest rescore (2019)"
          iconLink={iconLinkVideo[1]}
          key={5}
        />

        <Description>
          Rescore for the Film Music Competition – Zurich
        </Description>
      </div>

      <style jsx>{`
        .text-music.film {
          display: flex;
          flex-direction: column;
        }

        .film-item {
        }

        .video-justtittle {
          color: #ff68b4;
        }

        .description {
          margin-left: 24px;
          font-size: 1.2rem;
        }

        /* Ensure SongPlayer titles are also pink */
        :global(.text-music.film .SongPlayer .title) {
          color: pink;
        }
      `}</style>
    </div>
  );
}
