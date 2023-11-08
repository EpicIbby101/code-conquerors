import Answer from "./answers"
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

// The Question component represents a single question in the quiz.
const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);  // Destructure the quizState and dispatch function from the QuizContext
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]; // Retrieve the current question object from the quizState based on the currentQuestionIndex
    return (
        <div>
            <div className="question">{currentQuestion.question}</div> 
            <div className="answers">
                {quizState.answers.map((answer, index) => (
                    <Answer
                        answerText={answer}
                        currentAnswer={quizState.currentAnswer}
                        correctAnswer={currentQuestion.correctAnswer}
                        key={index}
                        index={index}
                        onSelectAnswer={(answerText) =>
                            dispatch({ type: "SELECT_ANSWER", payload: answerText })
                        }
                    />
                ))}
            </div>
        </div>
    );
};
// Export the Question component for use in other parts of the application.
export default Question;