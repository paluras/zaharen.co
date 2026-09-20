import { useEffect, useRef, useState } from "react";
import "@fontsource/anton/latin-400.css";
import "@fontsource/anton/latin-ext-400.css";
import "@fontsource/archivo/latin-400.css";
import "@fontsource/archivo/latin-ext-400.css";
import "@fontsource/archivo/latin-600.css";
import "@fontsource/archivo/latin-ext-600.css";
import "@fontsource/archivo/latin-800.css";
import "@fontsource/archivo/latin-ext-800.css";
import "./epk.css";

const copy = {
  en: {
    releaseDate: "Out October 8, 2026",
    bioLead:
      "Zaharenco Releases – Condition 2 – Alternative Jazz with Rock Influences",
    bio: [
      "Zaharenco, a Bucharest-based project working at the crossroads of modern jazz, rock and classical music, releases Condition 2 on October 8, 2026. The single precedes the project's debut album, Looking for a Better Place, due out in November 2026, and arrives alongside a narrative music video premiering the same day on Zaharenco's YouTube channel, a collaboration with Coca Production (Andrei Coca, Sorin Nedelcu) from a concept by Alexandru Zaharencu.",
      "Zaharenco's earlier work favored melody and careful architecture, in the spirit of bands like GoGo Penguin. Condition 2 breaks that pattern: a restless, energy-driven track built on a melody simple enough to hum, wrapped in electric guitar riffs and a rhythm that keeps driving forward. Entirely instrumental, it's best heard start to finish, building gradually as each section grows naturally out of the one before. It opens with a clear idea before breaking into free play, where the saxophone seems to multiply and talk to itself: a conversation carried by the same voice, coming from several directions at once.",
      "The track features Alexandru Zaharencu (electric piano, synth), Timotei Bîgu (saxophone), Raul Iuga (electric guitar) and Cristian Florea (drums). Alongside Condition 4 (Suspended in Mid-Air) and Condition 5, it continues the Conditions series, built on sincere feelings presented without filter, and stands as one of the most dynamic tracks on Looking for a Better Place, an album that, true to its name, isn't chasing a single formula but an ongoing search.",
      'Zaharenco started out in November 2023 with the release of the "Primordial Feelings" EP, and has since performed at major local stages including Gărâna Jazz Festival, JazzX, Jazz in the Park and Csiki Jazz.',
    ],
    listen: "Listen",
    prerelease: "PRE-RELEASE: FOR PRESS & BOOKING ONLY",
    privatePreview:
      "Private preview, for press and booking use only. Please do not share publicly before release.",
    video: "Video",
    officialVideo: "Official Music Video, out October 8, 2026 (YouTube premiere)",
    officialDescription:
      "Narrative video, directed by Coca Production (Andrei Coca, Sorin Nedelcu), concept by Alexandru Zaharencu. Filmed on Bucharest's last remaining stone slide from the communist era, in Floreasca Park; the same slide appears in the single's cover artwork, in an older photograph.",
    promoMaterials: "Promo Materials",
    artworkAnimation: "Artwork Animation",
    previousReleases: "Previous Releases",
    catalog:
      "Full catalog, played in full on YouTube (updates automatically as new videos go up):",
    pressPhotos: "Press Photos",
    fullResolution: "Full resolution.",
    download: "Download",
    credits: "Credits",
    creditRoles: [
      "Composer / Electric Piano, Synth",
      "Saxophone",
      "Guitar",
      "Drums",
    ],
    techRider: "Tech Rider",
    riderDescription: "Stage plot & backline requirements for the live quartet.",
    downloadPdf: "Download PDF",
    contact: "Contact & Social",
    close: "Close image",
  },
  ro: {
    releaseDate: "Lansare: 8 octombrie 2026",
    bioLead:
      "Zaharenco lansează „Condition 2”, jazz alternativ cu influențe rock",
    bio: [
      "Zaharenco, proiect din București aflat la intersecția dintre jazz modern, rock și muzică clasică, lansează pe 8 octombrie 2026 piesa Condition 2, single-ul care precede lansarea albumului de debut al proiectului, Looking for a Better Place, programat pentru noiembrie 2026. Single-ul apare alături de un videoclip narativ, cu premieră în aceeași zi pe canalul de YouTube al Zaharenco, realizat în colaborare cu Coca Production (Andrei Coca, Sorin Nedelcu), după un concept semnat de Alexandru Zaharencu.",
      "Dacă lansările precedente ale Zaharenco se defineau prin melodicitate și o construcție mai calculată, apropiată de trupe precum GoGo Penguin, Condition 2 e mai degrabă o piesă de energie, construită în jurul unei melodii simple, aproape ca un cântec fredonat de un copil, dar îmbrăcată în riff-uri de chitară electrică și ritm alert care conduc piesa înainte. Piesa e complet instrumentală și se ascultă cel mai bine de la primul până la ultimul sunet, construindu-se treptat, fiecare parte căpătând sens din cele dinainte. Pornește dintr-o idee clară, apoi se descompune într-un joc liber, în care saxofonul pare să se multiplice și să discute cu sine: o conversație purtată de aceeași voce, din mai multe direcții deodată.",
      "Pe track îi ascultați pe Alexandru Zaharencu (pian electric, synth), Timotei Bîgu (saxofon), Raul Iuga (chitară electrică) și Cristian Florea (tobe). Alături de Condition 4 (Suspended in Mid-Air) și Condition 5, piesa continuă seria Conditions, bazată pe trăiri sincere, prezentate fără filtru, și e una dintre cele mai dinamice piese de pe Looking for a Better Place, un album care, așa cum îi spune și numele, nu urmărește o formulă unică, ci o căutare continuă.",
      "Zaharenco a pornit în noiembrie 2023, odată cu lansarea EP-ului „Primordial Feelings”. În ultimii ani a concertat pe scene locale importante precum Gărâna Jazz Festival, JazzX, Jazz in the Park sau Csiki Jazz.",
    ],
    listen: "Ascultă",
    prerelease: "PRE-LANSARE: DOAR PENTRU PRESĂ ȘI BOOKING",
    privatePreview:
      "Fișier privat de preview, doar pentru presă și booking. Vă rugăm să nu îl distribuiți public înainte de lansare.",
    video: "Video",
    officialVideo: "Videoclip oficial, lansare 8 octombrie 2026 (premieră pe YouTube)",
    officialDescription:
      "Videoclip narativ, regizat de Coca Production (Andrei Coca, Sorin Nedelcu), concept Alexandru Zaharencu. Filmat pe ultimul tobogan de piatră din perioada comunistă rămas în București, în Parcul Floreasca; același tobogan apare și în artwork-ul single-ului, într-o fotografie mai veche.",
    promoMaterials: "Materiale promo",
    artworkAnimation: "Animație artwork",
    previousReleases: "Lansări anterioare",
    catalog:
      "Catalogul complet, ascultat integral pe YouTube (se actualizează automat pe măsură ce apar videoclipuri noi):",
    pressPhotos: "Fotografii de presă",
    fullResolution: "Rezoluție completă.",
    download: "Descarcă",
    credits: "Credite",
    creditRoles: ["Compozitor / Pian electric, Synth", "Saxofon", "Chitară", "Tobe"],
    techRider: "Tech Rider",
    riderDescription: "Schemă de scenă și cerințe de backline pentru cvartetul live.",
    downloadPdf: "Descarcă PDF",
    contact: "Contact & Social",
    close: "Închide imaginea",
  },
};

