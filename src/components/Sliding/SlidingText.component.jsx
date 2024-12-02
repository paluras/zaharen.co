import React, { useRef, useEffect } from "react";
import "./SlidingText.css";

const TickerTape = () => {
  const tickerContentRef = useRef(null);

  useEffect(() => {
    const tickerContentWidth = tickerContentRef.current.offsetWidth;
    const animationDuration = tickerContentWidth / 40; // Adjust the divisor to control the scrolling speed
    tickerContentRef.current.style.animationDuration = `${animationDuration}s`;
  }, []);
  return (
    <div className="ticker-tape">
      <div className="ticker-content" ref={tickerContentRef}>
        {/* Your ticker tape content goes here */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.zaharen.co/about-music ">
          &nbsp;• Condition 4 (Suspended in Mid-Air) is Zaharenco's latest
          single, released in August 2024 and available on all streaming
          platforms
        </a>
        <a href="https://www.zaharen.co/bio">
          &nbsp;• Who is Zaharenco and why am I on his site?
        </a>
        <a href="https://www.zaharen.co/visual">
          &nbsp;• Click here to explore Catoptro-tono v.2, presented at the
          Meridian International Festival 2024{" "}
        </a>
        <a href="https://www.zaharen.co/inspiration">
          &nbsp;• Follow the playlist New Jazz Romania to discover the music of
          the Romanian jazz scene
        </a>
        &nbsp;• If you're still on home page, it means you're ready for the
        easter egg: top of the screen, click on the CRT text twice
      </div>
    </div>
  );
};

export default TickerTape;
