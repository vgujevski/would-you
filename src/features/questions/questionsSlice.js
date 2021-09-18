import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _getQuestions, _saveQuestionAnswer } from "../../api/_DATA";

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

export const answerQuestion = createAsyncThunk(
  'questions/answerQuestion',
  async answer => {
    await _saveQuestionAnswer(answer)
    return answer
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
      .addCase(answerQuestion.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(answerQuestion.fulfilled, (state, action) => {
        console.log('questionsSlice answerQuestion reducer called');
        state.status = 'idle'
        const { authedUser, qid, answer } = action.payload
        state.items[qid][answer].votes.push(authedUser)
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

export const OPTION_ONE = 'optionOne'
export const OPTION_TWO = 'optionTwo'

export default questionsSlice.reducer