import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Temp from "./Components/Temp";
import Games from "./Components/Games";
import Action from "./Components/Action";
import Chain from "./Components/Chain";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Games />
        <Action />
        <Chain />
        <Footer />
      </div>
    </>
  );
}

export default App;
