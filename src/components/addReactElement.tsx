import { useState, createElement, useEffect } from 'react';
import { pageElementObject } from '@/interface/AddElementTestPage.interface';

/**
 * AddReactElement takes in one necessary prop 'element'
 * 'element' structure is defined in interface pageElementObject
 * @param {Object} props 
 * @returns React Element
 */

export default function AddReactElement({ ...props }): JSX.Element {
    const { element, selected, setSelected } = props
	let [pageElement, setPageElement] = useState<pageElementObject>(element);
    let [idCounter, setIdCounter] = useState<Object>(
        {}
    )
    useEffect(() => {}, []);

    const addElement = (type: string, classes: Array<string>) => {
		classes.push('ml-3') // push nested elements to the right to help visualize nesting, can be removed.
        if (idCounter[type] >= 0) {
            idCounter[type] += 1;
        } else {
            idCounter[type] = 0;
        }
        const newChildElement = {
            type: type,
            children: [],
            classes: classes,
            text: `${type}`,
            id: `${element.id}${type}${idCounter[type]}`
        };

        // add desired element to the children array of the selected component, then update state.
		pageElement.children.push(newChildElement);
        setIdCounter({...idCounter});
        setPageElement({...pageElement});
    };

    const renderPageElements = (pageElementObject: pageElementObject) => {
        const { type, children, classes, text } = pageElementObject; //id here is the child id
        // these are just buttons to test out adding, will be removed later in final product.
        const addButtons = (
            <div className={selected === element.id ? '' : 'hidden'}>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('h1', [])}>Add h1</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('div', [])}>Add div</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('p', [])}>Add p</button>
            </div>
        );
        //added text as first item in array.
        const reactChildren: Array<any>= [text];
        //if there are any nested (children) elements, render recursively
        if (children.length > 0) {
            for (let i = 0; i < children.length; i++) {
                reactChildren.push(<AddReactElement selected={selected} setSelected={setSelected} element={children[i]}/>);
            }
        };
        //add buttons for ability to keep adding, will be removed later in final product.
        reactChildren.push(addButtons);
		
        return createElement(
            type,
            { 
                className: `${classes.join(',')} ${selected === element.id ? 'border-2 border-black' : ''}`,
                id: element.id,
                onClick: (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setSelected(event.target.id);
                }
            },
             reactChildren);
    };

	return (
		<>
			{renderPageElements(pageElement)}
		</>
	)
}