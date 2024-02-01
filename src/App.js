import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Dictionary from "./components/dictionary/Dictionary";
import Random from "./components/random/Random"
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Header /> {/* Render the Header component */}
      <Routes>
        <Route exact path="/add" element={<Form />} />
        <Route exact path="/random" element={<Random />} />
        <Route exact path="/dictionary" element={<Dictionary />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
