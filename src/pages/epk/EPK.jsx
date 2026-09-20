import { useEffect, useState } from "react";
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
      'Zaharenco Releases "Condition 2," Alternative Jazz with Rock Influences',
    bio: [
      "Zaharenco, a Bucharest-based project working at the crossroads of modern jazz, rock and classical music, releases Condition 2 on October 8, 2026. The single precedes the project's debut album, Looking for a Better Place, due out in November 2026.",
      "Where Zaharenco's earlier releases leaned on melody and a more calculated structure, in the vein of bands like GoGo Penguin, Condition 2 is a different animal: an energy-driven track built around a simple melody, almost like a tune a child might hum, dressed up with electric guitar riffs and a driving rhythm that pushes it forward.",
      "The track is entirely instrumental, and it's best heard start to finish: it builds gradually, with each section growing naturally out of the one before it.",
      "Condition 2 opens with a clear idea before breaking into free play, where the saxophone seems to multiply and talk to itself, a conversation carried by the same voice coming from several directions at once.",
      "The track features Alexandru Zaharencu (electric piano, synth), Timotei Bîgu (saxophone), Raul Iuga (electric guitar) and Cristian Florea (drums).",
      "Alongside Condition 4 (Suspended in Mid-Air) and Condition 5, it continues the Conditions series, built on sincere feelings presented without filter.",
      "Condition 2 is one of the most dynamic tracks on Looking for a Better Place, an album that, true to its name, isn't chasing a single formula but an ongoing search.",
      'Zaharenco started out in November 2023 with the release of the "Primordial Feelings" EP, and has since performed at major local stages including Gărâna Jazz Festival, JazzX, Jazz in the Park and Csiki Jazz.',
    ],
    listen: "Listen",
    prerelease: "PRE-RELEASE: FOR PRESS & BOOKING ONLY",
    privatePreview:
      "Private preview, for press and booking use only. Please do not share publicly before release.",
    previousReleases: "Previous Releases",
    catalog:
      "Full catalog (updates automatically once Condition 2 is live on Spotify):",
    pressPhotos: "Press Photos",
    download: "Download",
    credits: "Credits",
    creditRoles: [
      "Composer / Electric Piano, Synth",
      "Saxophone",
      "Guitar",
      "Drums",
    ],
    contact: "Contact & Social",
  },
  ro: {
    releaseDate: "Lansare: 8 octombrie 2026",
    bioLead:
      "Zaharenco lansează „Condition 2”, jazz alternativ cu influențe rock",
    bio: [
      "Zaharenco, proiect din București aflat la intersecția dintre jazz modern, rock și muzică clasică, lansează pe 8 octombrie 2026 piesa Condition 2, single-ul care precede lansarea albumului de debut al proiectului, Looking for a Better Place, programat pentru noiembrie 2026.",
      "Dacă lansările precedente ale Zaharenco se defineau prin melodicitate și o construcție mai calculată, apropiată de trupe precum GoGo Penguin, Condition 2 e mai degrabă o piesă de energie, construită în jurul unei melodii simple, aproape ca un cântec fredonat de un copil, dar îmbrăcată în riff-uri de chitară electrică și ritm alert care conduc piesa înainte.",
      "Piesa e complet instrumentală și se ascultă cel mai bine de la primul până la ultimul sunet. Se construiește treptat, iar fiecare parte capătă sens din cele dinainte.",
      "Condition 2 pornește dintr-o idee clară, apoi se descompune într-un joc liber, în care saxofonul pare să se multiplice și să discute cu sine, ca o conversație purtată de aceeași voce din mai multe direcții deodată.",
      "Pe track îi ascultați pe Alexandru Zaharencu (pian electric, synth), Timotei Bîgu (saxofon), Raul Iuga (chitară electrică) și Cristian Florea (tobe).",
      "Alături de Condition 4 (Suspended in Mid-Air) și Condition 5, piesa continuă o serie Conditions ce se bazează din trăiri sincere, prezentate fără filtru.",
      "Condition 2 e una dintre cele mai dinamice piese de pe Looking for a Better Place, un album care, așa cum îi spune și numele, nu urmărește o formulă unică, ci o căutare continuă.",
      "Zaharenco a pornit în noiembrie 2023, odată cu lansarea EP-ului „Primordial Feelings”. În ultimii ani a concertat pe scene locale importante precum Gărâna Jazz Festival, JazzX, Jazz in the Park sau Csiki Jazz.",
    ],
    listen: "Ascultă",
    prerelease: "PRE-LANSARE: DOAR PENTRU PRESĂ ȘI BOOKING",
    privatePreview:
      "Fișier privat de preview, doar pentru presă și booking. Vă rugăm să nu îl distribuiți public înainte de lansare.",
    previousReleases: "Lansări anterioare",
    catalog:
      "Catalogul complet (se actualizează automat de îndată ce apare pe Spotify):",
    pressPhotos: "Fotografii de presă",
    download: "Descarcă",
    credits: "Credite",
    creditRoles: ["Compozitor / Pian electric, Synth", "Saxofon", "Chitară", "Tobe"],
    contact: "Contact & Social",
  },
};

const pressPhotos = [
  "https://cdn.sanity.io/images/732p2d9l/production/f5e420a8543cbffd73cc1b5ed883dce44fa9d551-1920x1080.jpg",
  "https://cdn.sanity.io/images/732p2d9l/production/4da7d600766add523d7c3cbb45331a57cdb034b2-4672x7008.jpg",
  "https://cdn.sanity.io/images/732p2d9l/production/a281cfb3f2025de8b281babfa9eec2f7980a8b40-2048x1365.jpg",
  "https://cdn.sanity.io/images/732p2d9l/production/563d51eaf0945866e67992a4914731e8cd06a790-3605x5407.jpg",
  "https://cdn.sanity.io/images/732p2d9l/production/122a89eec6d33aecd5915483f83727f139ee4a50-7290x5939.jpg",
  "https://cdn.sanity.io/images/732p2d9l/production/0afe177ac88f30fb140fcdb772de34e7c61c820d-8005x5877.jpg",
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

export default function EPK() {
  const [language, setLanguage] = useState("en");
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

  return (
    <div className="epk-page">
      <main className="epk-main">
        <header className="epk-header">
          <div className="epk-header-left">
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
          </div>

          <a className="epk-logo-link" href="/" aria-label="Zaharenco home">
            <img src="/Zaharenco-logo.png" alt="Zaharenco" />
          </a>

          <div className="epk-header-right">
            <span className="epk-badge">PRESS / EPK</span>
          </div>
        </header>

        <div className="epk-hero">
          <img src="/epk/condition-2.jpg" alt="Condition 2 by Zaharenco artwork" />
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
                <source src="/Audio/condition%202.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </section>

        <section className="epk-section">
          <SectionTitle>{text.previousReleases}</SectionTitle>
          <p className="epk-note">{text.catalog}</p>
          <div className="epk-spotify-frame">
            <iframe
              className="epk-spotify"
              title="Zaharenco on Spotify"
              src="https://open.spotify.com/embed/artist/4azDTEsE76hndB8paNOEe8?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>

        <section className="epk-section">
          <SectionTitle>{text.pressPhotos}</SectionTitle>
          <div className="epk-photo-grid">
            {pressPhotos.map((photo, index) => (
              <article className="epk-photo-card" key={photo}>
                <img
                  src={photo}
                  alt={`Alexandru Zaharencu press ${language === "ro" ? "foto" : "photo"} ${index + 1}`}
                  loading="lazy"
                />
                <a className="epk-download" download href={photo}>
                  {text.download}
                </a>
              </article>
            ))}
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
    </div>
  );
}
