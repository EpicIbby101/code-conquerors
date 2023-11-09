import React from "react";
import heroImage from "../images/heroImage.jpg";
import ccLogo from "../assets/cclogo.png";

const HeroSection = () => {
  return (
    <div className="heroSection" id="heroSection">
      <div className="bg-[url('../assets/headerbg.png')] bg-no-repeat bg-cover bg-center pb-36 w-full">
        <div className="container mx-auto px-4 pt-40 sm:pt-30 flex flex-col-reverse sm:flex-row items-center justify-between">
          <div className="text-center sm:text-left font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rose-300 px-4 sm:px-10 py-10 sm:py-0 rounded-md">
            <div className="mt-0 sm:mt-0">
              <img
                className="w-1/4 mb-3"
                src={ccLogo}
                alt="Many lines of colorful code"
              ></img>
            </div>
            <h1>Code Conquerors</h1>
            <div className="text-center sm:text-left font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-rose-200 py-6 sm:py-6 rounded-md mb-2">
              <h2>Learn to code from home!</h2>
            </div>

            <button
              type="button"
              className="focus:outline-none text-black bg-gradient-to-r from-amber-200 to-rose-300 shadow-lg shadow-neutral-900 font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-2.5 my-2 sm:my-0 sm:mx-0 hover:from-amber-300 hover:to-rose-400 hover:scale-95 transition-all duration-200"
            >
              Search for books
            </button>

            <button
              type="button"
              className="focus:outline-none text-black bg-gradient-to-r from-rose-300 to-amber-200 shadow-lg shadow-neutral-900 font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-2.5 mx-2.5 hover:from-amber-300 hover:to-rose-400 hover:scale-95 transition-all duration-200"
            >
              Search for videos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
