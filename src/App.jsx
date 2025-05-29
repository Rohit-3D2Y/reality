import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover/Discover";
import BrokerForm from "./components/Auth/BrokerProfile";
import RealEstateLogin from "./components/Auth/Login";

// Wrapper to access location outside Router
const Layout = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/broker-profile", "/login"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="">
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/broker-profile" element={<BrokerForm />} />
        <Route path="/login" element={<RealEstateLogin />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
