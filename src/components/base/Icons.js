import * as React from 'react'

export const CaretUp = () => {
	return <>
		<svg fill="none" width='15px' viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m3.14645 6.14645c.19526-.19527.51184-.19527.7071 0l3.64645 3.64644 3.6464-3.64644c.1953-.19527.5119-.19527.7072 0 .1952.19526.1952.51184 0 .7071l-4.00005 4.00005c-.09376.0937-.22094.1464-.35355.1464s-.25979-.0527-.35355-.1464l-4-4.00005c-.19527-.19526-.19527-.51184 0-.7071z" fill="rgb(0,0,0)" fillRule="evenodd" /></svg>
	</>
}

export const CaretDown = () => {
	return <>
		<svg fill="none" width='15px' viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m7.14645 4.14645c.19526-.19527.51184-.19527.7071 0l4.00005 4c.1952.19526.1952.51184 0 .7071-.1953.19527-.5119.19527-.7072 0l-3.6464-3.64644-3.64645 3.64644c-.19526.19527-.51184.19527-.7071 0-.19527-.19526-.19527-.51184 0-.7071z" fill="rgb(0,0,0)" fillRule="evenodd" /></svg>
	</>
}

export const Delete = ({ helper, i }) => {
	return <>
		<svg
			onClick={() => {
				if (typeof helper.remove === 'function' && i) {
					helper.remove(i);
				}
			}}
			style={{ cursor: 'pointer' }}
			id="Layer_2" width='15px' fill='#AE0000' enableBackground="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m23.164 32.021h-14.319c-1.654 0-3-1.346-3-3v-19.8c0-.553.448-1 1-1s1 .447 1 1v19.801c0 .552.449 1 1 1h14.319c.552 0 1-.448 1-1v-19.801c0-.553.447-1 1-1s1 .447 1 1v19.801c0 1.654-1.346 2.999-3 2.999zm-2.764-4.396c-.553 0-1-.447-1-1v-17.404c0-.553.447-1 1-1s1 .447 1 1v17.404c0 .553-.447 1-1 1zm-4.396 0c-.552 0-1-.447-1-1v-17.404c0-.553.448-1 1-1s1 .447 1 1v17.404c0 .553-.448 1-1 1zm-4.397 0c-.552 0-1-.447-1-1v-17.404c0-.553.448-1 1-1s1 .447 1 1v17.404c0 .553-.447 1-1 1zm16.397-21.344h-24.091c-.552 0-1-.447-1-1s.448-1 1-1h5.02c.14-2.024.971-2.661 2.029-3.259.994-.562 2.766-1.001 4.033-1.001h2.019c1.268 0 3.039.439 4.032 1 1.059.599 1.89 1.236 2.029 3.26h4.929c.553 0 1 .447 1 1s-.447 1-1 1zm-17.069-2h10.138c-.081-.992-.394-1.169-1.011-1.519-.699-.395-2.124-.741-3.049-.741h-2.019c-.924 0-2.349.347-3.049.742-.617.349-.928.526-1.01 1.518z" /></svg>
	</>
}