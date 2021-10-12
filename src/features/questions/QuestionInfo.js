import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { selectAuthedUser } from '../auth/authSlice'
import { selectQuestionById } from './questionsSlice'
import { selectUserById } from '../users/usersSlice'
import { selectUserQuestionAnswer } from '../users/usersSlice'
import { OPTION_ONE, OPTION_TWO } from './questionsSlice'
import { formatVoteCountMessage } from '../utility/utils'
import { formatPercentage } from '../utility/utils'
import { ProgressBar } from '../components/ProgressBar'

export const QuestionInfo = ({ id }) => {

  const authedUser = useSelector(selectAuthedUser)
  const question = useSelector(state => selectQuestionById(state, id))
  const { name, avatarURL } = useSelector(state => selectUserById(state, question.author))
  const answer = useSelector(state => selectUserQuestionAnswer(state, authedUser, id))
  const optionOnePercentage = formatPercentage(question.optionOne.votes.length, question.optionTwo.votes.length)
  const optionTwoPercentage = formatPercentage(question.optionTwo.votes.length, question.optionOne.votes.length)

  return (
    <div className="question-info-container">
      <h2>{name} asked:</h2>
      <div className="row-container">
        <img className="list-item-avatar info-avatar" src={avatarURL} alt="avatar" />
        <div className="column-container">
          <h2>Results:</h2>
          <div className="answer">
            {answer === OPTION_ONE && <span className="selected-answer">Your answer</span>}
            <h3>Would you rather {question.optionOne.text}?</h3>
            <p>{formatVoteCountMessage(question.optionOne.votes.length)}</p>
            <ProgressBar completed={optionOnePercentage}/>
          </div>
          <div className="answer">
            {answer === OPTION_TWO && <span className="selected-answer">Your answer</span>}
            <h3>Would you rather {question.optionTwo.text}?</h3>
            <p>{formatVoteCountMessage(question.optionTwo.votes.length)}</p>
            <ProgressBar completed={optionTwoPercentage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

QuestionInfo.propTypes = {
  id: PropTypes.string.isRequired
}