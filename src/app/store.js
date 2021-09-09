import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice'
import usersReducer from '../features/users/usersSlice'
import questionsReducer from '../features/questions/questionsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    users: usersReducer,
    questions: questionsReducer,
  },
});
