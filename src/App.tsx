import './App.css'
import React, {createContext, useState} from "react";
import Quiz from "./components/Quiz.tsx";

export const questionList = [
  {
    question: '1 + 1 = ',
    options: [
      1, 2, 5, 8
    ],
    answer: 2
  },
  {
    question: '2 + 2 = ',
    options: [
      1, 4, 7, 11
    ],
    answer: 4
  },
  {
    question: '3 + 3 = ',
    options: [
      3, 4, 6, 18
    ],
    answer: 6
  }
]

export const PointContext = createContext<{
  currentQuestion: number,
  point: number,
  handleNextButton: () => void,
  increasePoint: () => void
}>({})

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [point, setPoint] = useState(0)

  console.log(point);

  function handleNextButton() {
    setCurrentQuestion(currentQuestion + 1)
  }

  function increasePoint() {
    setPoint(point + 1)
  }

  return (
    <PointContext.Provider value={{currentQuestion , handleNextButton, increasePoint, point}}>
      <Quiz  />
    </PointContext.Provider>
  )
}

export default App
