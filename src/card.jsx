import React from "react";
import "./App.css"

const Card = ({ title, text, width = "18rem" ,margin }) => {
  return (
    <div className="card" style={{ width , margin}}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
