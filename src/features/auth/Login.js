import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'

import { selectAllUsers } from '../users/usersSlice'
import { UserOption } from './UserOption'
import { login } from './authSlice'

export const Login = () => {

  const [selectedUser, setSelectedUser] = useState('')
  const users = useSelector(selectAllUsers)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit called with: ', selectedUser.value);
    dispatch(login(selectedUser.value))
  }

  let options = []
  Object.keys(users).forEach(userId => {
    options.push({ value: userId, label: userId })
  })

  const formatOptionsLabel = ({ value }) => (
    <UserOption id={value} />
  )

  return (
    <div className="user-select-container">
      <Select
        className="react-select-container"
        value={selectedUser}
        onChange={(selected) => setSelectedUser(selected)}
        formatOptionLabel={formatOptionsLabel}
        options={options}
      />
      <button disabled={selectedUser === ''} onClick={handleSubmit} className="button">Login</button>
    </div>
  )
}