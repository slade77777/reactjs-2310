import {useContext, useState} from "react";
import {PointContext, questionList} from "../App.tsx";

const QuestionComponent = () => {

  const pointContext = useContext(PointContext)
  const question = questionList[pointContext.currentQuestion];
  const [choice, setChoice] = useState<number>();
  const listChoice = pointContext.answers;
  const choosingAnswer = choice || listChoice[pointContext.currentQuestion];

  function submit() {
    // [1,5]
    // -> [1, 5, 6]
    pointContext.setAnswers((prevState: number[]) => {
      const newAnswers = [...prevState];
      newAnswers[pointContext.currentQuestion] = choosingAnswer;
      return newAnswers
    });
    // right choice
    if (choice === question.answer) {
      pointContext.setCurrentQuestion((prevState: number) => prevState + 1)
    } else {
      pointContext.setCurrentQuestion((prevState: number) => prevState + 1)
    }
    setChoice(undefined);
  }

  function backQuestion() {
    pointContext.setCurrentQuestion((prevState: number) => prevState - 1)
  }

  return <div>
    <p>Question {pointContext.currentQuestion + 1} of {questionList.length}</p>
    <p>{question.question}</p>
    {
      question.options.map((option, index) => <div>
        <input key={index} type="radio" name="question" value={option} checked={option === choosingAnswer}
               onChange={() => setChoice(option)}/>{option}
      </div>)
    }
    <div/>
    <button onClick={backQuestion}>Back</button>
    <button onClick={submit}>Next</button>
  </div>
}

const ResultComponent = () => {
  const pointContext = useContext(PointContext)
  console.log(pointContext.answers);
  let point = 0;
  pointContext.answers.forEach((answer: number, index: number) => {
    if (answer === questionList[index].answer) {
      point++
    }
  })
  return <div>You got {point} of {questionList.length} points</div>
}


const Quiz = () => {

  const pointContext = useContext(PointContext)

  return <div style={{
    backgroundColor: 'black',
    width: '100vw',
    height: '100vh',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    {
      pointContext?.currentQuestion > questionList.length - 1 ? <ResultComponent /> :
        <QuestionComponent />
    }
  </div>
}

export default Quiz;
