import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function NavSecond({ navItems }) {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Find the index of the current page in the navItems array
    const index = navItems.findIndex((item) => item.url === location.pathname);
    setActiveIndex(index);
  }, [location.pathname]);

  return (
    <div className="secondNav">
      {navItems.map((item, index) => (
        <NavLink key={item.keys} to={item.url} activeclassname="active">
          <li  className={index === activeIndex ? "active" : ""}>
            {item.text}
          </li>
        </NavLink>
      ))}
    </div>
  );
}

export default NavSecond;
