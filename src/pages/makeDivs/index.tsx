import React, { useEffect, useState } from 'react'
import CreateDiv from '../../components/makeDivs'
import { IDivProps } from '../../interface/index.interface'

export default function addDiv(): JSX.Element {
	const [divs, addDiv] = useState<Array<Object>>([]);
	let [renderObjects, updateRender] = useState<Array<JSX.Element>>([])
	let [num, incNum] = useState<number>(0);

	useEffect(() => {
		updateRender(divs.map((item: Object) => { return item.jsx }))
		console.log('divs', divs);
	}, [divs, num])
	const props: IDivProps = {
		id: num,
		functions: {}
	}

	const appendDivToBottom = () => {
		addDiv([...divs, { idx: num, jsx: <CreateDiv key={num} props={ props } />}, { idx: num + 1, jsx: <button key={`${num}but`} onClick={(event) => insertDiv(event)}>Insert</button>} ])
		incNum(num += 2);
	}

	const insertDiv = (event) => {
		const childNodes: Array<HTMLElement> = event.target.parentNode.childNodes;
		const idx: number = Array.prototype.indexOf.call(childNodes, event.target);
		console.log('divs to insert', divs);
		console.log('idx', idx)
		divs.splice(idx + 1, 0, { idx: num, jsx: <CreateDiv key={num} props={ props } />}, { idx: num + 1, jsx: <button key={`${num}but`} onClick={(event) => insertDiv(event)}>Insert</button>})
		addDiv([...divs])
		incNum(num += 2);

	}
	return (
		<>
			<button onClick={appendDivToBottom}>Add Div</button>
			<div>
				{renderObjects}
			</div>
		</>
	)
}
