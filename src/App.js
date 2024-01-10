import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const questions = [
  {
    question: 'What is ReactJS?',
    options: ['Library', 'Framework', 'OS', 'Database'],
    correctAnswer: 'Library',
  },
  {
    question: 'Which component lifecycle method is invoked immediately after a component is inserted into the DOM?',
    options: ['componentWillMount', 'componentDidMount', 'componentWillUpdate', 'componentWillUnmount'],
    correctAnswer: 'componentDidMount',
  },
  {
    question: 'In React, what is the purpose of the setState method?',
    options: ['Fetch', 'Update', 'Initial', 'Render'],
    correctAnswer: 'Update',
  },
  {
    question: 'What is JSX in React?',
    options: ['Javascript', 'Java', 'Syntax', 'XML'],
    correctAnswer: 'XML',
  },
  {
    question: 'What does React use to increase performance by updating only the necessary components in the DOM?',
    options: ['Diffing', 'Merging', 'Filtering', 'Updating'],
    correctAnswer: 'Diffing',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="container mt-5">
      {showScore ? (
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title">Your Score: {score} / {questions.length}</h2>
            <button className="btn btn-primary" onClick={restartQuiz}>Restart Quiz</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="card text-center">
            <div className="card-header">
              <h2>Question {currentQuestion + 1}</h2>
            </div>
            <div className="card-body">
              <p className="card-text">{questions[currentQuestion].question}</p>
            </div>
          </div>
          <div className="mt-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="btn btn-outline-primary m-2"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
