import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isAuthed as checkAuthedUser } from '../auth/authSlice';

export const PrivateRoute = ({component: Component, ...rest}) => {

    const isAuthed = useSelector(checkAuthedUser)
    return (
        <Route {...rest} render={props => (
          isAuthed ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};