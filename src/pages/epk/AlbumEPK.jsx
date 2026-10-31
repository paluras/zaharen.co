import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import useRouteLanguage from "../../lib/useRouteLanguage";
import useScrollReveal, { prefersReducedMotion } from "./useScrollReveal";
import Tracklist from "./Tracklist";
import Lightbox from "./Lightbox";
import { ASSETS, copy, creditGroups, liveSessions, photos } from "./content";
import "./album-epk.css";

const contactLinks = [
  {
    label: "instagram.com/zaharen.co",
    href: "https://www.instagram.com/zaharen.co/",
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="f" cx="17.2" cy="6.8" r="1.1" />
      </>
    ),
  },
  {
    label: "facebook.com/zaharen.co",
    href: "https://www.facebook.com/zaharen.co",
    icon: (
      <path
        className="f"
        d="M13.5 21v-7.5h2.6l.4-3h-3V8.8c0-.9.3-1.4 1.5-1.4h1.6V4.7c-.3 0-1.2-.2-2.3-.2-2.3 0-3.8 1.4-3.8 3.9v2.1H8v3h2.5V21z"
      />
    ),
  },
  {
    label: "youtube.com/@zaharenco",
    href: "https://www.youtube.com/@zaharenco",
    icon: (
      <>
        <rect x="2.8" y="5.5" width="18.4" height="13" rx="4" />
        <path className="f" d="M10 9.2v5.6l5-2.8z" />
      </>
    ),
  },
];

function SectionTitle({ children }) {
  return <h2 data-reveal="up">{children}</h2>;
}

function YouTubeEmbed({ id, title }) {
  return (
    <div className="vid">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

function ContactIcon({ children }) {
  return (
    <span className="ic">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </span>
  );
}

// Plays only while on screen; stays on its poster frame for reduced motion.
function BandLoop() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !window.IntersectionObserver || prefersReducedMotion()) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="vband" data-reveal="up">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={`${ASSETS}/band-loop-poster.webp`}
        src={`${ASSETS}/band-loop.mp4`}
        aria-label="Archive photograph of a boy playing a grand piano on a stage, gently animated"
      />
    </div>
  );
}

