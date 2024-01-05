import React from 'react';

const Contacts = () => {
    return (
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
};

export default Contacts;
