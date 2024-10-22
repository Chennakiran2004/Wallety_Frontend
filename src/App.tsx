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
import UserInfo from "./Components/UserInfo";

function App() {
  const location = useLocation();

  const shouldShowTabBar = [
    "/home",
    "/profile",
    "/transaction",
    "/budget",
  ].includes(location.pathname);

  return (
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
        <Route path="/userInfo" element={<UserInfo />} />
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
