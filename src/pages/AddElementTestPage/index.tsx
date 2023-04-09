import React, { useState, useEffect } from 'react'
import AddReactElement from '../../components/addReactElement'
export default function addDiv(): JSX.Element {
	let [selected, setSelected] = useState<HTMLElement>();
	useEffect(() => {}, [selected])
	return (
		<>
			<div id='mainContainer'key='testing1'>
				<AddReactElement key='testing' selected={selected} setSelected={setSelected} element={{ type: 'div', children: [], classes: [], text: 'test', id: 'div0'}}/>
			</div>
		</>
	)
}
