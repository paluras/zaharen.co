import React from "react";
import { useState, useEffect } from "react";

function Nav({ children, startNumber }) {
  const [time, setTime] = useState(new Date());
  const months = ["Sun", "Mon", "Tue", "Wen", "Thurs", "Fri", "Sat"];

  const [currentNumber, setCurrentNumber] = useState(startNumber);

  useEffect(() => {
    let isIncreasing = currentNumber <= startNumber;
    const targetNumber = startNumber + 3;

    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        if (
          (isIncreasing && prevNumber >= targetNumber) ||
          (!isIncreasing && prevNumber <= targetNumber)
        ) {
          clearInterval(interval);
          return targetNumber;
        }

        return isIncreasing ? prevNumber + 1 : prevNumber - 1;
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

  return (
    <nav>
      <p>
        100 {children}
        <span> {currentNumber}</span> <span>{months[time.getDay()]}</span>{" "}
        {time.getDate()}.{time.getMonth() + 1}.{time.getFullYear()} |{" "}
        {time.toLocaleTimeString()}
      </p>
    </nav>
  );
}

export default Nav;
