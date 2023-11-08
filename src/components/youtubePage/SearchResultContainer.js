import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../youtubePage/YoutubeAPI";

let baseURL = "https://www.youtube.com/embed/";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
      };
    
      // When this component mounts, search
      // componentDidMount() {
      //   this.searchGiphy("");
      // }
    
      searchVideo = query => {
        API.search(query)
          .then(res => this.setState({ results: res.data.items }))
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };
    
      // When the form is submitted, search the Giphy API for `this.state.search`
      handleFormSubmit = event => {
        event.preventDefault()
        this.searchVideo(this.state.search);
        console.log(this.state.results)
        // this.fetchVideoIds()
      };
    

    render() {
        return (
            <div className="bg-black">
                <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                
                <div className="container pb-60 bg-black">
                    <div className="row row-cols-2 bg-black flex flex-wrap">
                        {this.state.results.map(result => ( 
                
                        <div key={result.id} className="col p-4 ml-10 mt-10 flex">
                            {/*                                                               v Problem FIXXEDDDD */}
                            <iframe title="myFrame" width="560" height="315" src={baseURL + result.id.videoId} frameBorder="0" allowFullScreen></iframe>
                        </div>
                  
                    
                  
                
                        ))}
                    </div>
                </div>
            </div> 
            
            
        
        )
    }
}

// class SearchResultContainer extends Component {
//     render(){
//         return(<p>hello, world</p>);
//     }
// }

export default SearchResultContainer;