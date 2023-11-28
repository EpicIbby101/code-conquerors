
import React from "react";


function textToSpeach(){

    <div>
        <h2 className=" text-center text-4xl md:text-4xl sm:text-4xl font-bold mb-3 text-amber-200 mt-32" >Youtube Video Search</h2>
        <p className="text-md text-center md:text-lg sm:text-lg mb-4 text-white" >
            We have a large collection of suitable programming crash courses/tutorials to help you
            get the most out of your studies as well. 
        </p>
        
    </div>
}

function SearchForm(props) {
  return (
      <div className="lg:flex lg:flex-col space-y-4 bg-black">
        <div className="bg-[url('../assets/Synth.png')] bg-no-repeat bg-cover bg-center pb-32 w-full">
            {/* Header and paragraph below at the top of the page */}
            <h2 className=" text-center text-4xl md:text-4xl sm:text-4xl font-bold mb-3 text-amber-200 mt-32" >Youtube Video Search</h2>
            <br>
            </br>
            <p className="text-md text-center md:text-lg sm:text-lg mb-4 text-white" >
                We have a large collection of suitable programming crash courses/tutorials to help you
                get the most out of your studies as well. 
            </p>
        </div> 
        {/* Form which includes input and button (has props from searchResultsContainer within) */}
        <form  className='search-form'>
            <div >
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
                    <button onClick={props.handleFormSubmit} className="bg-rose-300 hover:bg-rose-600 text-white p-2 rounded-r-full ml-1 px-6 pr-7">
                    Search
                    </button>

                </div>
                <p className="text-white text-md md:text-lg sm:text-lg mb-4 mt-10 pl-10">
                        Video Results are presented below
                    </p>  
            </div>    
        </form>     
    </div>
  )
}  

export default SearchForm;