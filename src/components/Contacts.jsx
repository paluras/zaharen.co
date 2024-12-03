import React from "react";

const ContactItem = ({ link, icon, alt, text }) => (
  <div>
    <a href={link} target="_blank">
      <img width={"42px"} src={icon} alt={alt} />
      {text}
    </a>
  </div>
);

const Contacts = () => {
  const contacts = [
    {
      link: "mailto:alexandru@zaharen.co?",
      icon: "\\icons\\Mail.png",
      alt: "mail icon",
      text: "Mail",
    },
    {
      link: "https://www.instagram.com/zaharen.co/",
      icon: "\\icons\\Instagram.png",
      alt: "instagram icon",
      text: "Instagram",
    },
    {
      link: "https://www.facebook.com/zaharen.co",
      icon: "\\icons\\Facebook.png",
      alt: "facebook icon",
      text: "Facebook",
    },
    {
      link: "https://www.youtube.com/@zaharenco",
      icon: "\\icons\\Youtube.png",
      alt: "youtube icon",
      text: "Youtube",
    },
    {
      link: "https://open.spotify.com/artist/4azDTEsE76hndB8paNOEe8?si=dBL-mht3RRapA-CO_-miEg&fbclid=IwAR2IwJVZyvZxF0uPJiI8uBJBqBTCiKa0-0b0wqabiZUxj5rDimbykAR5saY&nd=1",
      icon: "\\icons\\Spotify.png",
      alt: "spotify icon",
      text: "Spotify",
    },
    {
      link: "https://www.tiktok.com/@zaharen.co?_t=8oeMCqDwT8y&_r=1",
      icon: "\\icons\\Tiktok.png",
      alt: "TikTok icon",
      text: "TikTok",
    },
  ];

  return (
    <div className="contact-text">
      {contacts.map((contact, index) => (
        <ContactItem key={index} {...contact} />
      ))}
    </div>
  );
};

export default Contacts;
