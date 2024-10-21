import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeCarousel from "./Components/HomeCarousel";
import SignUp from "./Components/signup";
import "./App.css";
import Login from "./Components/Login";
import SetUp from "./Components/Setup";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeCarousel />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/SetUp" element = {<SetUp/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
