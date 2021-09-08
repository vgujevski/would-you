import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from '../users/usersSlice'
export const UserOption = ({ id }) => {

  const { name, avatarURL } = useSelector(state => selectUserById(state, id))

  return (
    <div className="user-option-container">
      <img className="user-option-avatar" src={avatarURL} alt="avatar" />
      <div className="user-option-name">{name}</div>
    </div>
  )
}