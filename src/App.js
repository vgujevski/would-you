import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './features/routes/PrivateRoute';
import { PublicRoute } from './features/routes/PublicRoute';
import { Login } from './features/auth/Login';
import { HomePage } from './features/questions/HomePage';
import { Leaderboard } from './features/leaderboard/Leaderboard';
import { NotFoundPage } from './NotFoundPage';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute component={HomePage} path="/" exact />
          <PrivateRoute component={Leaderboard} path="/leaderboard" exact />
          <PublicRoute component={Login} restricted={true} path="/login" exact />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;