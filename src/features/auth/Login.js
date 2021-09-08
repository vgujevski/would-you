import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'

import { selectAllUsers } from '../users/usersSlice'
import { UserOption } from './UserOption'


export const Login = () => {

  const [selectedUser, setSelectedUser] = useState('default')
  const users = useSelector(selectAllUsers)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit called with: ', selectedUser.value);
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
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}