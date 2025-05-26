import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Page from './components/Discover/page';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="p-2">
        <Navbar /> {/* Always visible */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/discover" element={<Page />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
