import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { selectAuthedUser } from '../auth/authSlice'
import { selectQuestionById } from './questionsSlice'
import { selectUserById } from '../users/usersSlice'
import { selectUserQuestionAnswer } from '../users/usersSlice'
import { OPTION_ONE, OPTION_TWO } from './questionsSlice'
import { formatVoteCountMessage } from '../utility/utils'

export const QuestionInfo = ({ id }) => {

  const authedUser = useSelector(selectAuthedUser)
  const question = useSelector(state => selectQuestionById(state, id))
  const { name, avatarURL } = useSelector(state => selectUserById(state, question.author))
  const answer = useSelector(state => selectUserQuestionAnswer(state, authedUser, id))

  // TODO user, selected answer, stats (most popular answer, number of answers for each option, button ( go to next unanswered question ))

  return (
    <div>
      {name} asked:
      <div className="row-container">
        <img className="list-item-avatar" src={avatarURL} alt="avatar" />
        <div className="column-container">
          <h2>Results:</h2>
          <div>
            {answer === OPTION_ONE && <span>Your answer</span>}
            <h3>Would you rather {question.optionOne.text}?</h3>
            <p>{formatVoteCountMessage(question.optionOne.votes.length)}</p>
          </div>
          <div>
            {answer === OPTION_TWO && <span>Your answer</span>}
            <h3>Would you rather {question.optionTwo.text}?</h3>
            <p>{formatVoteCountMessage(question.optionTwo.votes.length)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

QuestionInfo.propTypes = {
  id: PropTypes.string.isRequired
}