const promoVideos = [
  {
    titleKey: "artworkAnimation",
    embed: "https://www.youtube.com/embed/I5KRp2hd6yM?si=JlVRDbo9zbDUWhSe",
    download:
      "https://drive.google.com/file/d/1jHar8Y6UHK6M0RHMk6KqkiC3xeEHwzbd/view?usp=share_link",
  },
  {
    title: "Live 1",
    embed: "https://www.youtube.com/embed/pb-XqWiem_Q?si=P5jaaHbU8Obd5DJz",
    download:
      "https://drive.google.com/file/d/16SqpCDlQ_JBK56Skjwe11E1PZQEgAH1e/view?usp=share_link",
  },
  {
    title: "Live 2",
    embed: "https://www.youtube.com/embed/J7sKOOc8Uv0?si=3B4D6jCfM1_jI2DK",
    download:
      "https://drive.google.com/file/d/1V8sURrUja9rTnIYuYGbMygVgsySNB1Q2/view?usp=share_link",
  },
];

const pressPhotos = [
  { src: "/epk/press-group-1.jpg", alt: "Zaharenco band photo 1" },
  { src: "/epk/press-group-2.jpg", alt: "Zaharenco band photo 2" },
  { src: "/epk/press-solo.jpg", alt: "Alexandru Zaharencu solo portrait" },
];

