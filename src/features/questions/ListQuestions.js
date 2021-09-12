import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { QuestionListItem } from './QuestionListItem'
import { useSelector } from 'react-redux'
import { selectAuthedUser } from '../auth/authSlice'
import { selectNotAnsweredQuestionIDs, selectAnsweredQuestionIDs } from './questionsSlice'


export const ListQuestions = ({ isAnswered }) => {

  const user = useSelector(selectAuthedUser)
  const answeredQuestions = useSelector(state => selectAnsweredQuestionIDs(state, user))
  const notAnsweredQUestions = useSelector(state => selectNotAnsweredQuestionIDs(state, user))

  let questions = []
  if(isAnswered) {
    questions = answeredQuestions
  } else {
    questions = notAnsweredQUestions
  }

  return (
    <div className="content-container">
      {
        questions.map(id => (
          <QuestionListItem key={id} id={id}/>
        ))
      }
    </div>
  )
}

ListQuestions.propTypes = {
  isAnswered: PropTypes.bool.isRequired
}