import React from "react";
import { Outlet, Link } from "react-router-dom";

import Footer from "./components/Footer";

function Blog(){
    return(
        <div className="App">
       
        <div>
       
       <div className="page-main">
          <div className="components-blog">
          <nav>
          </nav>
            <main className="main-blogs">
              <nav>
                <p>100 <span>TVR</span> <span>100</span> <span>Dum</span> 24 Sep 2017 13:13:34</p>
              </nav>
              
              
          <div className="container-tittle">
              Past Events
          </div>
          <div className="container-main">
          <div className="container-para">
             <div className="title"><Link to="/jazz">Jazz</Link></div>
            <div className="text">Post Rave for singer, ensemble, electronics, haze and light</div>
            </div> 

            <div className="container-para">
            <div className="title">Iasi</div>
            <div className="text">Post Rave for singer, ensemble, electronics, haze and light</div>
            </div>
            
            <div className="container-para">
            <div className="title">Iasi</div>
            <div className="text">Post Rave for singer, ensemble, electronics, haze and light</div>
            </div> 

            <div className="container-para">
            <div className="title">Iasi</div>
            <div className="text">Post Rave for singer, ensemble, electronics, haze and light</div>
            </div> 

          </div>            
            <Footer />
            </main>
        </div>
        </div>
      </div>    
    </div>
    )
}

export default Blog