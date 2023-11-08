import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import BookReading from "./components/BookReading";
import Modal from "react-modal";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import SearchResultContainer from "./components/youtubePage/SearchResultContainer";

const rootElement = document.getElementById("root");
Modal.setAppElement(rootElement);


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SearchResultContainer /> 
        <HeroSection />
        <BookReading />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
