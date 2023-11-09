import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import BookReading from "./components/BookReading";
import Modal from "react-modal";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import SearchResultContainer from "./components/youtubePage/SearchResultContainer";
import "../src/styles/index.css";
import Quiz from "./components/quiz";
import { QuizProvider } from "./contexts/quiz";
import About from "./components/About";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";

const rootElement = document.getElementById("root");
Modal.setAppElement(rootElement);

function App() {
  return (
    <Router>
      <div className="App">
        <div className="bg-neutral-800">
          <Header />
          <Element name="home">
            <HeroSection />
          </Element>
          <Element name="book">
            <BookReading />
          </Element>
          <Element name="book">
            <SearchResultContainer />
          </Element>
          <Element name="book">
          <QuizProvider>
            <Quiz />
          </QuizProvider>
          </Element>
          <About />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
