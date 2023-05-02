import React from "react";
import { useState ,useEffect} from 'react'

function Nav({handleClickCRT}){

    const [time, setTime] = useState(new Date());
    
    const months = ["Mon","Tue","Wen","Thurs","Fry","Sat","Sun"];

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return(
            <nav>
                <p>100 <span className="crt-mode" onClick={() => handleClickCRT()}>CRT</span> <span>100</span> <span>{months[time.getDay()]}</span> {time.getDay()}.{time.getMonth()}.{time.getFullYear()} {time.toLocaleTimeString()}</p>
              </nav>
    )
}

export default Nav