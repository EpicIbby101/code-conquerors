//* the questions data for the quiz 
const data = [
    {
        question: "1. What does HTML stand for?",
        incorrectAnswers: [
            "b. High-level Text Management Language",
            "c. Hyperlink and Text Management Language",
        ],
        correctAnswer: "a. Hyper Text Markup Language",
    },

    {
        question: "2. Which HTML tag is used for creating a hyperlink?",
        incorrectAnswers: [
            "a. <link>",
            "c. <hyperlink>",
        ],
        correctAnswer: "b. <a>",
    },

    {
        question: "3. What is the purpose of the HTML <div> element?",
        incorrectAnswers: [
            "a. It defines a paragraph of text.",
            "c. It defines a clickable link.",
        ],
        correctAnswer: "b. It defines a division or a section in an HTML document.",
    },

    {
        question: "4. Which HTML element is used to specify the character encoding for an HTML document?",
        incorrectAnswers: ["<script>", "<headStyle>", "<css>"],
        correctAnswer: "<style>",
    },

    {
        question: "5. What is the correct HTML element for adding a line break?",
        incorrectAnswers: [
            "<break>",
            "<lb>",
        ],
        correctAnswer: "<br>",
    },

    {
        question: "6. In CSS, what property is used to change the background color of an element?",
        incorrectAnswers: [
            "a. color",
            "c. bgcolor",
        ],
        correctAnswer: "b. background-color",
    },

    {
        question: "7. What is the CSS box model used for?",
        incorrectAnswers: [
            "a. To define the structure of a webpage.",
            "c. To manage JavaScript functions.",
        ],
        correctAnswer: "b. To specify the layout and design of an element.",
    },

    {
        question: "8. Which CSS property is used to control the font size of text?",
        incorrectAnswers: ["font-size", "text-size", "size"],
        correctAnswer: "a. font-size",
    },

    {
        question: "9. How do you center an element horizontally in CSS?",
        incorrectAnswers: [
            "a. text-align: center;",
            "c. center: true;",
        ],
        correctAnswer: "b. margin-left: auto; margin-right: auto;",
    },

    {
        question: "10. What is the purpose of the CSS property 'float'?",
        incorrectAnswers: [
            "a. To make text bold.",
            "c. To add interactive buttons.",
        ],
        correctAnswer: "b. To allow text to wrap around an element.",
    },
    {
        question: "11. What is the result of 5 + '3' in JavaScript?",
        incorrectAnswers: [
            "a. 8",
            "c. 53",
        ],
        correctAnswer: "b. '53'",
    },

    {
        question: "12. What is the purpose of the JavaScript function 'parseInt()'?",
        incorrectAnswers: [
            "a. To display a pop-up dialog.",
            "c. To concatenate two strings.",
        ],
        correctAnswer: "b. To parse a string and return an integer.",
    },

    {
        question: "13. What is the scope of a variable declared with the 'var' keyword in JavaScript?",
        incorrectAnswers: [
            "a. Local",
            "c. Both global and local",
        ],
        correctAnswer: "b. Global",
    },

    {
        question: "14. Which operator is used for strict equality in JavaScript?",
        incorrectAnswers: [
            "a. ==",
            "c. =",
        ],
        correctAnswer: "b. ===",
    },

    {
        question: "15. What is the purpose of the JavaScript 'typeof' operator?",
        incorrectAnswers: [
            "a. To check if a variable is defined.",
            "c. To assign a value to a variable.",
        ],
        correctAnswer: "b. To determine the data type of a value.",
    },

    {
        question: "16. What is React?",
        incorrectAnswers: [
            "a. A server-side rendering framework.",
            "c. A database management system.",
        ],
        correctAnswer: "b. A JavaScript library for building user interfaces.",
    },

    {
        question: "17. In React, what is a component?",
        incorrectAnswers: [
            "a. A programming language.",
            "c. A network protocol.",
        ],
        correctAnswer: "b. A unit of user interface.",
    },

    {
        question: "18. What is JSX in React?",
        incorrectAnswers: [
            "a. JavaScript Extra",
            "c. JavaScript Extension",
        ],
        correctAnswer: "b. JavaScript XML",
    },

    {
        question: "19. How do you update the state of a React component?",
        incorrectAnswers: [
            "a. By directly modifying the state object.",
            "c. By using the 'render' method.",
        ],
        correctAnswer: "b. Using the 'setState' method.",
    },

    {
        question: "20. What is React Router used for?",
        incorrectAnswers: [
            "a. To fetch data from APIs.",
            "c. To create forms in React.",
        ],
        correctAnswer: "b. To manage navigation and routing in a React application.",
    },

];

export default data;

