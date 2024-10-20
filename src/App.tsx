import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeCarousel from "./Components/HomeCarousel";
import SignUp from "./Components/signup";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeCarousel />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
