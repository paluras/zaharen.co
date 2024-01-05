import React from 'react';

const MixComponent = () => {
    return (
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
};

export default MixComponent;
