import React from 'react'
import { CaretDown, CaretUp, Delete } from '../base/Icons';
import AnswerField from './answerField'

const QuestionForm = ({ formikBag, answerOption, helper, i }) => {
	const { handleChange, handleBlur, values } = formikBag;
	return <>
		<section className='question'>
			<label htmlFor={`questions.${i}.question`}>Question</label><br />
			<input
				type="text"
				placeholder='What do you want to ask?'
				name={`questions.${i}.question`}
				onChange={handleChange}
				onBlur={handleBlur}
				value={values.questions[i].question}
			/>
		</section>
		<div className='divider'></div>
		<section className='answer'>
			<label className='answerLabel'>Answer</label><br />
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
		</section>
		<div className='divider'></div>
		<section className='bottom'>
			<div className='remaining'>{i + 1} of 2</div>
			<div className='icons'>
				<CaretUp />
				<CaretDown />
				<Delete {...{ helper, i }} />
			</div>
		</section>
	</>
}

export default QuestionForm;