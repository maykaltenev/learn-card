import React from "react";
import { useDictionary } from "../../context/DictionaryContext.js"; // Import the useDictionary hook
import "./Card.css"; // CSS file for styling

const Card = () => {
  const { currentWord, setCurrentWord, addWord } = useDictionary(); // Access currentWord and setCurrentWord from context

  const handleEnglishChange = (e) => {
    setCurrentWord({ ...currentWord, english: e.target.value });
  };

  const handleNorwegianChange = (e) => {
    setCurrentWord({ ...currentWord, norwegian: e.target.value });
  };

  const handleClick = () => {
    addWord();
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="input-container">
          <input
            type="text"
            placeholder="English word"
            value={currentWord.english}
            onChange={handleEnglishChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Norwegian word"
            value={currentWord.norwegian}
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
