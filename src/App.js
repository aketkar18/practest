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
    // console.log(quizData);
    setQuiz(quizData);
  };

  return (
    <div>
        <div className="header bg-dark py-4">
          <h1 className="text-white text-center display-1" style={{ fontFamily: "'Roboto', sans-serif ", fontWeight: "bold" }}>Practest</h1>
        </div>
      <div className="container-fluid px-5">
      <div style={{margin: "20px"}}>
        <p className="text-center">Enter statements from your notes in the boxes below to generate a quiz using the statements.</p>
      </div>
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
        <div className="text-center mt-3">
        <button type="submit" className="btn btn-primary mt-4" style={{ 
          backgroundColor: '#008CBA',
          borderColor: '#008CBA',
          color: '#fff',
          borderRadius: '5px',
          padding: '10px 20px',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}>
          Generate Quiz
        </button>
        </div>
      </form>
      </div>
      {quiz && (
        <div className="container mt-5 mx-auto px-3"> 
          {Object.keys(quiz).map((key) => {
            const question = quiz[key];
            return (
              <div key={key}>
                <h5>{question.question}</h5>
                <ul>
                  {question.choices.map((choice, index) => {
                    var choices = ['A', 'B', 'C', 'D','E']
                    const isCorrect = choices[index] === question.answer;
                    const className = isCorrect ? "answer-choice correct" : "answer-choice incorrect";
                    const onClick = isCorrect ? null : () => alert(question.explanation);
                    return (
                      <li key={index} className={className} onClick={onClick}>
                        {choice}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
)}

    </div>
  );
}

export default App;