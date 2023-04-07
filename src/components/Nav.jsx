import React from "react";
import { useState ,useEffect} from 'react'

function Nav({handleClickCRT}){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return(
            <nav>
                <p>100 <span className="crt-mode" onClick={() => handleClickCRT()}>CRT</span> <span>100</span> <span>Dum</span> 24 Sep 2017 {time.toLocaleTimeString()}</p>
              </nav>
    )
}

export default Nav