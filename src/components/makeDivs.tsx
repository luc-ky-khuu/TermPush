import styles from '../styles/makeDivs.module.css'
import React, { useState } from 'react'

export default function createDiv({ ...props }): JSX.Element {
	const [classNames, addClass] = useState<Array<String>>([styles['container-div'], 'flex', 'section-insert', 'justify-center', 'w-full'])

	return (
		<div id={props.props.id} className={classNames.join(' ')}>
			<p className='w-full' contentEditable='true'></p>
			<button className={`self-end flex rounded-full insert-icon bg-white ${styles['insert-icon']}`} onClick={event => props.props.functions.insertDiv(event)}><i className="fa-solid fa-plus w-full"></i></button>
		</div>
	)
}
