import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuizPage = () => {
    // This component provides a basic, placeholder quiz interface. It manages
    // the current question, selected answer, and score.
    const quizData = [
        {
            question: "Question 1 placeholder text?",
            options: ["Answer A placeholder", "Answer B placeholder", "Answer C placeholder", "Answer D placeholder"],
            correct: 0,
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    const currentQuestion = quizData[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;

    const handleAnswerSelect = (index) => {
        setSelectedAnswer(index);
    };

    const handleSubmit = () => {
        if (selectedAnswer === null) return;

        if (selectedAnswer === currentQuestion.correct) {
            setScore(score + 1);
        }

        setSelectedAnswer(null);
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`Quiz finished! Your score: ${score + (selectedAnswer === currentQuestion.correct ? 1 : 0)} / ${quizData.length}`);
        }
    };

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <h2>GachaLearn Quiz</h2>
                <div>
                    <Link to="/" className="back-button">&larr; Back to Home</Link>
                </div>
            </div>
            <div className="quiz-body">
                <div className="question-container">
                    <p className="question-counter">Question {currentQuestionIndex + 1} of {quizData.length}</p>
                    <p className="question-text">{currentQuestion.question}</p>
                </div>
                <div className="answer-options">
                    {currentQuestion.options.map((option, index) => (
                        <div 
                            key={index}
                            className={`answer-option ${selectedAnswer === index ? 'active' : ''}`}
                            onClick={() => handleAnswerSelect(index)}
                        >
                            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                            <span className="option-letter-desc">{option}</span>
                        </div>
                    ))}
                </div>
                <button className="submit-button" onClick={handleSubmit}>Submit Answer</button>
            </div>
            <div className="quiz-footer">
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="score">Score: {score} / {quizData.length}</p>
            </div>
        </div>
    );
};

export default QuizPage;