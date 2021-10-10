import React from 'react'
import PropTypes from 'prop-types'

import { QuestionsListItem } from './QuestionListItem'
import { useSelector } from 'react-redux'
import { selectAuthedUser } from '../auth/authSlice'
import { selectAnsweredQuestions, selectNotAnsweredQuestions } from './questionsSlice'


export const ListQuestions = ({ isAnswered }) => {

  const user = useSelector(selectAuthedUser)
  const answeredQuestions = useSelector(state => selectAnsweredQuestions(state, user))
  const notAnsweredQUestions = useSelector(state => selectNotAnsweredQuestions(state, user))

  let questions = []
  if(isAnswered) {
    questions = answeredQuestions
  } else {
    questions = notAnsweredQUestions
  }

  return (
    <div className="content-container">
      {
        questions.map(question => (
          <QuestionsListItem key={question.id} id={question.id}/>
        ))
      }
    </div>
  )
}

ListQuestions.propTypes = {
  isAnswered: PropTypes.bool.isRequired
}