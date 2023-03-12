import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [statements, setStatements] = useState(["", "", ""]);
  const [quiz, setQuiz] = useState(null);

  const handleChange = (event, index) => {
    const newStatements = [...statements];
    newStatements[index] = event.target.value;
    setStatements(newStatements);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("https://practest.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ statements }),
    });

    const quizData = await response.json();
    console.log(quizData);
    setQuiz(quizData);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="statement1">Statement 1</label>
          <input
            type="text"
            className="form-control"
            id="statement1"
            value={statements[0]}
            onChange={(event) => handleChange(event, 0)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="statement2">Statement 2</label>
          <input
            type="text"
            className="form-control"
            id="statement2"
            value={statements[1]}
            onChange={(event) => handleChange(event, 1)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="statement3">Statement 3</label>
          <input
            type="text"
            className="form-control"
            id="statement3"
            value={statements[2]}
            onChange={(event) => handleChange(event, 2)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Generate Quiz
        </button>
      </form>
      {quiz && (
        <div className="mt-5">
          {Object.keys(quiz).map((key) => {
            const question = quiz[key];
            return (
              <div key={key}>
                <h5>{question.question}</h5>
                <ul>
                  {question.choices.map((choice, index) => (
                    <li key={index}>{choice}</li>
                  ))}
                </ul>
                <p>Answer: {question.answer}</p>
                <p>{question.explanation}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
