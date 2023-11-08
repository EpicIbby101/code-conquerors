// Export a function named shuffleAnswers
export const shuffleAnswers = (question) => {
    // Check if the question object is falsy (null or undefined)
    if (!question) {
        // If the question is falsy, return an empty array
        return [];
    }

    // Create an array of answers by combining the correct answer and incorrect answers
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers,
    ];

    // Use the shuffle algorithm to randomize the order of answers
    const shuffledAnswers = unshuffledAnswers
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

    // Return the shuffled array of answers
    return shuffledAnswers;
};
