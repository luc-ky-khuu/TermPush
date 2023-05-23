import React, { useState, useEffect } from 'react'
import AddReactElement from '../../components/addReactElement'
import FeaturesSearchBar from './layout';

export default function addDiv(): JSX.Element {
	let [selected, setSelected] = useState<HTMLElement>();
	let [currentRef, setCurrentRef] = useState<any>();
	let [selectedIndex, setSelectedIndex] = useState<string>();
	useEffect(() => {
	}, [selected]);
	const onSelect = (targetId, elementId, index) => {
		setSelected(targetId);
		setCurrentRef(elementId);
		setSelectedIndex(index);
	};
	const handleClick = (type, classes) => {
		if (!currentRef) return;
		currentRef.current.addElement(type, classes);
	};
	const removeElement = () => {
		if (!currentRef) return;
		currentRef.current.removeElement(selectedIndex);
	}
	return (
		<FeaturesSearchBar>
			<div id='mainContainer' className='grid grid-cols-5 place-items-start w-full h-full'>
				<div className='col-span-1'>
					<p>Controls</p>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleClick('h1', [])}>Add h1</button>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleClick('div', ['div-hover'])}>Add div</button>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleClick('p', [])}>Add p</button>
					<button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => removeElement()}>Remove</button>

				</div>
				<div id='template-container' className='col-span-4 w-full h-full'>
					<AddReactElement key='testing' selected={selected} onSelect={onSelect} element={{ type: 'div', children: [], classes: ['w-full h-full'], text: 'test', id: 'div0'}}/>
				</div>
			</div>
		</FeaturesSearchBar>
	)
}
