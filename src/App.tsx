import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeCarousel from "./Components/HomeCarousel";
import SignUp from "./Components/signup";
import "./App.css";
import Login from "./Components/Login";
import SetUp from "./Components/Setup";
import AddNewAccount from "./Components/AddNewAccount";
import YouAreAllSet from "./Components/YouAreAllSet";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeCarousel />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SetUp" element={<SetUp />} />
          <Route path="AddNewAccount" element={<AddNewAccount />} />
          <Route path="/YouAreAllSet" element={ <YouAreAllSet/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
