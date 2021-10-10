import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../auth/auth-hooks';

export const PrivateRoute = ({ children, ...rest }) => {
	let auth = useAuth()

	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth.user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	)
}