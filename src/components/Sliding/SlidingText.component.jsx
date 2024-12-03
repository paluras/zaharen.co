import React, { useRef, useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import "./SlidingText.css";

const TickerTape = () => {
  const tickerContentRef = useRef(null);
  const [tickerItems, setTickerItems] = useState([]);

  useEffect(() => {
    const query = `*[_type == "ticker"][0]{
      tickerItems
    }`;

    client.fetch(query).then((data) => {
      if (data && data.tickerItems) {
        setTickerItems(data.tickerItems);
      }
    });
  }, []);

  useEffect(() => {
    if (tickerContentRef.current) {
      const tickerContentWidth = tickerContentRef.current.offsetWidth;
      const animationDuration = tickerContentWidth / 40; // Adjust the divisor to control the scrolling speed
      tickerContentRef.current.style.animationDuration = `${animationDuration}s`;
    }
  }, [tickerItems]);

  return (
    <div className="ticker-tape">
      <div className="ticker-content" ref={tickerContentRef}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {tickerItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.url ? (
              <a href={item.url}>&nbsp;• {item.text}</a>
            ) : (
              <span>&nbsp;• {item.text}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
