import { useState, createElement, useEffect } from 'react';
import { pageElementObject } from '@/interface/AddElementTestPage.interface';

/**
 * AddReactElement takes in one necessary prop 'element'
 * 'element' structure is defined in interface pageElementObject
 * @param {Object} props 
 * @returns React Element
 */

export default function AddReactElement({ ...props }): JSX.Element {
	const elementToRender = props.element;
	let [pageElement, setPageElement] = useState<pageElementObject>(elementToRender);
    useEffect(() => {}, []);

   const addElement = (element: string, classes: Array<string>) => {
		classes.push('ml-3') // push nested elements to the right to help visualize nesting, can be removed.
        const newChildElement = 
        {
            element: element,
            children: [],
            classes: classes,
            text: `${element}`,
        }
        // add desired element to the children array of the selected component, then update state.
		pageElement.children.push(newChildElement);
        setPageElement({...pageElement});
   };

   const renderPageElements = (pageElementObject: pageElementObject) => {
        const { element, children, classes, text } = pageElementObject;
        // these are just buttons to test out adding, will be removed later in final product.
        const addButtons = (
            <>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('h1', [])}>Add h1</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('div', [])}>Add div</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('p', [])}>Add p</button>
            </>
        );
        //added text as first item in array.
        const reactChildren: Array<any>= [text];
        //if there are any nested (children) elements, render recursively
        if (children.length > 0) {
            for (let i = 0; i < children.length; i++) {
                reactChildren.push(<AddReactElement element={children[i]}/>);
            }
        };
        //add buttons for ability to keep adding, will be removed later in final product.
        reactChildren.push(addButtons);
		
        return createElement(element, { className: classes.join(',')}, reactChildren);
   };

	return (
		<>
			{renderPageElements(pageElement)}
		</>
	)
}