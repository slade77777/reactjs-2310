import './App.css'
import {createContext, useContext, useEffect, useState} from "react";
import Quiz from "./components/Quiz.tsx";

export const PointContext = createContext<any>({})
export const questionList = [
  {
    question: '1 + 1 = ',
    options: [
      1 , 2 , 5, 8
    ],
    answer: 2
  },
  {
    question: '2 + 2 = ',
    options: [
      1 , 2 , 4, 8
    ],
    answer: 4
  },
  {
    question: '3 + 3 = ',
    options: [
      1 , 2 , 6, 8
    ],
    answer: 6
  },
  {
    question: '3 + 1 = ',
    options: [
      1 , 4 , 6, 8
    ],
    answer: 4
  },
  {
    question: '3 + 5 = ',
    options: [
      1 , 2 , 6, 8
    ],
    answer: 8
  }
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([]) // [1, 3 ,4,7]
  const [timeLeft, setTimeLeft] = useState(60);
  const [messages, setMessages] = useState<Array<{
    content: string,
    owner: string
  }>>([])

  //mounting
  useEffect(() => {
    //do anything
    const timeInterval = setInterval(() => {
      setTimeLeft(prevState => prevState - 1)
    }, 1000)

    return () => {
      clearInterval(timeInterval);
    }
  }, [])

  //updating
  // useEffect(() => {
  //   alert(`this is question ${currentQuestion}`)
  // }, [currentQuestion])

  return (
    <PointContext.Provider value={{currentQuestion , setCurrentQuestion, setAnswers, answers, timeLeft}}>
      <Quiz  />
    </PointContext.Provider>
  )
}

export default App
