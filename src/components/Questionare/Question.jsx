import React, { useState } from "react";
import { QuestionData } from "../../Data/Question";
import styles from "./Question.module.css";

const Questionnaire = ({ disorder }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const questions = QuestionData[disorder];

  const handleOptionClick = (optionScore) => {
    setScore((prevScore) => prevScore + optionScore);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <div className={styles.container}>
      {isCompleted ? (
        <div className={styles.result}>
          <h2>Your Total Score: {score}</h2>
          <p>Thank you for completing the questionnaire!</p>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setScore(0);
              setIsCompleted(false);
            }}
            className={styles.restartButton}
          >
            Restart
          </button>
        </div>
      ) : (
        <>
          <h2 className={styles.question}>
            {questions[currentQuestionIndex].question}
          </h2>
          <div className={styles.options}>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option.score)}
                className={styles.optionButton}
              >
                {option.answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Questionnaire;
