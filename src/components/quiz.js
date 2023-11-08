import { useContext } from "react";
import Question from "./questions";
import { QuizContext } from "../contexts/quiz";

// The Quiz component is the main component that manages the quiz state and renders the quiz interface.
const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    // The Quiz component renders different sections based on whether the quiz has ended or not.
    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations!</div>
                    <div className="results-info">
                        <div>You have completed the quiz.</div>
                        <div>
                            You've got {quizState.correctAnswersCount} of &nbsp;
                            {quizState.questions.length} right.
                        </div>
                    </div>
                    <div
                        onClick={() => dispatch({ type: "RESTART" })} // restarts the quiz 
                        className="next-button"
                    >
                        Restart
                    </div>
                </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className="score">
                        Question {quizState.currentQuestionIndex + 1}/
                        {quizState.questions.length}
                    </div>
                    <Question />
                    {quizState.currentAnswer && (
                        <div
                            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                            className="next-button"
                        >
                            Next question
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
// Export the Quiz component for use in other parts of the application.
export default Quiz;