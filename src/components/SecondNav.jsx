import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useTransition } from "react";

function NavSecond({ navItems }) {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      const index = navItems.findIndex(
        (item) => item.url === location.pathname
      );
      setActiveIndex(index);
    });
  }, [location.pathname, navItems]);

  return (
    <div className={`secondNav ${isPending ? "transitioning" : ""}`}>
      {navItems.map((item, index) => (
        <NavLink
          key={item.keys}
          to={item.url}
          activeclassname="active"
          className={isPending ? "nav-pending" : ""}
        >
          <li className={index === activeIndex ? "active" : ""}>{item.text}</li>
        </NavLink>
      ))}
    </div>
  );
}

export default NavSecond;
