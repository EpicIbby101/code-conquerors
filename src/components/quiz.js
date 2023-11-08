import { useContext } from "react";
import Question from "./questions";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
