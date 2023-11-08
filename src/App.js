import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";


import HeroSection from "./components/HeroSection";
import BookReading from "./components/BookReading";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />
        <BookReading />

        <Footer />
      </div>
    </Router>
  );
}



export default App;
