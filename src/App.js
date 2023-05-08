// import logo from './logo.svg';
import "./App.css";
import LandingPage from "./pages/landing/HomePage";
import Incidents from "./pages/reportIncident/Incidents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [selectedButton, setSelectedButton] = useState("member");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Login onButtonClick={handleButtonClick} />
        {selectedButton === "member" && <LandingPage />}
        {selectedButton === "captain" && <Incidents />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
