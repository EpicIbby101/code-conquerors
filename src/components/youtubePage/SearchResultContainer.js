import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../youtubePage/YoutubeAPI";

let baseURL = "https://www.youtube.com/embed/";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    hasSearched: false,
    isLoading: false,
  };

  searchVideo = (query) => {
    this.setState({ isLoading: true });
    API.search(query)
      .then((res) => this.setState({ results: res.data.items, hasSearched: true, isLoading: false }))
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchVideo(this.state.search);
    console.log(this.state.results);
  };

  render() {
    const { search, results, hasSearched, isLoading } = this.state;

    return (
      <div className="bg-neutral-800">
        <SearchForm
          search={search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />

        <div className="container pb-0 bg-neutral-800">
          {hasSearched && (
            <>
              {isLoading && <p className="text-white text-center mt-4">Loading...</p>}
              {!isLoading && results.length > 0 ? (
                <>
                  <p className="text-white text-lg text-center mt-4">
                    Your search results for <span className="font-semibold">{search}</span>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {results.map((result) => (
                      <div key={result.id} className="flex justify-center">
                        <iframe
                          title="myFrame"
                          width="560"
                          height="350"
                          src={baseURL + result.id.videoId}
                          frameBorder="0"
                          allowFullScreen
                          className="mb-4"
                        ></iframe>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {!isLoading && (
                    <p className="text-white text-center mt-4">
                      No search results found for "{search}"
                    </p>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default SearchResultContainer;
