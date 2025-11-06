import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeatureCards />
    </div>
  );
}

export default App;
