import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const [hoveredRoute, setHoveredRoute] = useState(null);

  const handlePreload = (path) => {
    setHoveredRoute(path);

    // Preload the component based on the route
    switch (path) {
      case "/":
        import("../Landing").catch(console.error);
        break;
      case "/bio":
        import("./BioComponent").catch(console.error);
        break;
      case "/music":
        import("./TextMusic").catch(console.error);
        break;
      case "/about-music":
        import("./AboutMuzicComponent").catch(console.error);
        break;
    }
  };

  return (
    <footer>
      <div className="about flex">
        <Link
          style={{ display: "flex" }}
          to="/"
          onMouseEnter={() => handlePreload("/")}
        >
          <div className="box red"></div>
          <p>Home</p>
        </Link>
      </div>

      <div className="contact flex">
        <Link
          style={{ display: "flex" }}
          to="/bio"
          onMouseEnter={() => handlePreload("/bio")}
        >
          <div className="box green"></div>
          <p>About</p>
        </Link>
      </div>

      <div className="news flex">
        <Link
          style={{ display: "flex" }}
          to="/music"
          onMouseEnter={() => handlePreload("/music")}
        >
          <div className="box yellow"></div>
          <p>Portfolio</p>
        </Link>
      </div>

      <div className="sport flex">
        <Link
          style={{ display: "flex" }}
          to="/about-music"
          onMouseEnter={() => handlePreload("/about-music")}
        >
          <div className="box blue"></div>
          <p>Band</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
