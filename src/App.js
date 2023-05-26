import React from 'react';
import SplashScreen from './SplashScreen';
import './App.css';

const App = () => {
  const isLoading = true; // Set this flag to indicate if the app is still loading or ready

  return (
    <div className="app">
      {isLoading ? <SplashScreen /> : <div>Main App Content</div>}
    </div>
  );
};

export default App;
