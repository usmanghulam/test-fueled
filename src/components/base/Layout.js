import * as React from 'react'
import Logo from './Logo';

import '../../scss/_layout.scss';

const Layout = ({ children }) => {
	return <>
		<nav>
			<div className='logo'><Logo /> </div>
			<div><p>New Questionnaire</p></div>
			<div><button>LOG IN</button></div>
		</nav>
		{children}
	</>
}

export default Layout;