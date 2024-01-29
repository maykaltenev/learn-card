import React, { useState } from "react";
import "./Card.css"; // CSS file for styling

const Card = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    alert(text);
  };

  return (
    <div className="card-container">
      <div className="card">
        <textarea placeholder="New word" value={text} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

export default Card;
