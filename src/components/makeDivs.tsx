import styles from '../app/page.module.css'
import React, { useState } from 'react'

export default function createDiv({ ...props }): JSX.Element {
	const [classNames, addClass] = useState<Array<String>>([styles['container-div']])
	const addColor = () => {
		addClass([...classNames, styles['test-class']])
	};
	return (
		<div id={props.props.id} className={classNames.join(' ')}>
			<button onClick={addColor}>Add Color</button>
		</div>
	)
}
