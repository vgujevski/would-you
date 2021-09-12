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

export const selectAnsweredQuestionIDs = (state, userId) => {
  const answeredQuestions = []
  const userAnswers = state.users.items[userId].answers
  for (const key of Object.keys(userAnswers)) {
    answeredQuestions.push(key)
  }
  return answeredQuestions
}



export const selectNotAnsweredQuestionIDs = (state, userId) => {
  const notAnsweredQuestions = []
  const userAnswers = selectAnsweredQuestionIDs(state, userId)


  for (const key of Object.keys(state.questions.items)) {
    if(!userAnswers.includes(key)){
      notAnsweredQuestions.push(key)
    }
  }
  return notAnsweredQuestions
}

export const selectQuestionById = (state, id) => {
  return state.questions.items[id]
}

export default questionsSlice.reducer