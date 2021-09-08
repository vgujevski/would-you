import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isAuthed as checkAuthedUser } from '../auth/authSlice';

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthed = useSelector(checkAuthedUser)

  return (
    <Route {...rest} render={props => (
      isAuthed && restricted
        ? <Redirect to="/home" />
        : <Component {...props} />
    )} />
  );
}

PublicRoute.defaultProps = {
  restricted: false
}