import React, { useState } from "react";
import "./Random.css"; // Import CSS file for styling

const Card = ({ english, norwegian }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="front">
        <p>{english}</p>
      </div>
      <div className="back">
        <p>{norwegian}</p>
      </div>
    </div>
  );
};

export default Card;
