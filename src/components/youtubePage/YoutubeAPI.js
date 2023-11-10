import axios from "axios";

// BASEURL for the api to get data with added tags for the most ideal youtube videos displayed (orderViewCount, Maxresults, videoDuration)
// APIKEY > includes added words to the q= and api key after

const BASEURL = "https://youtube.googleapis.com/youtube/v3/search?maxResults=9&order=viewCount&videoDefinition=high&type=video&videoDuration=medium&part=snippet&q=";
const APIKEY = `%20crash%20course%20coding&key=AIzaSyBNnaKYGPDH70xUq3QNi_JqgqgjjIOnvKE`; // Need to figure out how to call this from .env
// "%20crash%20course%20coding&key=AIzaSyBNnaKYGPDH70xUq3QNi_JqgqgjjIOnvKE";

// Function to fetch the data from the API 
export default {

  search: function(query) {
    return axios.get(BASEURL + query + APIKEY
      , console.log(BASEURL + query + APIKEY)
      );
    
  }
};