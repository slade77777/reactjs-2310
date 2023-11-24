import {useContext, useState} from "react";
import {PointContext, questionList} from "../App.tsx";

const QuestionComponent = () => {

  const pointContext = useContext(PointContext)
  const question = questionList[pointContext.currentQuestion];
  const [choice, setChoice] = useState<number>();
  console.log(pointContext);

  function submit() {
    // right choice
    if (choice === question.answer) {
      pointContext.handleNextButton?.()
      pointContext.increasePoint?.();
    } else {
      pointContext.handleNextButton?.()
    }
    setChoice(undefined);
  }

  return <div>
    <p>Question {pointContext.currentQuestion + 1} of {questionList.length}</p>
    <p>{question.question}</p>
    {
      question.options.map((option, index) => <div>
        <input key={index} type="radio" name="question" value={option} checked={option === choice}
               onChange={() => setChoice(option)}/>{option}
      </div>)
    }
    <div/>
    <button onClick={submit}>Next</button>
  </div>
}

const ResultComponent = () => {
  const pointContext = useContext(PointContext)

  return <div>You got {pointContext.point} of {questionList.length} points</div>
}


const Quiz = () => {

  const pointContext = useContext(PointContext)

  console.log(pointContext);

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
