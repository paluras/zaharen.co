
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
            <main className="main-blogs crt">
              <nav>
                <p>100 <span>TVR</span> <span>100</span> <span>Dum</span> 24 Sep 2017 13:13:34</p>
              </nav>
              
              
          <div className="container-tittle">
              Jazz in the Park - 2022
          </div>
          <div className="container-blog">
            <div className="container-blog text">CONTROL is a participative installation dealing with topics of control, intimacy and virtuality. In a VR-like setting the audience moves through different stages in an empty building while using first-person-perspective surveillance technology to experience the setting both in a virtual and an immersive context. The experiment-like setting allows for a rich palette of human interaction and depicts social and technological aspects of an artificial and systematized world.</div>
            <div className="container-blog media"><iframe width="560" height="315" src="https://www.youtube.com/embed/kvLqhsHWUd4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

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