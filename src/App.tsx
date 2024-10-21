// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomeCarousel from "./Components/HomeCarousel";
// import SignUp from "./Components/signup";
// import "./App.css";
// import Login from "./Components/Login";
// import SetUp from "./Components/Setup";
// import AddNewAccount from "./Components/AddNewAccount";
// import TabBar from "./Components/TabBar";
// import Home from "./Components/Home";
// import Budget from "./Components/Budget";
// import Transaction from "./Components/Transaction";
// import Profile from "./Components/Profile";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/" element={<HomeCarousel />} />
//           <Route path="/Signup" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/SetUp" element={<SetUp />} />
//           <Route path="/AddNewAccount" element={<AddNewAccount />} /> */}
//         <Route path="/TabBar" element={<TabBar />} />
//         <Route path="/Home" element={<Home />} />
//         <Route path="/Budget" element={<Budget />} />
//         <Route path="/Transaction" element={<Transaction />} />
//         <Route path="/Profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomeCarousel from "./Components/HomeCarousel";
import SignUp from "./Components/signup";
import Login from "./Components/Login";
import SetUp from "./Components/Setup";
import AddNewAccount from "./Components/AddNewAccount";
import TabBar from "./Components/TabBar";
import Profile from "./Components/Profile";
import Transaction from "./Components/Transaction";
import Budget from "./Components/Budget";
import Home from "./Components/Home";
import YouAreAllSet from "./Components/YouAreAllSet";

function App() {
  const location = useLocation();

  const shouldShowTabBar = [
    "/home",
    "/profile",
    "/transaction",
    "/budget",
  ].includes(location.pathname);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeCarousel />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SetUp" element={<SetUp />} />
          <Route path="AddNewAccount" element={<AddNewAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

    <div className="App">
      <Routes>
        <Route path="/" element={<HomeCarousel />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setup" element={<SetUp />} />
        <Route path="/addNewAccount" element={<AddNewAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/youAreAllSet" element={<YouAreAllSet />} />
      </Routes>
      {shouldShowTabBar && <TabBar />}
    </div>
  );
}

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;