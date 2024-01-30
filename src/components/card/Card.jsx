import React, { useState } from "react";
import "./Card.css"; // CSS file for styling

const Card = () => {
  const [englishText, setEnglishText] = useState("");
  const [norwegianText, setNorwegianText] = useState("");

  const handleEnglishChange = (e) => {
    setEnglishText(e.target.value);
  };

  const handleNorwegianChange = (e) => {
    setNorwegianText(e.target.value);
  };

  const handleClick = () => {
    alert(`English: ${englishText}\nNorwegian: ${norwegianText}`);
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="input-container">
          <input
            type="text"
            placeholder="English word"
            value={englishText}
            onChange={handleEnglishChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Norwegian word"
            value={norwegianText}
            onChange={handleNorwegianChange}
          />
        </div>
        <div className="button-container">
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
