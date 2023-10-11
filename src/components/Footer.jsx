import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="about flex">
        <Link style={{display:"flex"}} to={"/"}>
          {" "}
          <div className="box red"></div>
          <p>Home</p>
        </Link>
      </div>
      <div className="contact flex">
        <Link style={{display:"flex"}} to="/bio">
          {" "}
          <div className="box green"></div>
          <p>About</p>
        </Link>
      </div>

      <div className="news flex">
        <Link style={{display:"flex"}} to="/music">
          {" "}
          <div className="box yellow"></div>
          <p>Portfolio</p>
        </Link>
      </div>

      <div className="sport flex">
        <Link style={{display:"flex"}} to="/about-music">
          <div className="box blue"></div>
          <p>Band</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