const creditNames = [
  "Alexandru Zaharencu",
  "Timotei Bîgu",
  "Raul Iuga",
  "Cristian Florea",
];

const contacts = [
  { icon: "@", label: "alexandru@zaharen.co", href: "mailto:alexandru@zaharen.co" },
  { icon: "IG", label: "instagram.com/zaharen.co", href: "https://www.instagram.com/zaharen.co/" },
  { icon: "FB", label: "facebook.com/zaharen.co", href: "https://www.facebook.com/zaharen.co" },
  { icon: "YT", label: "youtube.com/@zaharenco", href: "https://www.youtube.com/@zaharenco" },
  { icon: "Sp", label: "Spotify", href: "https://open.spotify.com/artist/4azDTEsE76hndB8paNOEe8" },
];

function SectionTitle({ children }) {
  return (
    <h2 className="epk-section-title">
      <span className="epk-square" aria-hidden="true" />
      {children}
    </h2>
  );
}

function VideoEmbed({ src, title }) {
  return (
    <iframe
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      loading="lazy"
    />
  );
}

export default function EPK() {
  const [language, setLanguage] = useState("en");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const closeButtonRef = useRef(null);
  const photoTriggerRef = useRef(null);
  const text = copy[language];

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Zaharenco | Press / EPK";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    const previousLanguage = document.documentElement.lang;
    document.documentElement.lang = language;
    return () => {
      document.documentElement.lang = previousLanguage;
    };
  }, [language]);

  useEffect(() => {
    if (!selectedPhoto) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedPhoto(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      photoTriggerRef.current?.focus();
    };
  }, [selectedPhoto]);

  const openPhoto = (photo, trigger) => {
    photoTriggerRef.current = trigger;
    setSelectedPhoto(photo);
  };

  return (
    <div className="epk-page">
      <main className="epk-main">
        <header className="epk-header">
          <div className="epk-language-switch" aria-label="Language selector">
            {[
              ["en", "EN"],
              ["ro", "RO"],
            ].map(([value, label]) => (
              <button
                type="button"
                key={value}
                className={language === value ? "is-active" : ""}
                aria-pressed={language === value}
                onClick={() => setLanguage(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="epk-badge">PRESS / EPK</span>
        </header>

        <div className="epk-hero">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/epk/condition-2.jpg"
            aria-label="Condition 2 by Zaharenco artwork animation"
          >
            <source src="/epk/condition-2-loop.mp4" type="video/mp4" />
          </video>
          <div className="epk-hero-caption">
            <h1>Condition 2</h1>
            <span className="epk-release-date">{text.releaseDate}</span>
          </div>
        </div>

        <section className="epk-section epk-section-first">
          <SectionTitle>Bio</SectionTitle>
          <p className="epk-bio-lead">{text.bioLead}</p>
          {text.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="epk-section">
          <SectionTitle>{text.listen}</SectionTitle>
          <div className="epk-listen-grid">
            <div className="epk-artwork-slot">
              <img src="/epk/condition-2.jpg" alt="Condition 2 by Zaharenco artwork" />
            </div>
            <div className="epk-player-column">
              <span className="epk-tag">{text.prerelease}</span>
              <p>{text.privatePreview}</p>
              <audio controls preload="metadata">
                <source src="/epk/condition-2-preview.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </section>

        <section className="epk-section">
          <SectionTitle>{text.video}</SectionTitle>
          <article className="epk-video-featured">
            <VideoEmbed
              src="https://www.youtube.com/embed/7NygA9GW99k?si=446IhWJ8JXVslHbl"
              title="Condition 2 – Official Music Video"
            />
            <h3>{text.officialVideo}</h3>
            <p>{text.officialDescription}</p>
            <a
              className="epk-download epk-download-inline"
              href="https://drive.google.com/file/d/1Riq-bOJ-fihO6Gbex-ZBfwnU3y3eQp5T/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.download}
            </a>
          </article>

          <h3 className="epk-video-subheading">{text.promoMaterials}</h3>
          <div className="epk-video-grid">
            {promoVideos.map((video) => {
              const title = video.titleKey ? text[video.titleKey] : video.title;
              return (
                <article className="epk-video-card" key={video.embed}>
                  <VideoEmbed src={video.embed} title={title} />
                  <h3>{title}</h3>
                  <a
                    className="epk-download"
                    href={video.download}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {text.download}
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="epk-section">
          <SectionTitle>{text.previousReleases}</SectionTitle>
          <p className="epk-note">{text.catalog}</p>
          <div className="epk-catalog-frame">
            <VideoEmbed
              src="https://www.youtube.com/embed/xryrrX6E2PM?list=PLQTiNiutzmRc"
              title="Zaharenco on YouTube"
            />
          </div>
        </section>

        <section className="epk-section">
          <SectionTitle>{text.pressPhotos}</SectionTitle>
          <div className="epk-photo-grid">
            {pressPhotos.map((photo) => (
              <article className="epk-photo-card" key={photo.src}>
                <button
                  type="button"
                  className="epk-photo-button"
                  onClick={(event) => openPhoto(photo, event.currentTarget)}
                  aria-label={`${text.pressPhotos}: ${photo.alt}`}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </button>
              </article>
            ))}
          </div>
          <div className="epk-rider-box epk-photo-download">
            <span>{text.fullResolution}</span>
            <a
              className="epk-download epk-download-blue"
              href="https://drive.google.com/drive/folders/1sqkwsxzBK57zQ5uC7hSJ-s1vb4YdJjyy?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.download}
            </a>
          </div>
        </section>

        <section className="epk-section">
          <SectionTitle>{text.credits}</SectionTitle>
          <table className="epk-credits">
            <tbody>
              {creditNames.map((name, index) => (
                <tr key={name}>
                  <th scope="row">{text.creditRoles[index]}</th>
                  <td>{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="epk-section">
          <SectionTitle>{text.techRider}</SectionTitle>
          <div className="epk-rider-box">
            <span>{text.riderDescription}</span>
            <a
              className="epk-download epk-download-blue"
              href="/epk/zaharenco-tech-rider.pdf"
              download
            >
              {text.downloadPdf}
            </a>
          </div>
        </section>

        <section className="epk-section">
          <SectionTitle>{text.contact}</SectionTitle>
          <ul className="epk-contact-list">
            {contacts.map((contact) => {
              const external = contact.href.startsWith("http");
              return (
                <li key={contact.href}>
                  <span className="epk-contact-icon" aria-hidden="true">
                    {contact.icon}
                  </span>
                  <a
                    href={contact.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    {contact.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      {selectedPhoto && (
        <div
          className="epk-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.alt}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedPhoto(null);
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="epk-lightbox-close"
            aria-label={text.close}
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>
          <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
        </div>
      )}
    </div>
  );
}
