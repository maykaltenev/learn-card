import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Dictionary from "./components/dictionary/Dictionary";
const App = () => {
  return (
    <BrowserRouter>
      <Header /> {/* Render the Header component */}
      <Routes>
        <Route exact path="/card" element={<Card />} />
        <Route exact path="/dictionary" element={<Dictionary />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
