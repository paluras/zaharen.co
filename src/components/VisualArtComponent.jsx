import React from "react";
import{Link} from "react-router-dom"

const VisualArtComponent = () => {
  return (
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
};

export default VisualArtComponent;
