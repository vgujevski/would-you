import React, { useState } from 'react'

import { Navbar } from '../nav/Navbar'
import { Toggle } from './Toggle'
import { ListQuestions } from './ListQuestions'

export const HomePage = () => {

  const [ isAwnsered, setIsAnswered ] = useState(false)

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