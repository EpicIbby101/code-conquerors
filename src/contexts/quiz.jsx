import React, { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helpers";

// Define the initial state for the quiz
const initialState = {
    questions,
    currentQuestionIndex: 0,
    currentAnswer: "",
    answers: shuffleAnswers(questions[0]),
    showResults: false,
    correctAnswersCount: 0,
};

// Define a reducer function to handle state updates based on actions
const reducer = (state, action) => {
    switch (action.type) {
        case "SELECT_ANSWER": {
            const correctAnswersCount =
                action.payload ===
                    state.questions[state.currentQuestionIndex].correctAnswer
                    ? state.correctAnswersCount + 1
                    : state.correctAnswersCount;
            return {
                ...state,
                currentAnswer: action.payload,
                correctAnswersCount,
            };
        }
        case "NEXT_QUESTION": {
            // Check if the current question is the last question to determine if results should be shown
            const showResults =
                state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults
                ? state.currentQuestionIndex
                : state.currentQuestionIndex + 1;
            const answers = showResults
                ? []
                : shuffleAnswers(state.questions[currentQuestionIndex]);
            // Return updated state with the next question, cleared currentAnswer, and shuffled answers
            return {
                ...state,
                currentAnswer: "",
                showResults,
                currentQuestionIndex,
                answers,
            };
        }
        case "RESTART": {
            return initialState;
        }
        default:
            return state;
    }
};
export const QuizContext = createContext();
// Create a provider component to wrap the application and provide the quiz state to components
export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    // Provide the quiz state to the context for use in other components
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
