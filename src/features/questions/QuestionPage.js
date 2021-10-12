import React from 'react'
import { useParams, useHistory, Redirect  } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { Navbar } from '../nav/Navbar'
import { AnswerQuestion } from './AnswerQuestion'

import { selectQuestionById } from './questionsSlice'
import { answerQuestion } from './questionsSlice'
import { selectAuthedUser } from '../auth/authSlice'
import { selectUserQuestionAnswer } from '../users/usersSlice'
import { QuestionInfo } from './QuestionInfo'

export const QuestionPage = () => {

  const authedUser = useSelector(selectAuthedUser)
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  
  const question = useSelector(state => selectQuestionById(state, id))
  const answer = useSelector(state => selectUserQuestionAnswer(state, authedUser, id))

  if(question === undefined) {
    return (
      <Redirect to="/404"/> 
    )
  }

  const handleAnswerQuestion = (selectedAnswer) => {
    dispatch(answerQuestion({
      authedUser,
      qid: id,
      answer: selectedAnswer
    }))
  }

  return (
    <div>
      <Navbar />
      <div className="content-container">
        <div className="list-item-container">
          {
            answer ? (
              <QuestionInfo id={id} />
            ) : (              
              <AnswerQuestion
                handleAnswerQuestion={handleAnswerQuestion}
                id={id} />
            )
          }
        </div>
      </div>
    </div>
  )
}