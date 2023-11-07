import React from "react";

function SearchForm(props) {
  return (
    <div>
      <div>
        <h1 className="text-center">Youtube Video Search</h1>
        <br>
        </br>
        <p className="text-center">Please use the search below for youtube tutorials and crash-courses on your desired coding language
        </p>
        <p className="text-center">e.g. React, Tailwind CSS</p>
      </div>  
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a Gif"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
          </button>
        </div>
      </form>
    </div>  
  );
}

export default SearchForm;
