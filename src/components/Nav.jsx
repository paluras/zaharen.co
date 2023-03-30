import React from "react";
import { useState ,useEffect} from 'react'

function Nav(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return(
            <nav>
                <p>100 <span>TVR</span> <span>100</span> <span>Dum</span> 24 Sep 2017 {time.toLocaleTimeString()}</p>
              </nav>
    )
}

export default Nav