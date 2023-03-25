import React, { useEffect, useState, createElement } from 'react'
import CreateDiv from '../../components/makeDivs'
import { IDivProps } from '../../interface/index.interface'

export default function addDiv(): JSX.Element {
    let [pageElements, setPageElements] = useState<Array<Object>>([{ element: 'h1', children: [], classes: [], text: 'test'}]);
    useEffect(() => {})
    interface pageElementObject {
        element: String,
        children: Array<pageElementObject>,
        classes: Array<String>,
        text: String,
    };
   const addElement = (element: String, classes: Array<String>) => {
        const newElement = 
        {
            element: element,
            children: [],
            classes: classes,
            text: `${element}`,
        }

        setPageElements([...pageElements, newElement])
        console.log(pageElements)
   }
   const renderPageElements = (pageElementObject: pageElementObject) => {
        // if (pageElementObject.children.length > 0) {
        //     for (let i = 0; i < pageElementObject.children.length; i++) {
        //         renderPageElements(pageElementObject.children[i]);
        //     }
        // }
        const { element, children, classes, text } = pageElementObject;

        return createElement(element, { className: classes.join(',') }, text )
   };
	return (
		<>
			<div id='mainContainer'>
				{pageElements.map((item: pageElementObject) => renderPageElements(item))}
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('h1', [])}>Add h1</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('div', [])}>Add div</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('p', [])}>Add p</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => addElement('button', ['bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'])}>Add button</button>
			</div>
		</>
	)
}
