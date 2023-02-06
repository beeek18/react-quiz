import React from 'react';
import './index.scss';
import questions from './Questions'

import logoSvg from './assets/onePiece.svg';




function Result({ correct }) {
  return (
    <div className="result">
      <img src={logoSvg} alt="One Piece" />
      <h2>You guessed {correct} answers out {questions.length}</h2>
      <a href='/'>
        <button>Start again</button>
      </a>
    </div>
  );
}

function Game({ question, onClickVariants, step }) {
  const percentage = Math.round(step / questions.length * 100);

  return (
    <>
      <h2 className='counterProgress'>{step} of {questions.length}</h2>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h2>{question.title}</h2>
      <ul>
        {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariants(index)} key={text} > {text}</li>
          ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const question = questions[step]

  const onClickVariants = (index) => {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (

    <div className="App">
      {
        step !== questions.length ? (<Game step={step} question={question} onClickVariants={onClickVariants} />) : (<Result correct={correct} />)
      }
    </div>
  );
}

export default App;
