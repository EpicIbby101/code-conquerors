import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import BookReading from "./components/BookReading";
import Modal from "react-modal";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import About from "./components/About"

const rootElement = document.getElementById("root");
Modal.setAppElement(rootElement);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />
        <BookReading />
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
