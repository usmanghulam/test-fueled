import React, { useContext } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import QuestionForm from './questionForm';


const answerOption = { option: '' }
const formVal = {
	question: '',
	type: 'shortAnswer',
	answer: '' || [answerOption],
}

const Question = () => {
	return (
		<>
			<Formik
				initialValues={{
					questions: [formVal]
				}}
				onSubmit={(values) => console.log(values)}
			>
				{(formikBag) => {
					return (
						<Form className='questionsForm'>
							<div className='questionContainer'>
								<FieldArray
									name='questions'
									render={helper => (
										<>
											{formikBag.values.questions.map((_, i) => (
												<div className='questionWrapper' key={i}>
													<QuestionForm {...{
														formikBag,
														answerOption,
														i
													}} />
												</div>
											))}
											<button onClick={() => helper.push(formVal)}>+ ADD Question</button>
										</>
									)}
								/>
								<button type='submit' className='formSubmitBtn'>Save & Share</button>
							</div>
						</Form>
					)
				}}
			</Formik>
		</>
	)
}

export default Question;