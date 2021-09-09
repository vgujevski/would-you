import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const Toggle = ({ handleToggleAnswered }) => {

  const [isAnswered, setIsAnswered] = useState(false);

  const button = "button"
  const activeButton = "button toggle-active"

  useEffect(() => {
    handleToggleAnswered(isAnswered)
  }, [isAnswered, handleToggleAnswered])

  return (
    <div className="content-container">
      <div className="toggle-container">
        <button
          onClick={() => setIsAnswered(false)}
          className={isAnswered ? button : activeButton}
        >
          new questions
        </button>
        <button
          onClick={() => setIsAnswered(true)}
          className={!isAnswered ? button : activeButton}
        >
          answered questions
        </button>
      </div>
    </div>

  );
}

Toggle.propTypes = {
  handleToggleAnswered: PropTypes.func.isRequired
}


