import React from 'react'
import heroImage from "../images/heroImage.jpg"

function textToSpeech(){
    const text = `Code Conqueror
    Learn to code from home! `
    const value = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(value)

    
}

const HeroSection = () => {
    return (
        <div heroSection>
            <div class="container mx-auto px-4 py-10 bg-neutral-800 flex items-center justify-between">
                <div className="text-left font-bold text-xl px-20 py-40 text-rose-300 rounded-md">
                <button className="bg-rose-300 hover:bg-rose-600 text-white text-sm font-normal rounded-full p-2 pl-3 ml-1 pr-7 " onClick={textToSpeech}>Text to Speech 📢</button>
                    <h1>Code Conquerors</h1>

                    <div className="text-left font-bold text-5xl py-10 text-white rounded-md">
                        <h2>Learn to code from home!</h2>
                    </div>

                    <button
                        type="button"
                        className="focus:outline-none text-black bg-gradient-to-r from-amber-200 to-rose-300 shadow-lg shadow-neutral-900 font-medium rounded-lg text-sm px-5 py-2.5">
                        Search for books
                    </button>

                    <button
                        type="button"
                        className="focus:outline-none text-black bg-gradient-to-r from-rose-300 to-amber-200 shadow-lg shadow-neutral-900 font-medium rounded-lg text-sm px-5 py-2.5 mx-2.5">
                        Search for videos
                    </button>
                </div>
                <div>
                    <img class="rounded-lg shadow-lg shadow-neutral-900 mr-20" src={heroImage} alt="Many lines of colourful code" ></img>
                </div>
            </div>
        </div>
    )
}

export default HeroSection