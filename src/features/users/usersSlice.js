import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _getUsers } from "../../api/_DATA";

const initialState = {
  items: {},
  status: 'idle',
  error: null
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await _getUsers()
    return response
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.items = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'idle'
        state.items = action.payload
      })
  }
})

export const { getUsers } = usersSlice.actions

export const selectAllUsers = (state) => state.users.items

export const selectUserById = (state, id) => state.users.items[id]

export default usersSlice.reducer