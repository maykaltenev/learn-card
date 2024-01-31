import React, { createContext, useContext, useState } from "react";

const DictionaryContext = createContext();

export const useDictionary = () => {
  return useContext(DictionaryContext);
};

export const DictionaryProvider = ({ children }) => {
  const [wordList, setWordList] = useState([]);
  const [currentWord, setCurrentWord] = useState({
    english: "",
    norwegian: "",
  });

  const addWord = () => {
    if (
      currentWord.english.trim() !== "" &&
      currentWord.norwegian.trim() !== ""
    ) {
      setWordList([...wordList, currentWord]);
      setCurrentWord({ english: "", norwegian: "" });
    } else {
      alert("Please enter both English and Norwegian words.");
    }
  };

  const value = {
    wordList,
    currentWord,
    setCurrentWord,
    addWord,
  };

  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  );
};
