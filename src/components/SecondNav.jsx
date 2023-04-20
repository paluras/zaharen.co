import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";



function NavSecond({navItems}){

    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      // Find the index of the current page in the navItems array
      const index = navItems.findIndex(item => item.url === location.pathname);
      setActiveIndex(index);
    }, [location.pathname]);

    
    
////asta este taraneala trebuie refacut,,,, trebuie sa faci cu map dintr un array , ca e groaznic ce se intampla aici//
///sau sa folosesti un json , cred ca trebuie json cel mai bine//    

return (
    
      <div className="secondNav">
        {navItems.map((item, index) => (
           <NavLink to={item.url} activeclassname="active">
            
           <li
            key={item.key}
            className={index === activeIndex ? 'active' : ''}
          >{item.text}
            
          </li></NavLink>
        ))}
        
      </div>
   
  );
        }

export default NavSecond