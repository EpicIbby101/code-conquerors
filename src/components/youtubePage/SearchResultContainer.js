import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../youtubePage/YoutubeAPI";

let baseURL = "https://www.youtube.com/embed/";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
      };

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

    }

export default SearchResultContainer;