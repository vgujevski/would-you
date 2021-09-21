import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './features/routes/PrivateRoute';
import { PublicRoute } from './features/routes/PublicRoute';
import { Login } from './features/auth/Login';
import { HomePage } from './features/questions/HomePage';
import { Leaderboard } from './features/leaderboard/Leaderboard';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './features/questions/QuestionPage';
import { NewQuestionPage } from './features/questions/NewQuestionPage';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute component={NewQuestionPage} path="/new" exact />
          <PrivateRoute component={HomePage} path="/" exact />
          <PrivateRoute component={Leaderboard} path="/leaderboard" exact />
          <PrivateRoute component={QuestionPage} path="/questions/:id" exact />
          <PublicRoute component={Login} restricted={true} path="/login" exact />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;