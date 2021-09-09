import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _getQuestions } from "../../api/_DATA";

const initialState = {
  items: {},
  status: 'idle',
  error: null
}

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    const response = await _getQuestions()
    return response
  }
)

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'idle'
        state.items = action.payload
      })
  }
})

export const selectNotAnsweredQuestions = (state, userId) => {

}

export const selectAnsweredQuestions = (state, userId) => {

}

export default questionsSlice.reducer