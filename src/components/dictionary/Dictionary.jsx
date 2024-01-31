import React from "react";
import { useDictionary } from "../../context/DictionaryContext.js"; // Import the useDictionary hook
import "./Dictionary.css"; // CSS file for styling
import Card from "../card/Card.jsx"; // Importing the Card component

const Dictionary = () => {
  const { wordList } = useDictionary(); // Access wordList from context
  console.log(wordList);
  return (
    <div className="dictionary-container">
      <div className="word-list">
        <h2>Dictionary</h2>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>ENGLISH</th>
              <th>NORWEGIAN</th>
            </tr>
          </thead>
          <tbody>
            {wordList.map(({ english, norwegian }, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{english}</td>
                <td>{norwegian}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dictionary;
