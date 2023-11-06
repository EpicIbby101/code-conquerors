import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />
      </div>
    </Router>
  );
}



export default App;
