import * as React from 'react'
import { FieldArray } from 'formik'

const MultipleAnswersField = ({ formikBag, i, type, answerOption }) => {
	const answersArr = formikBag.values.questions[i].answer
	const inputType = type === 'checkboxes' ? 'checkbox' : type === 'multipleChoices' ? 'radio' : '';
	const options = ['First', 'Second', 'Third', 'Fourth'];
	return (
		<div className='multipleAnswers'>
			<FieldArray
				name={`questions.${i}.answer`}
				render={answerHelper => (
					<>
						{answersArr.map((_, j) => (
							<div key={j} className='main'>
								<div className='selectors'>
									{type === 'dropdown' ? (
										<span>{j + 1}</span>
									) : (
										<input
											type={inputType}
											name={`answers`}
											id={`questions.${i}.answer.${j}.isTrue`}
											onChange={formikBag.handleChange}
											onBlur={formikBag.handleBlur}
											value={formikBag?.values?.questions[i].answer[j].isTrue || false}
										/>
									)}
								</div>
								<input
									type='text'
									placeholder={`${options[j]} Option`}
									name={`questions.${i}.answer.${j}.option`}
									onChange={formikBag.handleChange}
									onBlur={formikBag.handleBlur}
									value={formikBag?.values?.questions[i].answer[j].option}
								/>
								<div className='btn'>
									<button
										className='removeOption'
										onClick={() => answerHelper.remove(j)}
										type='button'
										disabled={answersArr.length < 2}
									>X</button>
								</div>
							</div>
						))}
						{answersArr.length < 4 && (
							<div className='addOptionsBtn'>
								<button
									type='button'
									className=''
									onClick={() => answerHelper.push(answerOption)}
								>+ &nbsp; ADD Options</button>
							</div>
						)}
					</>
				)}
			/>
		</div>
	)
}

export default MultipleAnswersField;