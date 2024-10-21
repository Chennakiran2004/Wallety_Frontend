import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeCarousel from "./Components/HomeCarousel";
import SignUp from "./Components/signup";
import "./App.css";
import Login from "./Components/Login";
import SetUp from "./Components/Setup";
import AddNewAccount from "./Components/AddNewAccount";
import TabBar from "./Components/TabBar";
import Home from "./Components/Home";
import Budget from "./Components/Budget";
import Transaction from "./Components/Transaction";
import Profile from "./Components/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<HomeCarousel />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SetUp" element={<SetUp />} />
          <Route path="/AddNewAccount" element={<AddNewAccount />} /> */}
          <Route path="/TabBar" element={<TabBar />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Budget" element={<Budget />} />
          <Route path="/Transaction" element={<Transaction />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
