import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [topics, setTopics] = useState(["", "", ""]);
  const [quiz, setQuiz] = useState(null);
  const [clicked, setClicked] = useState([false, false, false]);

  const handleChange = (event, index) => {
    const newTopics = [...topics];
    newTopics[index] = event.target.value;
    setTopics(newTopics);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topics }),
    });

    const quizData = await response.json();
    console.log(quizData);
    setQuiz(quizData);
  };
  
  return (
    <div>
        <div className="header bg-dark py-5">
          <h1 className="text-white text-center display-1" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Practest</h1>
          <h6 className="text-white text-center" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>GPT-3 Powered Practice Tests</h6>
        </div>
      <div className="container-fluid px-5">
      <div style={{margin: "20px"}}>
        <p className="text-center">Enter topics from your notes in the boxes below to generate a quiz using the topics.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="topic1">Topic 1</label>
          <input
            type="text"
            className="form-control"
            id="topic1"
            value={topics[0]}
            onChange={(event) => handleChange(event, 0)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="topic2">Topic 2</label>
          <input
            type="text"
            className="form-control"
            id="topic2"
            value={topics[1]}
            onChange={(event) => handleChange(event, 1)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="topic3">Topic 3</label>
          <input
            type="text"
            className="form-control"
            id="topic3"
            value={topics[2]}
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
                    const className = `answer-choice ${clicked[key-1] ? (isCorrect ? 'correct' : 'incorrect') : ''}`;
                    const onClick = () => {
                      setClicked(prevClicked => {
                        const newClicked = { ...prevClicked };
                        newClicked[key-1] = true;
                        return newClicked;
                      });
                      if (!isCorrect) {
                        alert(question.explanation);
                      }
                    };                    
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