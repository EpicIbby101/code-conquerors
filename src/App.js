import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import BookReading from "./components/BookReading";
import Modal from "react-modal";

const rootElement = document.getElementById('root');
Modal.setAppElement(rootElement);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <BookReading />
      </div>
    </Router>
  );
}

export default App;
