import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { selectQuestionById } from './questionsSlice'
import { selectUserById } from '../users/usersSlice'

export const QuestionsListItem = ({ id }) => {

  const history = useHistory()
  const question = useSelector(state => selectQuestionById(state, id))
  const { name, avatarURL } = useSelector(state => selectUserById(state, question.author))

  const handleViewPollClick = () => {
    history.push(`/questions/${id}`)
  }

  return (
    <div className="list-item-container">
      <h3>{name} asks:</h3>
      <div className="row-container">
        <img className="list-item-avatar" src={avatarURL} alt="avatar" />
        <div className="column-container">
          <p>Would you rather</p>
          <div>{question.optionOne.text}</div>
          <div>or ...</div>
          <button onClick={handleViewPollClick} className="button dark">View Poll</button>
        </div>
      </div>
    </div>
  )
}