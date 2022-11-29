import React from 'react'
import { Formik, Form, FieldArray } from 'formik';
import QuestionForm from './questionForm';


const answerOption = { option: '', isTrue: false }
const formVal = {
	question: '',
	type: 'shortAnswer',
	answer: [answerOption],
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
					const questions = formikBag.values.questions;
					return (
						<Form className='questionsForm'>
							<FieldArray
								name='questions'
								render={helper => (
									<>
										{questions.map((_, i) => (
											<div className='questionWrapper' key={i}>
												<QuestionForm {...{
													formikBag,
													answerOption,
													helper,
													i
												}} />
											</div>
										))}
										<button
											className='addQuestions'
											onClick={() => helper.push(formVal)}
											disabled={questions.length > 1}
										>+ &nbsp; ADD Question</button>
									</>
								)}
							/>
							<button type='submit' className='formSubmitBtn'>Save & Share</button>
						</Form>
					)
				}}
			</Formik>
		</>
	)
}

export default Question;