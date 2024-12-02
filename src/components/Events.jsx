import React, { useState, useEffect } from "react";
import { client } from "../lib/sanity";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const query = `*[_type == "events"] | order(date desc)`;

    client.fetch(query).then((data) => {
      setEvents(data);
    });
  }, []);

  return (
    <>
      {events.map((event) => (
        <div key={event._id} className="event">
          {new Date(event.date).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
          – {event.title} - {event.location}
        </div>
      ))}
    </>
  );
};

export default Events;
