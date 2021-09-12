import { queryAllByRole } from '@testing-library/dom'
import React from 'react'
import { useSelector } from 'react-redux'

import { selectQuestionById } from './questionsSlice'

export const QuestionListItem = ({id}) => {

  const question = useSelector(state => selectQuestionById(state, id))

  return(
    <div>
      { question.author }
    </div>
  )
}