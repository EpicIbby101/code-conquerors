import React from 'react'

const HeroSection = () => {
    return (
        <div heroSection>
            <div class="container mx-auto px-4 py-10 bg-black flex items-center justify-between">
                <div title className="text-left font-bold px-6 py-3 text-white rounded-md">
                    <h1>Code Conquerors</h1>
                    <h2>Learn to code from home!</h2>
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-purple-500 hover:bg-purple-600 font-medium rounded-lg text-sm px-5 py-2.5">
                        Sign-in
                    </button>
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-purple-500 hover:bg-purple-600 font-medium rounded-lg text-sm px-5 py-2.5">
                        Sign-in
                    </button>
                </div>
                <img src="" alt="Many lines of colourful code"></img>
            </div>
        </div>
    )
}

export default HeroSection