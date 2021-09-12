import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Navbar } from '../nav/Navbar'
import { Toggle } from './Toggle'
import { ListQuestions } from './ListQuestions'
import { fetchQuestions } from './questionsSlice'

export const HomePage = () => {

  const [ isAwnsered, setIsAnswered ] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchQuestions())
  }, [dispatch])

  const handleToggleAnswered = (isAnswered) => {
    setIsAnswered(isAnswered)
  }

  return (
    <div>
      <Navbar />
      <Toggle handleToggleAnswered={handleToggleAnswered}/>
      <ListQuestions isAnswered={isAwnsered}/>
    </div>
  )
}