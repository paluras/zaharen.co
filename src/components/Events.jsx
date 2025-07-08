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

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events
    .filter((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= today;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastEvents = events
    .filter((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate < today;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <div className="events-section">
          <h2>Upcoming Events</h2>
          {upcomingEvents.map((event) => (
            <div key={event._id} className="event">
              {formatDate(event.date)} – {event.title} - {event.location}
            </div>
          ))}
        </div>
      )}

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <div className="events-section">
          <h2>Past Events</h2>
          {pastEvents.map((event) => (
            <div key={event._id} className="event">
              {formatDate(event.date)} – {event.title} - {event.location}
            </div>
          ))}
        </div>
      )}

      {/* No events message */}
      {events.length === 0 && (
        <div className="no-events">No events available.</div>
      )}
    </>
  );
};

export default Events;
