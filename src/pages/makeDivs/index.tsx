import React, { useEffect, useState } from 'react'
import CreateDiv from '../../components/makeDivs'
import { IDivProps } from '../../interface/index.interface'
import '../../app/globals.css'

export default function addDiv(): JSX.Element {
	let [divs, addDiv] = useState<Array<Object>>([]);
	let [num, incNum] = useState<number>(0);
	let [clickedEvent, setClickedEvent] = useState<React.MouseEvent<HTMLButtonElement>>(null)
	useEffect(() => {
		if (clickedEvent === null) return;
		const childNodes: Array<HTMLElement> = clickedEvent.target.parentNode.childNodes;
		const idx: number = Array.prototype.indexOf.call(childNodes, clickedEvent.target);
		appendDivToIdx(idx)
		incNum(num += 2);
	}, [clickedEvent])
	const props: IDivProps = {
		id: num,
		functions: {},
		len: divs.length
	}

	const appendDivToBottom = () => {
		addDiv([
			...divs, 
			{ idx: num, jsx: <CreateDiv key={num} props={ props } />}, 
			{ idx: num + 1, jsx: <button className='' key={`${num}but`} onClick={(event) => insertDiv(event)}>Insert</button>}
		])
		incNum(num += 2);
	}

	const appendDivToIdx = (idx: number) => {
		addDiv([
			...divs.slice(0, idx + 1),
			{ idx: num + 1, jsx: <CreateDiv key={num + 1} props={ props } />},
			{ idx: num + 2, jsx: <button className='' key={`${num + 2}but`} onClick={(event) => insertDiv(event)}>Insert</button>},
			...divs.slice(idx + 1)
		])
	}

	const insertDiv = (event: React.MouseEvent<HTMLButtonElement>) => {
		setClickedEvent(event)
	}
	return (
		<>
			<button onClick={appendDivToBottom}>Add Div</button>
			<div>
				{divs.map((item: any) => { return item.jsx })}
			</div>
		</>
	)
}
