import styles from '../styles/makeDivs.module.css'
import React, { useState } from 'react'

export default function createDiv({ ...props }): JSX.Element {
	const [classNames, addClass] = useState<Array<String>>([styles['container-div'], 'flex', 'section-insert', 'justify-center'])

	return (
		<div id={props.props.id} className={classNames.join(' ')}>
			<button className='self-end flex rounded-full insert-icon bg-white' onClick={event => props.props.functions.insertDiv(event)}><i className="fa-solid fa-plus w-full"></i></button>
		</div>
	)
}
