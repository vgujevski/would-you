import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './features/routes/PrivateRoute';
import { LoginPage } from './features/auth/LoginPage';
import { HomePage } from './features/questions/HomePage';
import { Leaderboard } from './features/leaderboard/Leaderboard';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './features/questions/QuestionPage';
import { NewQuestionPage } from './features/questions/NewQuestionPage';

import { ProvideAuth } from './features/auth/auth-hooks';
import { fetchQuestions } from './features/questions/questionsSlice';

const  App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuestions())
  }, [dispatch])

  return (
    <ProvideAuth>
      <Router>
        <div>
          <Switch>
            <PrivateRoute path="/" exact>
              <HomePage />
            </PrivateRoute>
            <PrivateRoute path="/leaderboard">
              <Leaderboard />
            </PrivateRoute>
            <PrivateRoute path="/questions/:id">
              <QuestionPage />
            </PrivateRoute>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/add">
              <NewQuestionPage />
            </PrivateRoute>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  )

}

export default App;