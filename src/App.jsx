import React from 'react';

import axios from 'axios';

import './index.scss';

import Game from './components/Game';
import Result from './components/Result';


function App() {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)

  const [questions, setQuestions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true)
    axios
      .get('https://63e08d9159bb472a742402db.mockapi.io/quiz')
      .then(({ data }) => {
        setQuestions(data)
      })
      .catch((err) => {
        console.log(err)
        alert('ERROR TO GET QUESTIONS')
      })
      .finally(setIsLoading(false))
  }, [])

  const question = questions[step]

  const onClickVariants = (index) => {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {step !== questions.length ?
        <Game
          step={step}
          questions={questions}
          question={question}
          onClickVariants={onClickVariants}
          isLoading={isLoading}
        />
        :
        <Result
          correct={correct}
          questions={questions}
        />
      }
    </div>
  );
}

export default App;