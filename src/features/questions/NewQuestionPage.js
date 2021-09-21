import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Navbar } from '../nav/Navbar'
import { selectAuthedUser } from '../auth/authSlice';
import { saveNewQuestion } from './questionsSlice';

export const NewQuestionPage = () => {

  const author = useSelector(selectAuthedUser)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <div>
      <Navbar />
      <div className="content-container">
        <div className="column-container">
          <h1>Create New Question</h1>
          <h3>Complete the question:</h3>
          <h2>Would you rather ...</h2>
          <Formik
            initialValues={{ optionOne: '', optionTwo: '' }}
            validationSchema={Yup.object({
              optionOne: Yup.string().max(30, 'Must be 30 characters or less').required('required'),
              optionTwo: Yup.string().max(30, 'Mest be 30 characters or less').required('required'),
            })}
            onSubmit={(values) => {
              console.log('newQuestion: ', JSON.stringify(values, null, 2));
              dispatch(saveNewQuestion({
                optionOneText: values.optionOne,
                optionTwoText: values.optionTwo,
                author,
              }))
              history.push('/')
            }}
          >
            <Form className="column-container">
              <Field placeholder="Enter option one text here" name="optionOne" type="text" />
              <ErrorMessage name="optionOne" />

              <Field placeholder="Enter option two text here" name="optionTwo" type="text" />
              <ErrorMessage name="optionTwo" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}