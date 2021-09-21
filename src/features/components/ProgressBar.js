import React from 'react'

export const ProgressBar = ({ completed }) => {

  const container = {
    height: 20,
    width: '70%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  }

  const filler = {
    height: '100%',
    width: `${completed}`,
    borderRadius: 'inherit',
    textAlign: 'right',
    backgroundColor: 'black',
  }

  const label = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <div style={container}>
      <div style={filler}>
        <span style={label}>{`${completed}%`}</span>
      </div>
    </div>
  )
}