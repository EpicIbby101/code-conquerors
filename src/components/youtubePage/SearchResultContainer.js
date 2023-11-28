import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../youtubePage/YoutubeAPI";

// baseUrl is a local variable which is used in the <iframe> tag in line:60
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

      youtubeCinema = () => {
        <div className="bg-neutral-800">


        </div>
      }

      
    

      render() {
        return (
            // SearchForm Component with props to use in the .js file
            <div className="bg-black">
                <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                
                
                {/* render the API results into the <iframe> embedded youtube video (the videoId into the scr= in the iframe tag) */}
                <div className="container pb-60 bg-black">
                    <div className="row row-cols-2 bg-black flex flex-wrap">
                        {this.state.results.map(result => ( 
                          
                        <div key={result.id} className="col p-4 ml-15 flex center">
                            {/*                                                               v Problem FIXXEDDDD */}
                            <iframe title="myFrame" width="560" height="315" src={baseURL + result.id.videoId} frameBorder="10" allowFullScreen></iframe>
                        </div>
                        // button for fullscreen, button for comments on each.
                    
                        ))}
                    </div>
                </div>
            </div> 
            
            
        
        )
    }
    

    }

export default SearchResultContainer;