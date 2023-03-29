import { useState ,useEffect} from 'react'
import './App.css'
import { BrowserRouter, Routes,Route, Link } from "react-router-dom";
import LandingPage from './Landing';
import Blog from './Blogs';
import Jazz from "./Jazz"

function App() {




  return (
   
      <>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/blogs" element={<Blog />}/>
        <Route path="/jazz" element={<Jazz />}/>
      </Routes>
    
      </>
  )
}

export default App
