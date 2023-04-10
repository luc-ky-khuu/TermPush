import React, { useState, useEffect } from 'react'
import AddReactElement from '../../components/addReactElement'
import FeaturesSearchBar from './layout';

export default function addDiv(): JSX.Element {
	let [selected, setSelected] = useState<HTMLElement>();
	let [currentRef, setCurrentRef] = useState<any>();
	useEffect(() => {
	}, [selected]);
	const onSelect = (targetId, elementId) => {
		setSelected(targetId);
		setCurrentRef(elementId);
	};
	const handleClick = (type, classes) => {
		if (!currentRef) return;
		currentRef.current.addElement(type, classes);
	};
	return (
		<FeaturesSearchBar>
			<div id='mainContainer' className='grid grid-cols-5 place-items-start w-full h-full'>
				<div className='col-span-1'>
					<p>Controls</p>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleClick('h1', [])}>Add h1</button>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleClick('div', [])}>Add div</button>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleClick('p', [])}>Add p</button>
				</div>
				<div className='col-span-4 w-full h-full'>
					<AddReactElement key='testing' selected={selected} onSelect={onSelect} element={{ type: 'div', children: [], classes: ['w-full h-full'], text: 'test', id: 'div0'}}/>
				</div>
			</div>
		</FeaturesSearchBar>
	)
}
