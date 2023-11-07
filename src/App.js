import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import SearchResultContainer from "./components/youtubePage/SearchResultContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       <SearchResultContainer /> 
      </div>
    </Router>
  );
}

export default App;
