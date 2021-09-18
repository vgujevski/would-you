import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { Navbar } from '../nav/Navbar'
import { AnswerQuestion } from './AnswerQuestion'

import { selectUserById } from '../users/usersSlice'
import { selectQuestionById } from './questionsSlice'
import { answerQuestion } from './questionsSlice'
import { selectAuthedUser } from '../auth/authSlice'
import { selectUserQuestionAnswer } from '../users/usersSlice'
import { QuestionInfo } from './QuestionInfo'

export const QuestionPage = () => {

  const authedUser = useSelector(selectAuthedUser)
  const dispatch = useDispatch()
  const { id } = useParams()
  const question = useSelector(state => selectQuestionById(state, id))
  const { name, avatarURL } = useSelector(state => selectUserById(state, question.author))
  const answer = useSelector(state => selectUserQuestionAnswer(state, authedUser, id))

  const handleAnswerQuestion = (selectedAnswer) => {
    console.log('handleAnswerQuestion called with: ', selectedAnswer);
    // answer question
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
                avatarURL={avatarURL}
                author={name}
                handleAnswerQuestion={handleAnswerQuestion}
                question={question} />
            )
          }
        </div>
      </div>
    </div>
  )
}