import React from "react";

type QuizResultProps = {
  questions: any[];
  userInput: (string | string[])[];
  result: {
    correctPoints: number;
    totalPoints: number;
  };
};

const QuizResult: React.FC<QuizResultProps> = ({ questions, userInput, result }) => {
  return (
    <div>
      <h2>Rezumat Test</h2>
      <p>Scor: {result.correctPoints} / {questions.length}</p>
      <ul>
        {questions.map((q, idx) => {
          let userAnswer: string;
          if (Array.isArray(userInput[idx])) {
            userAnswer = (userInput[idx] as string[]).join(", ");
          } else {
            userAnswer = userInput[idx] as string;
          }
          return (
            <li key={q.id} style={{ marginBottom: 16 }}>
              <strong>{q.question}</strong>
              <br />
              <span>
                Răspunsul tău:{" "}
                <b style={{ color: userInput[idx] === q.correctAnswer ? "green" : "red" }}>
                  {userAnswer}
                </b>
              </span>
              <br />
              <span>
                Răspuns corect:{" "}
                <b>
                  {Array.isArray(q.correctAnswer)
                    ? (q.correctAnswer as string[]).join(", ")
                    : (q.correctAnswer as string)}
                </b>
              </span>
              <br />
              <span>
                {userInput[idx] === q.correctAnswer
                  ? q.messageForCorrectAnswer
                  : q.messageForIncorrectAnswer}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizResult;