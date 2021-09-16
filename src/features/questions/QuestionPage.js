import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { Navbar } from '../nav/Navbar'
import { selectUserById } from '../users/usersSlice'
import { selectQuestionById } from './questionsSlice'
import { answerQuestion } from './questionsSlice'
import { selectAuthedUser } from '../auth/authSlice'

export const QuestionPage = () => {

  const [selectedAnswer, setSelectedAnswer] = useState('optionOne')
  const authedUser = useSelector(selectAuthedUser)
  const dispatch = useDispatch()
  const { id } = useParams()
  const question = useSelector(state => selectQuestionById(state, id))
  const { name, avatarURL } = useSelector(state => selectUserById(state, question.author))

  const OPTION_ONE = 'optionOne'
  const OPTION_TWO = 'optionTwo'


  
  const handleAnswerQuestion = () => {
    console.log('handleAnswerQuestion called with: ', selectedAnswer);
    // answer question
    dispatch(answerQuestion({
      authedUser,
      qid: id,
      answer: selectedAnswer
    }))
    // update question page with data about answered questions
    // 1. highlight answer by current user
    // 2. display how many and which options other users have answered
  }

  return (
    <div>
      <Navbar />
      <div className="content-container">
        <div className="list-item-container">
          <h3>{name} asks:</h3>
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
              <button onClick={handleAnswerQuestion} className="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}