import { lazy } from 'react'

export const CreateQuestionsPage = lazy(() =>
	import('../pages').then(({ CreateQuestions }) => {
		return { default: CreateQuestions }
	}),
)