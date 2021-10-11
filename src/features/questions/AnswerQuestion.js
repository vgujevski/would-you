import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { OPTION_ONE, OPTION_TWO } from './questionsSlice'
import { selectUserById } from '../users/usersSlice'

export const AnswerQuestion = ({ question, handleAnswerQuestion }) => {

  const [selectedAnswer, setSelectedAnswer] = useState('optionOne')
  const { name, avatarURL } = useSelector(state => selectUserById(state, question.author))

  const handleSubmit = () => {
    handleAnswerQuestion(selectedAnswer)
  }

  return (
    <div>
      <h2>{name} asks:</h2>
      <div className="row-container">
        <img className="list-item-avatar" src={avatarURL} alt="avatar" />
        <div className="column-container">
          <h3>Would you rather</h3>
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
          <button onClick={handleSubmit} className="button dark">Submit</button>
        </div>
      </div>
    </div>
  )
}

AnswerQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  handleAnswerQuestion: PropTypes.func.isRequired,
}