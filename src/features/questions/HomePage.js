import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Navbar } from '../nav/Navbar'
import { Toggle } from './Toggle'
import { fetchQuestions } from './questionsSlice'
import { selectAuthedUser } from '../auth/authSlice'


export const HomePage = () => {

  const [ isAwnsered, setIsAnswered ] = useState(false)
  const user = useSelector(selectAuthedUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchQuestions())
  }, [dispatch])

  const handleToggleAnswered = (isAnswered) => {
    console.log('handleToggleAnswered called: ', isAnswered);
  }

  return (
    <div>
      <Navbar />
      <Toggle handleToggleAnswered={handleToggleAnswered}/>
    </div>
  )
}