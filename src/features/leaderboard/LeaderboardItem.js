import React from 'react'
import PropTypes from 'prop-types'

export const LeaderboardItem = ({ user }) => {

  const { name, avatarURL, numAnswers, numQuestions, score } = user

  return (
    <div className="row-container">
      <img className="list-item-avatar" src={avatarURL} alt="avatar" />
      <div className="column-container">
        <div>{name}</div>
        <div>Questions Answered: {numAnswers}</div>
        <div>Questions Asked: {numQuestions}</div>
      </div>
      <div>Total Score: {score}</div>
    </div>
  )
}

LeaderboardItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
    numAnswers: PropTypes.number.isRequired,
    numQuestion: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
  })
}



