import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import LoadingScreen from "./LoadingScreen";
import Quiz from "./Quiz";
import Header from "./Header";
import axios from "axios";


function App() {
  const [topics, setTopics] = useState(["", "", ""]);
  const [quiz, setQuiz] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState([false, false, false]);

  useEffect(() => {
    axios.get('https://practest-server.herokuapp.com/')
      .then(res => {
        console.log('Server awoke successfully');
      })
      .catch(err => {
        console.log('Error waking up server: ', err);
      });
  }, []);

  const handleChange = (event, index) => {
    const newTopics = [...topics];
    newTopics[index] = event.target.value;
    setTopics(newTopics);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    let apiUrl = "https://practest-server.herokuapp.com/quiz";
    apiUrl = "http://localhost:8000/quiz";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topics }),
    });

    const quizData = await response.json();
    if (quizData.error) {
      alert("There was a server side error in generating the quiz. Please try again.");
      setIsLoading(false);
      return;
    }
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
      <Header />
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
