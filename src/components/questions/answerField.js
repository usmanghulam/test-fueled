import { FieldArray } from 'formik';
import React from 'react'

const SpecialAnswersField = ({ formikBag, i, type, answerOption }) => {
	const answersArr =
		typeof formikBag.values.questions[i].answer === 'string' ? [answerOption] :
			formikBag.values.questions[i].answer
	console.log({ answersArr })
	if (!Array.isArray(answersArr)) return;
	return (
		<>
			<FieldArray
				name={`questions.${i}.answer`}
				render={answerHelper => (
					<>
						{answersArr.map((ans, j) => (
							<div key={j}>
								<input />
							</div>
						))}
						<button
							type='button'
							onClick={() => answerHelper.push(answerOption)}
						>+ ADD Options</button>
					</>
				)}
			/>
		</>
	)
}

const AnswerField = ({ formikBag, i, answerOption }) => {
	const { handleChange, handleBlur, values } = formikBag;
	const type = values.questions[i].type;
	const inputProps = {
		name: `questions.${i}.answer`,
		onChange: handleChange,
		onBlur: handleBlur,
		value: Array.isArray(values.questions[i].answer) ? '' : values.questions[i].answer,
	}
	switch (type) {
		case 'paragraph':
			return <textarea cols={10} rows={10} {...inputProps} />
		case 'checkboxes':
		case 'multipleChoices':
		case 'dropdown':
			return <SpecialAnswersField {...{ formikBag, i, type, answerOption }} />
		default:
			return <input type="text" {...inputProps} />
	}
}

export default AnswerField;