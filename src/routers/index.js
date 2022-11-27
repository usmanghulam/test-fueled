import * as React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
	CreateQuestionsPage
} from './routes';

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' name='questionsPage' element={<CreateQuestionsPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routers;