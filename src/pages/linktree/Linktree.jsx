import React, { useState, useEffect } from "react";
import { LinktreeButton } from "./components/LinktreeButton";
import "./linktree.style.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { client } from "../../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export default function LinkTree() {
  const navigate = useNavigate();
  const [config, setConfig] = useState(null);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    // Query for linktree configuration
    const configQuery = `*[_type == "linktreeConfig"][0]{
      title,
      logo,
      logoPath,
      featuredImage,
      featuredImagePath,
      featuredImageLink,
      featuredImageAlt,
      facebookPixelId
    }`;

    // Query for active buttons ordered by display order
    const buttonsQuery = `*[_type == "linktreeButton" && isActive == true] | order(order asc){
      _id,
      title,
      url,
      platform,
      icon,
      iconPath,
      altText,
      order,
      trackingName,
      openInNewTab
    }`;

    // Fetch both queries
    Promise.all([client.fetch(configQuery), client.fetch(buttonsQuery)])
      .then(([configData, buttonsData]) => {
        if (configData) {
          setConfig(configData);
        }
        if (buttonsData) {
          setButtons(buttonsData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to track button clicks
  const trackButtonClick = (buttonName) => {
    if (window.fbq) {
      window.fbq("track", "Subscribe", {
        button_name: buttonName,
      });
    }
  };

  // Get the appropriate icon source
  const getIconSource = (button) => {
    // If Sanity image exists, use it
    if (button.icon) {
      return builder.image(button.icon).url();
    }

    // If legacy iconPath exists, use it
    if (button.iconPath) {
      return button.iconPath;
    }

    // Default platform icons (fallback when no icon is provided)
    const platformIcons = {
      youtube: "./icons/youtubelogo.png",
      spotify: "./icons/spotifylogo.png",
      "apple-music": "./icons/applelogo.png",
      soundcloud: "./icons/soundcloudlogo.png",
      "youtube-music": "./icons/youtubemusiclogo.png",
      bandcamp: "./icons/Logo Bandcamp Edit.png",
      tidal: "./icons/tidallogo.png",
    };

    return platformIcons[button.platform] || "";
  };

  // Get logo source
  const getLogoSource = () => {
    if (config?.logo) {
      return builder.image(config.logo).url();
    }
    return config?.logoPath || "./Zaharenco-logo.png";
  };

  // Get featured image source
  const getFeaturedImageSource = () => {
    if (config?.featuredImage) {
      return builder.image(config.featuredImage).url();
    }
    return config?.featuredImagePath || "./Artwork Condition 4 v.5.jpg";
  };

  return (
    <main className="linktree-main">
      <Helmet>
        <title>{config?.title || "Zaharenco - Links"}</title>
        {config?.facebookPixelId && (
          <script>
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${config.facebookPixelId}');
              fbq('track', 'PageView');
            `}
          </script>
        )}
      </Helmet>

      <header className="linktree-header">
        <img
          onClick={() => navigate("/")}
          className="linktree-zaharenco-logo"
          aria-hidden
          src={getLogoSource()}
          alt="logo"
          style={{
            cursor: "pointer",
          }}
        />
      </header>

      <section>
        {/* Featured Image */}
        {config && (
          <div className="img-container-linktree">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={config.featuredImageLink || "#"}
              onClick={() => trackButtonClick("Cover Album")}
            >
              <img
                id="linktree-img"
                src={getFeaturedImageSource()}
                alt={config.featuredImageAlt || "Featured Image"}
              />
            </a>
          </div>
        )}

        {/* Dynamic Buttons */}
        {buttons.map((button) => (
          <LinktreeButton
            key={button._id}
            linkProp={button.url}
            imgProp={getIconSource(button)}
            textProp={button.title || ""}
            altText={button.altText}
            onClick={() =>
              trackButtonClick(button.trackingName || button.altText)
            }
          />
        ))}
      </section>
    </main>
  );
}
