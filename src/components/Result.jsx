import React from 'react'

import logoSvg from '../assets/onePiece.svg';


const Result = ({ correct, questions }) => {

  return (
    <div className="result">

      <img src={logoSvg} alt="One Piece" />
      <h2>You guessed {correct} answers out {questions.length}</h2>
      <a href='/'>
        <button>Start again</button>
      </a>
    </div>
  )
}

export default Result