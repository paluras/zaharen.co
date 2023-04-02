import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NavSecond from "./components/SecondNav";
///taraneala continua si aici ///
function Blog({textBlog}){
  
  
 


    return(
        <div className="App">
       
        <div>
       
       <div className="page-main">
          <div className="components-blog">
          
            <main className="main-blogs crt">
              <div className="blog-top">
              <Nav />
              <NavSecond 
              
              />
              
              <div>
          <div className="container-tittle">
              Titlu
          </div>
          <div className="container-main">
          <div className="container-para">
            <div className="text">{textBlog}</div>
            </div> 

             
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