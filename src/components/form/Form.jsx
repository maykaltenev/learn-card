import React from "react";
import { useDictionary } from "../../context/DictionaryContext.js"; // Import the useDictionary hook
import "./Form.css"; // CSS file for styling

const Form = () => {
  const { currentWord, setCurrentWord, addWord } = useDictionary(); // Access currentWord and setCurrentWord from context

  const handleEnglishChange = (e) => {
    setCurrentWord({ ...currentWord, english: e.target.value });
  };

  const handleNorwegianChange = (e) => {
    setCurrentWord({ ...currentWord, norwegian: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    addWord();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
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
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
