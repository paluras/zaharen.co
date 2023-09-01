import React from "react";
import { Link } from "react-router-dom";


function Footer(){
    return( <footer>
        <div className="about">
        <Link to="/">  <div className="box red"></div></Link>
          <Link to="/"> <p>Home</p></Link>
        </div>
        <div className="contact">
        <Link to="/bio"> <div className="box green"></div></Link>
          <Link to="/bio"> <p>About</p></Link>
        </div>
        
        <div className="news">
        <Link to="/music" > <div className="box yellow"></div></Link>
          <Link to="/music"> <p>Portfolio</p></Link>
        </div>
        
        <div className="sport">
        <Link to="/about-music"><div className="box blue"></div></Link>
          <Link to="/about-music"> <p>Band</p></Link>
        </div>
       </footer>)
}

export default Footer