import React, { useState } from "react";

function Quiz({ quiz, onAnswer, clicked }) {
  const [explanations, setExplanations] = useState(Array(quiz.length).fill(null));
  const [correct, setCorrect] = useState(Array(quiz.length).fill(null));

  const handleAnswerClick = (key, explanation, isCorrect) => {
    const newExplanations = [...explanations];
    newExplanations[key - 1] = explanation;
    setExplanations(newExplanations);

    const newCorrect = [...correct];
    newCorrect[key - 1] = isCorrect;
    setCorrect(newCorrect);

    onAnswer(key);
  };

  return (
    <div className="container mt-5 mx-auto px-3">
      <h3 className="text-center">Quiz</h3>
      <p className="text-center">
        Note: Any mistakes in the questions or answers are due to the GPT response.
      </p>
      {Object.keys(quiz).map((key) => {
        const question = quiz[key];
        return (
          <div key={key}>
            <h5>{question.question}</h5>
            <ul>
              {question.choices.map((choice, index) => {
                var choices = ["a", "b", "c", "d", "e"];
                const isCorrect = choices[index] === question.answer.toLowerCase();
                const className = `answer-choice ${clicked[key - 1] ? (isCorrect ? "correct" : "incorrect") : ""
                  }`;
                return (
                  <li
                    key={index}
                    className={className}
                    onClick={() => handleAnswerClick(key, question.explanation, isCorrect)}
                  >
                    {choice}
                  </li>
                );
              })}
            </ul>
            {explanations[key - 1] && (
              <p className={`explanation ${correct[key - 1] ? 'text-correct' : 'text-incorrect'}`}>
                {explanations[key - 1].explanation}{explanations[key - 1]}
              </p>
            )}
          </div>
        );
      })}
      <div className="text-center mt-3">
        <button
          onClick={() => window.location.reload()}
          style={{
            backgroundColor: "#008CBA",
            borderColor: "#008CBA",
            color: "#fff",
            borderRadius: "5px",
            padding: "10px 20px",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          New Quiz
        </button>
      </div>
    </div>
  );
}

export default Quiz;
