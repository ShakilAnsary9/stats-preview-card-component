import React from "react";
import "../components/Card.css";
import Card2 from "../components/Card2";

function Card() {
  return (
    <div className="left-part">
      <div className="middle-part">
        <h1>
          Get <span>insights</span> that help <br /> your business grow.
        </h1>
        <p class="info">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div id="container">
          <div>
            10K+ <br />
            <span>companies</span>
          </div>
          <div>
            314 <br />
            <span>templates</span>
          </div>
          <div>
            12M+ <br />
            <span>queries</span>
          </div>
        </div>
      </div>
      <Card2 />
    </div>
  );
}

export default Card;
