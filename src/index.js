import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tailwind.css';
import "./index.css";
import Quiz from "./components/quiz"
import { QuizProvider } from "./contexts/quiz";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>
);

