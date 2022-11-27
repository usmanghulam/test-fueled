import { lazy } from 'react'

export const CreateQuestionsPage = lazy(() =>
	import('../pages').then(({ CreateQuestions }) => {
		console.log({ CreateQuestions })
		return { default: CreateQuestions }
	}),
)