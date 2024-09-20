import React from 'react';
import './App.css';
import TravelPackage from './components/TravelPackage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <div>
      <Header />
    </div>
      
      <div>
      <TravelPackage />
    </div>

    </div>
    
  );
}

export default App;
