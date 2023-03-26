import { useState, createElement, useEffect } from 'react';
import { pageElementObject } from '@/interface/AddElementTestPage.interface';

export default function AddReactElement({ ...props }): JSX.Element {    
	const elementToRender = props.element;
	let [pageElement, setPageElement] = useState<pageElementObject>(elementToRender);
    useEffect(() => {}, []);

   const addElement = (element: string, classes: Array<string>) => {
		classes.push('ml-3')
        const newChildElement = 
        {
            element: element,
            children: [],
            classes: classes,
            text: `${element}`,
        }
		pageElement.children.push(newChildElement);
        setPageElement({...pageElement});
   };

   const renderPageElements = (pageElementObject: pageElementObject) => {
        const { element, children, classes, text } = pageElementObject;
        const addButtons = (
            <>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('h1', [])}>Add h1</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('div', [])}>Add div</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('p', [])}>Add p</button>
            </>
        );
        const reactChildren: Array<any>= [text];
        if (children.length > 0) {
            for (let i = 0; i < children.length; i++) {
                reactChildren.push(<AddReactElement element={children[i]}/>);
            }
        };
        reactChildren.push(addButtons);
		
        return createElement(element, { className: classes.join(',')}, reactChildren);
   };

	return (
		<>
			{renderPageElements(pageElement)}
		</>
	)
}