export default function AlbumEPK() {
  const [language, setLanguage] = useRouteLanguage("/epk");
  const [hasPlayer, setHasPlayer] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(null);
  const rootRef = useRef(null);
  const photoTriggerRef = useRef(null);
  const text = copy[language];

  useScrollReveal(rootRef, language);

  const openPhoto = (index, trigger) => {
    photoTriggerRef.current = trigger;
    setPhotoIndex(index);
  };

  const closePhoto = useCallback(() => {
    setPhotoIndex(null);
    photoTriggerRef.current?.focus();
  }, []);

  return (
    <div ref={rootRef} className={`album-epk${hasPlayer ? " has-bar" : ""}`}>
      <Helmet>
        <title>{text.pageTitle}</title>
        <meta name="description" content={text.pageDescription} />
      </Helmet>

      <div className="wrap">
        <header className="top">
          <div className="seg" role="group" aria-label={text.language}>
            {[
              ["en", "EN"],
              ["ro", "RO"],
            ].map(([value, label]) => (
              <button
                type="button"
                key={value}
                aria-pressed={language === value}
                onClick={() => setLanguage(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="tag">Press / EPK</span>
        </header>

        <section className="hero">
          <h1 className="sr">Looking for a Better Place, Zaharenco</h1>
          <figure className="cover">
            <img
              src={`${ASSETS}/cover-1400.webp`}
              srcSet={`${ASSETS}/cover-700.webp 700w, ${ASSETS}/cover-1400.webp 1400w`}
              sizes="(min-width: 760px) 50vw, 100vw"
              width="1400"
              height="1400"
              fetchpriority="high"
              alt="Looking for a Better Place by Zaharenco, album artwork: a childhood photograph of a boy beside a concrete column, an orange paint stroke across a textured sky with an airplane"
            />
          </figure>
          <div className="hero-text">
            <div className="hl">
              <p className="big">{text.debutAlbum}</p>
              <p className="date">{text.releaseDate}</p>
            </div>
            <div className="where">
              <p>{text.streaming}</p>
              <p className="soon">
                <span
                  className="vinyl"
                  style={{ "--vl": `url(${ASSETS}/vinyl-label.webp)` }}
                  aria-hidden="true"
                />
                {text.physical}
              </p>
            </div>
          </div>
        </section>

        <section className="s" id="about">
          <SectionTitle>Bio</SectionTitle>
          <p className="head">{text.bioLead}</p>
          {text.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <BandLoop />

        <section className="s" id="tracklist">
          <SectionTitle>Tracklist</SectionTitle>
          <p className="pre">
            <span className="lab">{text.prerelease}</span>
            {text.prereleaseNote}
          </p>
          <div id="tracks">
            <Tracklist text={text} onPlayerVisible={setHasPlayer} />
          </div>
        </section>

        <section className="s" id="video">
          <SectionTitle>Video</SectionTitle>
          <div className="feature">
            <YouTubeEmbed id="NNZ2cFmqMFU" title="Condition 2, official music video" />
            <h3 className="sub">{text.officialVideo}</h3>
            <p>{text.officialDescription}</p>
            <a
              className="btn"
              href="https://www.youtube.com/watch?v=NNZ2cFmqMFU"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.watchOnYouTube}
            </a>
          </div>
        </section>

        <section className="s" id="live">
          <SectionTitle>Live Session</SectionTitle>
          <div className="grid3">
            {liveSessions.map((session) => (
              <figure className="lv" key={session.id}>
                <div className="frame">
                  <YouTubeEmbed id={session.id} title={`Zaharenco, ${session.title}, Live Session`} />
                </div>
                <figcaption>{session.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="s" id="photos">
          <SectionTitle>{text.photos}</SectionTitle>
          <div className="photos">
            {photos.map((photo, index) => (
              <div className="frame" key={photo.name} data-reveal="zoom" data-stagger="120">
                <button
                  type="button"
                  className="ph"
                  aria-label={text.openPhoto}
                  onClick={(event) => openPhoto(index, event.currentTarget)}
                >
                  <img
                    src={photo.large}
                    srcSet={photo.srcSet}
                    sizes="(min-width: 760px) 33vw, 100vw"
                    width={photo.width}
                    height={photo.height}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              </div>
            ))}
          </div>
          <p className="after">
            <a
              className="btn"
              href="https://drive.google.com/drive/folders/1sqkwsxzBK57zQ5uC7hSJ-s1vb4YdJjyy?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.fullResolution}
            </a>
          </p>
        </section>

        <section className="s" id="credits">
          <SectionTitle>{text.credits}</SectionTitle>
          <div className="cgrid">
            {creditGroups.map((group) => (
              <div className="cg" key={group.title.en} data-reveal="up" data-stagger="110">
                <h3 className="ch">{group.title[language]}</h3>
                {group.people.map((person) => (
                  <div className="cp" key={person.name + person.roles[0].en}>
                    <b>{person.name}</b>
                    {person.roles.map((role) => (
                      <span key={role.en}>{role[language]}</span>
                    ))}
                    {person.tracks && <span className="tq">{person.tracks}</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="s" id="rider">
          <SectionTitle>Tech Rider</SectionTitle>
          <div className="rider" data-reveal="up">
            <p>{text.riderDescription}</p>
            <a className="btn" href="/epk/zaharenco-tech-rider.pdf" target="_blank" rel="noopener noreferrer">
              {text.downloadPdf}
            </a>
          </div>
        </section>

        <section className="s" id="contact">
          <SectionTitle>{text.contact}</SectionTitle>
          <div className="socials">
            <a href="mailto:alexandru@zaharen.co" data-reveal="up" data-stagger="60">
              <ContactIcon>
                <rect x="3" y="5.5" width="18" height="13" rx="2" />
                <path d="M3.5 7l8.5 6.5L20.5 7" />
              </ContactIcon>
              alexandru@zaharen.co
            </a>
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal="up"
                data-stagger="60"
              >
                <ContactIcon>{link.icon}</ContactIcon>
                {link.label}
              </a>
            ))}
          </div>
          <p className="after after-contact">
            <a className="btn" href="/linktree" target="_blank" rel="noopener noreferrer">
              {text.listenOnline}
            </a>
          </p>
        </section>
      </div>

      <Lightbox
        photos={photos}
        index={photoIndex}
        text={text}
        onChange={setPhotoIndex}
        onClose={closePhoto}
      />
    </div>
  );
}
