import { useState ,useEffect} from 'react'
import './App.css'
import { BrowserRouter, Routes,Route, Link } from "react-router-dom";
import LandingPage from './Landing';
import Blog from './Blogs';
import Jazz from "./Jazz"
import Home from './Home';

function App() {

  const mediaPhotos= <div className='media'>
      <img src="src\assets\Zahar\zahar2.JPG" alt="" />
      <img src="src\assets\Zahar\zahar3.JPG" alt="" />
      <img src="src\assets\Zahar\zahar4.JPG" alt="" />
      <img src="src\assets\Zahar\zahar5.png" alt="" />
      <img src="src\assets\Zahar\zahar6.JPG" alt="" />
      <img src="src\assets\Zahar\zahar7.jpg" alt="" />
  </div>
  const contacts = <div className="contact-text">
   <div><a href="mailto:zaharencu.alexandru@gmail.com?">Mail</a> </div>
    <div><a href='https://www.facebook.com/zaharen.co'>Facebook</a></div>
    <div><a href='https://www.instagram.com/zaharen.co/'></a>Instagram</div>
    <div><a href='https://www.youtube.com/@zaharenco'>Youtube</a></div>
    <div><a href='https://open.spotify.com/artist/4azDTEsE76hndB8paNOEe8?si=dBL-mht3RRapA-CO_-miEg&fbclid=IwAR2IwJVZyvZxF0uPJiI8uBJBqBTCiKa0-0b0wqabiZUxj5rDimbykAR5saY&nd=1'>Spotify</a></div>
    <div><a href='https://linktr.ee/zaharen.co?utm_source=linktree_profile_share&ltsid=56442ba0-afdf-4bbd-8046-e6c2f7bf8572'>LinkTree</a></div>
  </div>


  return (
   
      <>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/bio" element={<Blog 
        textBlog={"lorem asdada asdas das asd asda sda sdas das dasd asd asdasdasdasads asd asd da"}
        tittleBlog={"Bio"}
         />}/>
        <Route path="/photos" element={<Blog 
        textBlog={"Photo photo photo"}
        tittleBlog={"Photos"}
        media={mediaPhotos}
         />}/>
        <Route path="/contacts" element={<Blog 
        textBlog={""}
        tittleBlog={"Contacts"}
        contact={contacts}
         />}/>
        <Route path="/inspiration" element={<Blog 
        textBlog={"lorem asdada asdas das asd asda sda sdas das dasd asd asdasdasdasads asd asd da"}
        tittleBlog={"Inspiration"}
        />}/>
        <Route path="/jazz" element={<Jazz />}/>
      </Routes>
    
      </>
  )
}

export default App
