import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import LoadingScreen from "./LoadingScreen";
import Quiz from "./Quiz";

function App() {
  const [topics, setTopics] = useState(["", "", ""]);
  const [quiz, setQuiz] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState([false, false, false]);

  const handleChange = (event, index) => {
    const newTopics = [...topics];
    newTopics[index] = event.target.value;
    setTopics(newTopics);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    let apiUrl = "https://practest-server.herokuapp.com/quiz";

    if (process.env.NODE_ENV === "development") {
      apiUrl = "http://localhost:8000/quiz";
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topics }),
    });

    const quizData = await response.json();
    setQuiz(quizData);
    setIsLoading(false);
  };

  const handleAnswer = (questionIndex) => {
    setClicked((prevClicked) => {
      const newClicked = { ...prevClicked };
      newClicked[questionIndex - 1] = true;
      return newClicked;
    });
  };

  return (
    <div>
      <div className="header bg-dark py-5">
        <h1
          className="text-white text-center display-1"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
          }}
        >
          Practest
        </h1>
        <h6
          className="text-white text-center"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
          }}
        >
          ChatGPT Powered Practice Tests
        </h6>
      </div>
      <div className="container-fluid px-5">
        {isLoading && <LoadingScreen />}
        {!isLoading && !quiz && (
          <Form topics={topics} onSubmit={handleSubmit} onChange={handleChange} />
        )}
        {!isLoading && quiz && (
          <Quiz quiz={quiz} onAnswer={handleAnswer} clicked={clicked} />
        )}
      </div>
    </div>
  );
}

export default App;
