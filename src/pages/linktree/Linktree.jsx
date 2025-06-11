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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

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

        // Fetch both queries in parallel
        const [configData, buttonsData] = await Promise.all([
          client.fetch(configQuery),
          client.fetch(buttonsQuery),
        ]);

        if (configData) {
          setConfig(configData);
        }

        if (buttonsData) {
          setButtons(buttonsData);
        }
      } catch (error) {
        console.error("Error fetching linktree data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to track button clicks with error handling
  const trackButtonClick = (buttonName) => {
    try {
      if (window.fbq && typeof window.fbq === "function") {
        window.fbq("track", "Subscribe", {
          button_name: buttonName,
        });
      }
    } catch (error) {
      console.warn("Facebook Pixel tracking error:", error);
    }
  };

  // Get the appropriate icon source with fallbacks
  const getIconSource = (button) => {
    // Priority: Sanity image > legacy iconPath > platform default
    if (button.icon) {
      return builder.image(button.icon).url();
    }

    if (button.iconPath) {
      return button.iconPath;
    }

    // Default platform icons mapping
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

  // Get logo source with fallback
  const getLogoSource = () => {
    if (config?.logo) {
      return builder.image(config.logo).url();
    }
    return config?.logoPath || "./Zaharenco-logo.png";
  };

  // Get featured image source with fallback
  const getFeaturedImageSource = () => {
    if (config?.featuredImage) {
      return builder.image(config.featuredImage).url();
    }
    return config?.featuredImagePath || "./Artwork Condition 4 v.5.jpg";
  };

  // Split buttons for responsive layout
  const bentoButtons = buttons.slice(0, 3);
  const fullWidthButtons = buttons.slice(3);

  // Handle logo click navigation
  const handleLogoClick = () => {
    navigate("/");
  };

  // Handle featured image click
  const handleFeaturedImageClick = () => {
    trackButtonClick("Cover Album");
  };

  // Loading state
  if (isLoading) {
    return (
      <main className="linktree-main">
        <div className="linktree-loading">
          <div className="loading-spinner"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="linktree-main">
      <Helmet>
        <title>{config?.title || "Zaharenco - Links"}</title>
        <meta
          name="description"
          content="Official links and music platforms for Zaharenco"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Facebook Pixel */}
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
          onClick={handleLogoClick}
          className="linktree-zaharenco-logo"
          src={getLogoSource()}
          alt="Zaharenco Logo"
          loading="eager"
        />
      </header>

      <section className="linktree-content">
        {/* Bento Box Container */}
        <div className="linktree-bento-container">
          {/* Featured Image Section */}
          {config && (
            <div className="img-container-linktree" role="banner">
              <a
                href={config.featuredImageLink || "#"}
                target={config.featuredImageLink ? "_blank" : "_self"}
                rel={config.featuredImageLink ? "noopener noreferrer" : ""}
                onClick={handleFeaturedImageClick}
                className="featured-image-link"
                aria-label={config.featuredImageAlt || "Featured content"}
              >
                <img
                  id="linktree-img"
                  src={getFeaturedImageSource()}
                  alt={config.featuredImageAlt || "Featured Image"}
                  loading="lazy"
                />
              </a>
            </div>
          )}

          {/* Bento Buttons (First 3) */}
          {bentoButtons.map((button, index) => (
            <div
              key={button._id}
              className="bento-button"
              style={{ "--grid-row": index + 1 }}
            >
              <LinktreeButton
                linkProp={button.url}
                imgProp={getIconSource(button)}
                textProp={button.title || ""}
                altText={button.altText}
                onClick={() =>
                  trackButtonClick(button.trackingName || button.altText)
                }
              />
            </div>
          ))}
        </div>

        {/* Full Width Buttons */}
        {fullWidthButtons.length > 0 && (
          <div
            className="full-width-buttons"
            role="navigation"
            aria-label="Additional links"
          >
            {fullWidthButtons.map((button) => (
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
          </div>
        )}

        {/* Fallback for no buttons */}
        {buttons.length === 0 && !isLoading && (
          <div className="no-content-message">
            <p>No links available at the moment.</p>
          </div>
        )}
      </section>
    </main>
  );
}
