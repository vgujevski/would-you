import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from "../../api/_DATA";

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

export const saveNewQuestion = createAsyncThunk(
  'questions/saveNewQuestion',
  async question => {
    const response = await _saveQuestion(question)
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
      .addCase(answerQuestion.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(answerQuestion.fulfilled, (state, action) => {
        console.log('questionsSlice answerQuestion reducer called');
        state.status = 'idle'
        const { authedUser, qid, answer } = action.payload
        state.items[qid][answer].votes.push(authedUser)
      })
      .addCase(saveNewQuestion.fulfilled, (state, action) => {
        console.log('saveNewQuestion fulfilled, response: ', JSON.stringify(action.payload, null, 2));
        state.items[action.payload.id] = action.payload
      })
  }
})

/**
 * returns not sorted array of answered question IDs
 * 
 * @param {object} state 
 * @param {string} userId 
 * @returns {array} answered question questionIDs
 */
export const selectAnsweredQuestionIDs = (state, userId) => {
  const answeredQuestions = []
  const userAnswers =  state.users.items[userId].answers
  for (const key of Object.keys(userAnswers)) {
    answeredQuestions.push(key)
  }
  return answeredQuestions
}

/**
 * returns sorted by timestamp array of answered question objects
 * 
 * @param {object} state 
 * @param {string} userId 
 * @returns {array} answered question objects
 */
export const selectAnsweredQuestions = (state, userId) => {
  const answeredQuestions = []
  const userAnswers =  state.users.items[userId].answers
  for (const key of Object.keys(userAnswers)) {
    answeredQuestions.push(state.questions.items[key])
  }
  return answeredQuestions.sort((a, b) => b.timestamp - a.timestamp)
}

/**
 * returns not sorted array of NOT answered question IDs
 * 
 * @param {object} state 
 * @param {string} userId 
 * @returns {array} answered question IDs
 */
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

/**
 * returns sorted by timestamp array of NOT answered question objects
 * 
 * @param {object} state 
 * @param {string} userId 
 * @returns {array} NOT answered question objects
 */
export const selectNotAnsweredQuestions = (state, userId) => {
  const notAnsweredQuestions = []
  const userAnswers = selectAnsweredQuestionIDs(state, userId)

  for (const key of Object.keys(state.questions.items)) {
    if(!userAnswers.includes(key)){
      notAnsweredQuestions.push(state.questions.items[key])
    }
  }
  return notAnsweredQuestions.sort((a, b) => b.timestamp - a.timestamp)
}

/**
 * 
 * @param {object} state 
 * @param {string} id 
 * @returns {object} user
 */
export const selectQuestionById = (state, id) => {
  return state.questions.items[id]
}

export const OPTION_ONE = 'optionOne'
export const OPTION_TWO = 'optionTwo'

export default questionsSlice.reducer