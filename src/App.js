import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import BookReading from "./components/BookReading";
import Modal from "react-modal";


const rootElement = document.getElementById('root');
Modal.setAppElement(rootElement);

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
