import React, { useState } from "react";
import "./Card.css"; // CSS file for styling

const Card = () => {
  const [englishText, setEnglishText] = useState("");
  const [norwegianText, setNorwegianText] = useState("");
  const [wordList, setWordList] = useState([]);

  const handleEnglishChange = (e) => {
    setEnglishText(e.target.value);
  };

  const handleNorwegianChange = (e) => {
    setNorwegianText(e.target.value);
  };

  const handleClick = () => {
    if (englishText.trim() !== "" && norwegianText.trim() !== "") {
      const newWord = {
        english: englishText,
        norwegian: norwegianText,
      };
      setWordList([...wordList, newWord]);
      setEnglishText(""); // Clear the input fields after adding
      setNorwegianText("");
    } else {
      alert("Please enter both English and Norwegian words.");
    }
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
      <div>
        <h2>Word List</h2>
        <ul>
          {wordList.map((word, index) => (
            <li key={index}>
              <strong>English:</strong> {word.english},{" "}
              <strong>Norwegian:</strong> {word.norwegian}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
