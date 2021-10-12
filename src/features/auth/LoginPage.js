import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'

import { selectAllUserIDs } from '../users/usersSlice'
import { UserOption } from './UserOption'
import { useHistory } from 'react-router'
import { useLocation } from 'react-router'
import { useAuth } from './auth-hooks'

export const LoginPage = () => {

  const [selectedUser, setSelectedUser] = useState('')
  const userIDs = useSelector(selectAllUserIDs)

  let options = []
  userIDs.forEach(id => {
    options.push({ value: id, label: id })
  })

  const formatOptionsLabel = ({ value }) => (
    <UserOption id={value} />
  )

  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(selectedUser.value, () => {
      history.replace(from);
    });
  };

  return (
    <div className="content-container">
      <div className="login-page-container">
        <h1>Welcome to Would You Rather App</h1>
        <div className="user-select-container">
          <Select
            className="react-select-container"
            value={selectedUser}
            onChange={(selected) => setSelectedUser(selected)}
            formatOptionLabel={formatOptionsLabel}
            options={options}
          />
          <button disabled={selectedUser === ''} onClick={login} className="button">Login</button>
        </div>
      </div>
    </div>

  )
}