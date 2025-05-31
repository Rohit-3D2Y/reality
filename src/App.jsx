import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover/Discover";
import BrokerForm from "./components/Auth/BrokerProfile";
import RealEstateLogin from "./components/Auth/Login";
import PropertyExpand from "./components/Discover/discoverExpandSections/PropertyExpand";
import ScrollToTop from "./components/ScrollToTop";

const Layout = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/broker-profile", "/login"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="">
      {/* ✅ ScrollToTop must be placed here */}
      <ScrollToTop />

      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/broker-profile" element={<BrokerForm />} />
        <Route path="/login" element={<RealEstateLogin />} />
        <Route path="/discover/property-expand" element={<PropertyExpand />} />
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
