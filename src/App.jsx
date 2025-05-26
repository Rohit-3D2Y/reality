import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover/Discover";

const App = () => {
  return (
    <Router>
      <div className="p-2">
        <Navbar /> {/* Always visible */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
