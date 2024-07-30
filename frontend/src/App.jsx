import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import ContactUs from "./components/ContactUs";

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="content-container overflow-auto" style={{ maxHeight: 'calc(100vh - 70px)', paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Homepage />} exact={true} />
          <Route path="/contactUs" element={<ContactUs />} />
          {/* Add other routes here */}
        </Routes>
        <div className="col-12 mt-6 md:col-12 text-center">
          <Technologies />
        </div>
        <div className="col-12 mt-6 md:col-12 text-center">
          <Footer />
        </div>
        <div className="col-12 mt-6 md:col-12 text-center">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default App;
