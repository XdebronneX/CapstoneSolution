import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NavBar from "./components/Navbar";
import Login from "./components/users/Login";
import ForgotPassword from "./components/users/ForgotPassword";
import Register from "./components/users/Register";
import NewPassword from "./components/users/NewPassword";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Homepage />} exact={true} />
        <Route path="/login" element={<Login />} exact={true} />
        <Route path="/register" element={<Register />} exact={true} />
        <Route path="/forgotPassword" element={<ForgotPassword />} exact={true} />
        <Route path="/password/reset/:token" element={<NewPassword />} exact={true}/>
      </Routes>
    </div>
  );
}

export default App;
