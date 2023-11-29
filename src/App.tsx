import './App.css'
import {createContext, useContext, useState} from "react";
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
  // const [family, setFamily] = useState({
  //   grandFather: '',
  //   father: '',
  //   child: ''
  // })
  //
  // console.log(family);
  // declare information
  // return (
  //   <FamilyContext.Provider value={{family, setFamily}}>
  //     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw'}}>
  //       <FormFamily saveInformation={setFamily} />
  //       <FamilyInformation />
  //     </div>
  //   </FamilyContext.Provider>
  // )
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([]) // [1, 3 ,4,7]
  console.log(`answers: ${answers}`);

  return (
    <PointContext.Provider value={{currentQuestion , setCurrentQuestion, setAnswers, answers}}>
      <Quiz  />
    </PointContext.Provider>
  )
}

export default App
