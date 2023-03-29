import React from "react";
import { Outlet, Link } from "react-router-dom";


function Footer(){
    return( <footer>
        <div className="about">
          <div className="box-red"></div>
          <Link to="/"> <p>Home</p></Link>
        </div>
        <div className="contact">
          <div className="box-green"></div>
          <p>Contact</p>
        </div>
        
        <div className="news">
          <div className="box-yellow"></div>
          <p>News</p>
        </div>
        
        <div className="sport">
          <div className="box-blue"></div>
          <p>Sport</p>
        </div>
       </footer>)
}

export default Footer