import React from 'react'

const HeroSection = () => {
    return (
        <div heroSection>
            <div class="container mx-auto px-4 py-10 bg-black flex items-center justify-between">
                <div className="text-left font-bold text-xl px-20 py-40 text-rose-300 rounded-md">
                    <h1>Code Conquerors</h1>

                    <div className="text-left font-bold text-5xl py-10 text-white rounded-md">
                        <h2>Learn to code from home!</h2>
                    </div>

                    <button
                        type="button"
                        className="focus:outline-none text-black bg-rose-300 hover:bg-purple-600 font-medium rounded-lg text-sm px-5 py-2.5">
                        Search for books
                    </button>

                    <button
                        type="button"
                        className="focus:outline-none text-black bg-amber-200 hover:bg-purple-600 font-medium rounded-lg text-sm px-5 py-2.5 mx-2.5">
                        Search for videos
                    </button>
                </div>
                <div className="">
                    <img src="/images/bgimage.jpg" alt="Many lines of colourful code"></img>
                </div>
            </div>
        </div>
    )
}

export default HeroSection