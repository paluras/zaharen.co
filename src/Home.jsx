
import React from "react";
import { useState ,useEffect} from 'react'
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function Home(){

    const [count, setCount] = useState(true)
    const [start, setStart] =useState("tv-main")
    const [mainPage,setMainPage] = useState('page')
   
    const [clicked, setClicked] = useState(false);
    const [secondDisplay, setSecondDisplay] = useState("0")
    const [compenentOverflow , setComponentOverflow] = useState("hidden")
  
    
    useEffect(() => {
      
      let theDisplay2;
      let componentDisplay;
      if (clicked) {
        theDisplay2 = setTimeout(() => {
          setSecondDisplay("1")
        }, 300);
        componentDisplay = setTimeout(() => {
          setComponentOverflow("scroll")
        }, 500);
      }
      return () => clearTimeout(theDisplay2, componentDisplay);
    }, [clicked]);
  
   

  
    
      const [selectedButton, setSelectedButton] = useState("Button 1");
    
      const handleClickDisplay = (buttonName) => {
        setSelectedButton(buttonName);
      };
     

    return(
        <div className="App">
       
        
          <div  className="components">
            <main className="main">
            <Nav />
              
                
              <img className='logo' src="https://raw.githubusercontent.com/paluras/new/master/src/assets/Zaharenco-logo.png" alt="logo-zaharenco" />
              
            <div className="container">
              <div className="container-left">
              <ul>
                <li onClick={() => handleClickDisplay('Button 1')}>Whats new</li>
                <li onClick={() => handleClickDisplay('Button 2')}>About</li>
                <li onClick={() => handleClickDisplay('Button 3')}>Projects</li>
                <li onClick={() => handleClickDisplay('Button 4')}>Music</li>
              </ul> 
              </div>
              <div className="container-right">
             
            {selectedButton === 'Button 1' &&    <div className="table">
                        <div className="row">
                        
                        <Link to="/blogs"> <div className="title">Concerts</div></Link>
                          <div className="dots"></div>
                          <div className="value">245</div>
                          
                        </div>
                        <div className="row">
                          <div className="title">Folbal</div>
                          <div className="dots"></div>
                          <div className="value">254</div>
                        </div>
                        <div className="row">
                          <div className="title">formula 1</div>
                          <div className="dots"></div>
                          <div className="value">222</div>
                        </div>
                        <div className="row">
                          <div className="title">market</div>
                          <div className="dots"></div>
                          <div className="value">745</div>
                        </div>
                        </div>}
          {selectedButton === 'Button 2' &&    <div className="table">
                        <div className="row">
                          <div className="title">asdasdt</div>
                          <div className="dots"></div>
                          <div className="value">12412</div>
                        </div>
                        <div className="row">
                          <div className="title">asdasf</div>
                          <div className="dots"></div>
                          <div className="value">135234</div>
                        </div>
                        <div className="row">
                          <div className="title">asfdfg</div>
                          <div className="dots"></div>
                          <div className="value">412</div>
                        </div>
                        <div className="row">
                          <div className="title">asdf</div>
                          <div className="dots"></div>
                          <div className="value">7654</div>
                        </div>
                        </div>}
                        {selectedButton === 'Button 3' &&    <div className="table">
                        <div className="row">
                          <div className="title">Baschet</div>
                          <div className="dots"></div>
                          <div className="value">245</div>
                        </div>
                        <div className="row">
                          <div className="title">Folbal</div>
                          <div className="dots"></div>
                          <div className="value">254</div>
                        </div>
                        <div className="row">
                          <div className="title">formula 1</div>
                          <div className="dots"></div>
                          <div className="value">222</div>
                        </div>
                        <div className="row">
                          <div className="title">market</div>
                          <div className="dots"></div>
                          <div className="value">745</div>
                        </div>
                        </div>}
          {selectedButton === 'Button 4' &&    <div className="table">
                        <div className="row">
                          <div className="title">asdasdt</div>
                          <div className="dots"></div>
                          <div className="value">12412</div>
                        </div>
                        <div className="row">
                          <div className="title">asdasf</div>
                          <div className="dots"></div>
                          <div className="value">135234</div>
                        </div>
                        <div className="row">
                          <div className="title">asfdfg</div>
                          <div className="dots"></div>
                          <div className="value">412</div>
                        </div>
                        <div className="row">
                          <div className="title">asdf</div>
                          <div className="dots"></div>
                          <div className="value">7654</div>
                        </div>
                        </div>}
           
               
                
              </div>
          </div>
          <div className="container-lower">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perferendis saepe soluta recusandae natus, nobis voluptas dicta, nulla asperiores, amet cupiditate obcaecati. Nesciunt unde nemo reprehenderit, qui omnis quidem aliquam!</p>
            <div className="colored-box">
            <p>Adversarii României vin după un eșec la scor contra Elveției, 0-5, în prima rundă din preliminariile EURO 2024. Mai mult, Belarus a câștigat ultima dată un meci oficial pe 27 martie 2021, 4-2 contra Estoniei, în preliminarile CM 2022.</p>
            
            </div>
            <div className='line-border'>
              <div className="line"></div>
              <p>www.zaharen.co</p>
              <div className="line"></div>
            </div>
          </div>  
       
             <Footer />
            
            </main>
        </div>
         
    </div>
    )
}

export default Home