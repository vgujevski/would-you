import React from 'react'
import { useHistory } from 'react-router';
import { useAuth } from './auth-hooks';
import { useSelector } from 'react-redux';
import { selectUserById } from '../users/usersSlice';

export const AuthButton = () => {
  let history = useHistory();
  let auth = useAuth();
  const { name } = useSelector(state => selectUserById(state, auth.user))

  return auth.user ? (
    <p>
      {`Welcome ${name} `}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}