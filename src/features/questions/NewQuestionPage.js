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
      <div className="content-container column-container">
        <h2 className="new-question-title">Create New Question</h2>
        <div className="new-question-container">
          <div className="column-container">
            <h2 className="sub-title">Would you rather ...</h2>
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
                <Field className="text-input" placeholder="Enter option one text here" name="optionOne" type="text" />
                <ErrorMessage name="optionOne" />

                <h2 className="sub-title"> ... or ... </h2>

                <Field className="text-input" placeholder="Enter option two text here" name="optionTwo" type="text" />
                <ErrorMessage name="optionTwo" />

                <button className="button dark submit-button" type="submit">Submit</button>
              </Form>
            </Formik>
          </div>
        </div>

      </div>
    </div>
  )
}