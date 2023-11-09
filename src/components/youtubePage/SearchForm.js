import React from "react";
import videologo from "../../assets/videologo.png";

function SearchForm(props) {
  return (
    <div className="lg:flex lg:flex-col space-y-4 bg-neutral-800" id="videos">
      <div className="bg-[url('../assets/videobg.png')] bg-no-repeat bg-cover bg-center pb-10 w-full">
        <div className="lg:w-1/2 md:w-full sm:w-full mx-auto text-center ">
          <img
            src={videologo}
            alt="Library"
            className="mb-4 mt-10 w-40 max-w-md mx-auto"
          />

          {/* Header and paragraph below at the top of the page */}
          <h2 className=" text-center text-4xl md:text-4xl sm:text-4xl font-bold mb-0 text-amber-200 mt-0">
            Learn Through Videos
          </h2>
          <br></br>
          <p className="text-md text-center md:text-lg sm:text-lg mb-4 text-white">
            We also have a large collection of suitable programming crash
            courses and tutorials in case you're more of a visual learner.
          </p>
        </div>
        {/* Form which includes input and button (has props from searchResultsContainer within) */}
        <form className="search-form">
          <div className="lg:w-1/2 md:w-full sm:w-full mx-auto text-center ">
            <div className="flex">
              <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="border p-3 py-4 pl-10 rounded-l-full w-full text-lg outline-none"
                placeholder="e.g. React, jQuery..."
                id="search"
              />
              <button
                onClick={props.handleFormSubmit}
                className="bg-rose-300 hover:bg-rose-600 text-white p-2 rounded-r-full ml-1 px-6 pr-7"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
