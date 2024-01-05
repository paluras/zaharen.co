import React from "react";
import { Link } from "react-router-dom";

const Table = ({obj}) => {
 
  return (
    <>
      {obj.map((item) => (
        <Link key={item.id} to={item.path}>
          <div className="row">
            <div className="title">{item.title}</div>
            <div className="dots"></div>
            <div className="value">{item.dots}</div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Table;
