import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <div >
        <Navbar />
        <Home  />
        <Home />
      </div>
    </>
  );
}

export default App;
