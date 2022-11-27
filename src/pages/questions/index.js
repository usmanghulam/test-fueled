import React from 'react'
import { QuestionContext } from '../../contexts'
import Question from '../../components/questions'

import '../../scss/_questionsForm.scss';

export const CreateQuestions = () => {
	const context = {
		a: 'usman',
		b: 'ghulam'
	}
	return <>
		<QuestionContext.Provider value={context}>
			<Question />
		</QuestionContext.Provider>
	</>
}
