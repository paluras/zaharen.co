import React from "react";
import { useState ,useEffect} from 'react'

function Nav({handleClickCRT,startNumber}){

    const [time, setTime] = useState(new Date());
    //const [number , setNumber] = useState(Math.floor(Math.random() * 100))
    const months = ["Sun","Mon","Tue","Wen","Thurs","Fri","Sat",];

    const [currentNumber, setCurrentNumber] = useState(startNumber);
 
  
    useEffect(() => {
      const maxCount = 5;
  
      const interval = setInterval(() => {
        setCurrentNumber((prevNumber) => {
          const nextNumber = prevNumber + 1;
          if (nextNumber >= startNumber + maxCount) {
            clearInterval(interval);
            return startNumber + maxCount;
          }
          return nextNumber;
        });
      }, 100); // Change the speed of counting here (milliseconds)
  
      return () => {
        clearInterval(interval); // Cleanup the interval on component unmount
      };
    }, [startNumber]);

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

 


    return(
            <nav>
                <p>100 <span className="crt-mode" onClick={() => handleClickCRT()}>CRT</span> <span> {currentNumber}</span> <span>{months[time.getDay()]}</span> {time.getDate()}.{time.getMonth()+1}.{time.getFullYear()} | {time.toLocaleTimeString()}</p>
              </nav>
    )
}

export default Nav