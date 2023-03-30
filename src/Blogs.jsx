import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function Blog(){
    return(
        <div className="App">
       
        <div>
       
       <div className="page-main">
          <div className="components-blog">
          
            <main className="main-blogs crt">
              <Nav />
              
              <div>
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