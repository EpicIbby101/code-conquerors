import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../youtubePage/YoutubeAPI";

let baseURL = "https://www.youtube.com/embed/";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
      };

    }

export default SearchResultContainer;