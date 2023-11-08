import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import BookReading from "./components/BookReading";
import About from "./components/About"


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <BookReading />
        <About />
      </div>
    </Router>
  );
}

export default App;
