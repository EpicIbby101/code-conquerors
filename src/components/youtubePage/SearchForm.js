import React from "react";


function SearchForm(props) {
  return (
    <div className="lg:flex lg:flex-col space-y-4 bg-black">
      <div>
        <h2 className=" text-center text-4xl md:text-4xl sm:text-4xl font-bold mb-3 text-amber-200 mt-32">Youtube Video Search</h2>
        <br>
        </br>
        <p className="text-md text-center md:text-lg sm:text-lg mb-4 text-white">
        We have a large collection of suitable programming crash courses/tutorials to help you
        get the most out of your studies as well. 
        </p>
      </div>  
      <form  className='search-form'>
        <div className="flex">
        
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="border p-3 py-4 pl-10 rounded-l-full w-full text-lg outline-none"
            placeholder="Search for programming books..."
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="bg-rose-300 hover-bg-purple-600 text-white p-2 rounded-r-full ml-1 px-6 pr-7">
            Search
          </button>
        </div>
      </form>
    </div>
    
    
    // 2
    // <div className="search-form">
    //   <div className='container'>
    //     <div className='search-form-content'>
    //       <form className='search-form' onSubmit={props.handleFormSubmit} >
    //         <div className='search-form-elem flex flex-sb bg-white'>
    //           <input onChange={props.handleInputChange}
    //         value={props.search}
    //         name="search"
    //         type="text"
    //         className="form-control"
    //         placeholder="Search for a Gif"
    //         id="search"></input>
    //           <button className='flex flex-c text-white bg-purple-500 font-medium rounded-lg text-sm px-5 py-2' onClick={props.handleFormSubmit}>Search</button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
        // <div>
        //     <div className="lg:flex lg:flex-col space-y-4 ">
        //             <h2 className="text-4xl md:text-4xl sm:text-4xl font-bold mb-3 text-black mt-32">
        //             Browse Our Vast Online Library of Books!
        //             </h2>
        //             <p className="text-md md:text-lg sm:text-lg mb-4 text-black">
        //             We've amassed a large collection of programming books to help you
        //             get the most out of your studies. HTML, JavaScript, Python and
        //             even React, we got it all.
        //             </p>
        //             <form className='search-form' onSubmit={props.handleFormSubmit} >
        //                 <div className="flex">
        //                     <input
        //                         type="text"
        //                         placeholder="Search for programming books..."
        //                         value={props.search}
        //                         onChange={props.handleInputChange}
        //                         className="border p-3 py-4 pl-10 rounded-l-full w-full text-lg outline-none"
        //                     />
        //                     <button
        //                         onClick={props.handleFormSubmit}
        //                         className="bg-purple-500 hover-bg-purple-600 text-white p-2 rounded-r-full ml-1 px-6 pr-7"
        //                     >
        //                         Search
        //                     </button>
        //                 </div>
        //             </form>
        //     </div>    
        // </div>
  );
}

export default SearchForm;
