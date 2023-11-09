import { useContext } from "react";
import Question from "./questions";
import { QuizContext } from "../contexts/quiz";
import brainlogo from "../assets/brainlogo.png";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="bg-[url('../assets/quizgb.png')] bg-no-repeat bg-cover bg-center pb-10 w-full" id="quiz">
    <div className="quiz p-4 sm:p-8 md:p-12 lg:p-16">
      <img
        src={brainlogo}
        alt="Library"
        className="mb-4 mt-0 w-1/5 max-w-md mx-auto"
      />
      <div className="text-4xl font-bold text-white text-center mb-5">
        Test Your Knowledge With This Quiz
      </div>
      {quizState.showResults ? (
        <div className="results p-4 sm:p-8 md:p-12 lg:p-16">
          <div className="congratulations text-3xl sm:text-4xl text-rose-500 font-bold mb-4">
            Congratulations!
          </div>
          <div className="results-info text-lg sm:text-xl">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} out of{" "}
              {quizState.questions.length} right.
            </div>
          </div>
          <button
            onClick={() => dispatch({ type: "RESTART" })}
            className="next-button mt-4 sm:mt-8 bg-rose-500 text-white font-semibold py-2 px-4 rounded hover:bg-rose-600 focus:outline-none"
          >
            Restart
          </button>
        </div>
      ) : (
        <div>
          <div className="score text-xl sm:text-2xl font-semibold text-white">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {quizState.currentAnswer && (
            <button
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              className="next-button mt-4 sm:mt-3 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Next question
            </button>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default Quiz;
