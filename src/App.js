import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
// import Footer from "./components/Footer";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Content from "./pages/Content";
// import Contact from "./pages/Contact";
import SplashScreen from './SplashScreen';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Set this flag to indicate if the app is still loading or ready

  // Simulate loading process
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div className="app">
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            {/* Add other routes for your template pages */}
            {/* <Route path="/About" element={<About />} />
            <Route path="/MoreContent" element={<MoreContent />} />
            <Route path="/Content" element={<Content />} />
            <Route path="/Contact" element={<Contact />} /> */}
          </Routes>
          {/* <Footer /> */}
        </Router>
      )}
    </div>
  );
};

export default App;
