import React from 'react'
import AddReactElement from '../../components/addReactElement'
export default function addDiv(): JSX.Element {
	return (
		<>
			<div id='mainContainer'key='testing1'>
				<AddReactElement key='testing' element={{ element: 'div', children: [{ element: 'div', children: [], classes: [], text: 'test'}, { element: 'div', children: [], classes: [], text: 'test2'}], classes: [], text: 'test'}}/>
			</div>
		</>
	)
}
