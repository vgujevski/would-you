import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { OPTION_ONE, OPTION_TWO } from './questionsSlice'

export const AnswerQuestion = ({ author, avatarURL, question, handleAnswerQuestion }) => {

  const [selectedAnswer, setSelectedAnswer] = useState('optionOne')

  const handleSubmit = () => {
    handleAnswerQuestion(selectedAnswer)
  }

  return (
    <div>
      <h3>{author} asks:</h3>
      <div className="row-container">
        <img className="list-item-avatar" src={avatarURL} alt="avatar" />
        <div className="column-container">
          <p>Would you rather</p>
          <label>
            <input
              type="radio"
              value={OPTION_ONE}
              checked={selectedAnswer === OPTION_ONE}
              onChange={() => setSelectedAnswer(OPTION_ONE)} />
            <span>{question.optionOne.text}</span>
          </label>

          <label>
            <input
              type="radio"
              value={OPTION_TWO}
              checked={selectedAnswer === OPTION_TWO}
              onChange={() => setSelectedAnswer(OPTION_TWO)} />
            <span>{question.optionTwo.text}</span>
          </label>
          <button onClick={handleSubmit} className="button">Submit</button>
        </div>
      </div>
    </div>
  )
}

AnswerQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  handleAnswerQuestion: PropTypes.func.isRequired,
}