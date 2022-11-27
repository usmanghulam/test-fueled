import React from 'react'
import AnswerField from './answerField'

const QuestionForm = ({ formikBag, answerOption, i }) => {
	const { handleChange, handleBlur, values } = formikBag;
	console.log({ values })
	return <>
		<div className='questionMain'>
			<div className='question'>
				<label htmlFor={`questions.${i}.question`}>Question</label><br />
				<input
					type="text"
					name={`questions.${i}.question`}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.questions[i].question}
				/>
			</div>
			<div className='answer'>
				<label>Answer</label><br />
				<div className='answerType'>
					<select
						name={`questions.${i}.type`}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.questions[i].type}
					>
						<option value='shortAnswer'>Short Answer</option>
						<option value='paragraph'>Paragraph</option>
						<option value='checkboxes'>Checkboxes</option>
						<option value='multipleChoices'>Multiple Choices</option>
						<option value='dropdown'>DropDown</option>
					</select>
				</div>
				<AnswerField {...{ formikBag, i, answerOption }} />
			</div>
		</div>
	</>
}

export default QuestionForm;