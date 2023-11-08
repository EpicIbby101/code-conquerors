import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../youtubePage/YoutubeAPI";

// baseUrl is a local variable which is used in the <iframe> tag in line:
let baseURL = "https://www.youtube.com/embed/";

// SearchResultContainer is made as a class and extends to component
class SearchResultContainer extends Component {

    // State object with search and results with nothing inside, to be filled with the query and the results in the function below
    state = {
        search: "",
        results: []
      };

      //Function to get the results of the query/search into the the state.results
      searchVideo = query => {
        API.search(query)
          .then(res => this.setState({ results: res.data.items }))
          .catch(err => console.log(err));
      };

      // Function for inputChange for each letter typed and shown on the input 

      handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };

      //Function that adds the query into the state.search
      // When the form is submitted, search the Video API for `this.state.search`
      handleFormSubmit = event => {
        event.preventDefault()
        this.searchVideo(this.state.search);
        console.log(this.state.results)
        
      };

      render() {
        return (
            <div className="bg-black">
                <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                
                
            </div> 
            
            
        
        )
    }
    

    }

export default SearchResultContainer;