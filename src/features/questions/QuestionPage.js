import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { Navbar } from '../nav/Navbar'
import { selectUserById } from '../users/usersSlice'
import { selectQuestionById } from './questionsSlice'

export const QuestionPage = () => {


  const { id } = useParams()

  return (
    <div>
      <Navbar />
      <div className="content-container">
        <div>{id}</div>
      </div>
    </div>
  )
}