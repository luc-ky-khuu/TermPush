import { Inter } from '@next/font/google'
import styles from '../app/page.module.css'
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'
import CreateDiv from './api/createDiv'

export default function Home() {
	const [divs, addDiv] = useState<Array<JSX.Element>>([]);
	let [num, incNum] = useState<number>(0)
	const props: Object = {
		id: num
	};
 	const appendDiv = () => {
		addDiv([...divs, <CreateDiv { ...props }/>])
		incNum(num+=1)
	};

	return (
		<main id='main'>
			<button type='submit' onClick={() => appendDiv()}>Add Div</button>
			{divs}
		</main>
	);
}