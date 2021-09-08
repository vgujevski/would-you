import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authedUser: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.authedUser = action.payload
    },
    logout: (state,) => {
      state.authedUser = null
    }
  }
})

export const { login , logout } = authSlice.actions

export const selectAuthedUser = (state) => state.auth.authedUser

export default authSlice.reducer