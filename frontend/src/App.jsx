import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NavBar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Homepage />} exact={true} />
      </Routes>
    </div>
  );
}

export default App;
