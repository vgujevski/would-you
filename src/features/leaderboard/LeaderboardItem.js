import React from 'react'
import PropTypes from 'prop-types'

export const LeaderboardItem = ({ user }) => {

  const { name, avatarURL, numAnswers, numQuestions, score } = user

  return (
    <div className="entry-container">
      <div className="row-container">
        <div className="avatar-container">
          <img className="list-item-avatar" src={avatarURL} alt="avatar" />
        </div>
        <div className="details-container">
          <div>{name}</div>
          <div>Answered: {numAnswers}</div>
          <div>Asked: {numQuestions}</div>
        </div>

        <div className="score-container">
          <h2>Score</h2>
          <p>{score}</p>
        </div>

      </div>
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



