// The Answer component represents a single answer option in a quiz question.
// It receives props such as answerText, index, onSelectAnswer, currentAnswer, and correctAnswer.
const Answer = ({
    answerText,        // The text of the answer option
    index,             // The index of the answer option
    onSelectAnswer,    // A function to be called when the answer is selected
    currentAnswer,     // The currently selected answer
    correctAnswer,     // The correct answer for the question
}) => {
    // An array mapping index to letter (e.g., 0 to A, 1 to B, etc.)
    const letterMapping = ["A", "B", "C", "D"];

    // Check if the current answer is correct
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;

    // Check if the current answer is wrong
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;

    // Add classes based on correctness and selection status
    const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
    const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
    const disabledClass = currentAnswer ? "disabled-answer" : "";

    // The Answer component renders a clickable div representing the answer option.
    // It applies the appropriate classes for styling based on correctness and selection status.
    return (
        <div
            className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
            onClick={() => onSelectAnswer(answerText)} // Calls the onSelectAnswer function when clicked
        >
            {/* Display the letter associated with the answer option (e.g., A, B, etc.) */}
            <div className="answer-letter">{letterMapping[index]}</div>

            {/* Display the text of the answer option */}
            <div className="answer-text">{answerText}</div>
        </div>
    );
};

// Export the Answer component for use in other parts of the application.
export default Answer;
