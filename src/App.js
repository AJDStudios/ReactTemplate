import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
// import Footer from "./components/Footer";
import Content from "./pages/Content.js";
import MoreContent from "./pages/MoreContent.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import SplashScreen from './pages/SplashScreen.js';
import './styles/App.css';

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
            <Route path="/Content" element={<Content />} /> 
            <Route path="/MoreContent" element={<MoreContent />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      )}
    </div>
  );
};

export default App;
