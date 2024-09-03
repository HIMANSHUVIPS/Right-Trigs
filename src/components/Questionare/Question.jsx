import React, { useState } from "react";
import { QuestionData } from "../../Data/Question";
import styles from "./Question.module.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Questionnaire = ({ disorder }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const questions = QuestionData[disorder];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleOptionClick = (optionScore) => {
    setScore((prevScore) => prevScore + optionScore);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const getRiskLevel = () => {
    if (score <= 10) {
      return "Low Risk";
    } else if (score <= 20) {
      return "Moderate Risk";
    } else {
      return "High Risk";
    }
  };

  return (
    <div className={styles.container}>
      {isCompleted ? (
        <div className={styles.result}>
          <h2>{disorder} Test Result</h2>
          <p>Your Total Score: <span className={styles.score}>{score}</span></p>
          <p className={styles.riskLevel}>Risk Level: <span>{getRiskLevel()}</span></p>
          <p>Thank you for completing the test<span>!</span></p>
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
          <div className={styles.navigation}>
            {currentQuestionIndex > 0 && (
              <FontAwesomeIcon icon={faArrowLeft} 
              className={styles.prevArrow}
              onClick={handlePreviousClick}/>
            )}
            <div className={styles.progress}>
              <CircularProgressbar value={progressPercentage} text={`${currentQuestionIndex + 1}`} />
            </div>
          </div>
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
