import React from "react";
import "../components/Card.css";
import background from "../components/image-header-mobile.jpg";

function Card2() {
  return (
    <div className="overlay">
      <div
        className="image"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
    </div>
  );
}

export default Card2;
