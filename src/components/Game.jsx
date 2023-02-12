import React from 'react'

const Game = ({ step, question, questions, onClickVariants }) => {
  const percentage = Math.round(step / questions.length * 100);

  return (
    <>
      <h2 className='counterProgress'>{step} of {questions.length}</h2>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h2>{question.title}</h2>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariants(index)} key={text} > {text} </li>
        ))}
      </ul>
    </>
  )
}

export default Game