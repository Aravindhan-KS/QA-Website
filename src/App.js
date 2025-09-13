import React, { useState } from 'react';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces, particularly web applications.",
      author: "John Doe",
      timestamp: "2025-09-13"
    },
    {
      id: 2,
      question: "How do you create a component in React?",
      answer: "You can create a component by writing a function that returns JSX or by extending React.Component class.",
      author: "Jane Smith",
      timestamp: "2025-09-13"
    }
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [showForm, setShowForm] = useState(false);

  const addQuestion = (e) => {
    e.preventDefault();
    if (newQuestion.trim() && newAnswer.trim()) {
      const question = {
        id: questions.length + 1,
        question: newQuestion,
        answer: newAnswer,
        author: "Anonymous User",
        timestamp: new Date().toISOString().split('T')[0]
      };
      setQuestions([...questions, question]);
      setNewQuestion('');
      setNewAnswer('');
      setShowForm(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🤔 QA Website</h1>
        <p>Your Questions and Answers Platform</p>
      </header>

      <main className="App-main">
        <div className="container">
          <div className="add-question-section">
            <button 
              className="add-question-btn"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancel' : 'Add New Question'}
            </button>

            {showForm && (
              <form onSubmit={addQuestion} className="question-form">
                <div className="form-group">
                  <label htmlFor="question">Question:</label>
                  <input
                    id="question"
                    type="text"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Enter your question..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="answer">Answer:</label>
                  <textarea
                    id="answer"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Enter the answer..."
                    rows="4"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">Submit Q&A</button>
              </form>
            )}
          </div>

          <div className="questions-section">
            <h2>Questions & Answers ({questions.length})</h2>
            <div className="questions-list">
              {questions.map((qa) => (
                <div key={qa.id} className="question-card">
                  <div className="question-header">
                    <h3>Q: {qa.question}</h3>
                    <span className="question-meta">
                      By {qa.author} on {qa.timestamp}
                    </span>
                  </div>
                  <div className="answer">
                    <strong>A:</strong> {qa.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 QA Website. Built with React ⚛️</p>
      </footer>
    </div>
  );
}

export default App;