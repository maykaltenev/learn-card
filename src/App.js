import React from "react";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
const App = () => {
  return (

    < div >
      <Header />
      <Card title="Card Title" content="This is the content of the card." />
    </div >
  );
};

export default App;
