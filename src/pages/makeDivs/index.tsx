import React, { useEffect, useState } from 'react'
import CreateDiv from '../../components/makeDivs'
import { IDivProps } from '../../interface/index.interface'

export default function addDiv(): JSX.Element {
	let [divs, addDiv] = useState<Array<Object>>([]);
	let [num, incNum] = useState<number>(0);
	let [clickedEvent, setClickedEvent] = useState<React.MouseEvent<HTMLButtonElement>>(null)
	const props: IDivProps = {
		id: num,
		functions: {}
	}

	useEffect(() => {
		//Mount, render initial section
		addDiv([
			{ idx: num, jsx: <CreateDiv key={num} props={ props } />},
		]);
		incNum(num += 1);
		props.functions = {insertDiv}
	}, [])

	useEffect(() => {
		//When insert button is clicked, insert div into position
		if (clickedEvent === null) return;
		const selectedItem: EventTarget = clickedEvent.nativeEvent.target!;
		const closestSection: HTMLElement = (selectedItem as HTMLElement).closest('.section-insert')!;
		const childNodes: NodeList = closestSection.parentNode!.childNodes;
		const idx: number = Array.prototype.indexOf.call(childNodes, closestSection);
		props.functions = {insertDiv}
		appendDivToIdx(idx)
		incNum(num += 1);
	}, [clickedEvent])

	const appendDivToIdx = (idx: number) => {
		addDiv([
			...divs.slice(0, idx + 1),
			{ idx: num + 1, jsx: <CreateDiv key={num + 1} props={ props } />},
			...divs.slice(idx + 1)
		])
	}

	const insertDiv = (event: React.MouseEvent<HTMLButtonElement>) => {
		setClickedEvent(event)
	}
	return (
		<>
			<div>
				{divs.map((item: any) => { return item.jsx })}
			</div>
		</>
	)
}
