import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Card from "./components/card/Card";
import Header from "./components/header/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header /> {/* Render the Header component */}
      <Routes>
        <Route exact path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
