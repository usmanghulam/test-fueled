import React from 'react'
import MultipleAnswersField from './multipleAnswersField';

const AnswerField = ({ formikBag, i, answerOption }) => {
	const { handleChange, handleBlur, values } = formikBag;
	const type = values.questions[i].type;
	const inputProps = {
		name: `questions.${i}.answer.${0}.option`,
		onChange: handleChange,
		onBlur: handleBlur,
		value: values.questions[i].answer[0].option,
	}
	switch (type) {
		case 'paragraph':
			return <textarea placeholder='Long Answer Text' cols={10} rows={10} {...inputProps} />
		case 'checkboxes':
		case 'multipleChoices':
		case 'dropdown':
			return <MultipleAnswersField {...{ formikBag, i, type, answerOption }} />
		default:
			return <input
				className='shortAnswer'
				placeholder='Short Answer'
				type="text"
				{...inputProps}
			/>
	}
}

export default AnswerField;