import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'

import { selectAllUserIDs } from '../users/usersSlice'
import { UserOption } from './UserOption'
import { login } from './authSlice'

export const Login = () => {

  const [selectedUser, setSelectedUser] = useState('')
  const userIDs = useSelector(selectAllUserIDs)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit called with: ', selectedUser.value);
    dispatch(login(selectedUser.value))
  }

  let options = []
  userIDs.forEach(id => {
    options.push({ value: id, label: id })
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