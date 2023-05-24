import { useState, createElement, useEffect, useRef, useImperativeHandle } from 'react';
import { pageElementObject } from '@/interface/AddElementTestPage.interface';

/**
 * AddReactElement takes in one necessary prop 'element'
 * 'element' structure is defined in interface pageElementObject
 * @param {Object} props 
 * @returns React Element
 */

export default function AddReactElement({ ...props }): JSX.Element {
    const { element, selected, onSelect, removeParentElement } = props
    const ref = useRef(element.id);

	let [pageElement, setPageElement] = useState<pageElementObject>(element);
    let [idCounter, setIdCounter] = useState<Object>({});
    useEffect(() => {}, []);

    useImperativeHandle(ref, () => ({
        addElement: (type: string, classes: Array<string>) => {
            // switch (type) {
            // }
            /**Cases to add
             * Anchor (a)
             * Lists (li/ul/ol)
             * Images
             * Forms
             * Inputs
             */
            classes.push('w-full mt-3 mb-3 min-h-[50px]') // push nested elements to the right to help visualize nesting, can be removed.
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
                id: `${element.id}${type}${idCounter[type]}`,
                parentRef: ref
            };
    
            // add desired element to the children array of the selected component, then update state.
            pageElement.children.push(newChildElement);
            setIdCounter({...idCounter});
            setPageElement({...pageElement});
        },
    }))

    const removeElement = (index: number) => {
        pageElement.children.splice(index, 1);
        setPageElement({...pageElement});
    };

    const renderPageElements = (pageElementObject: pageElementObject) => {
        const { type, children, classes, text } = pageElementObject; //id here is the child id
        //added text as first item in array.
        const reactChildren: Array<any>= [text];
        //if there are any nested (children) elements, render recursively
        if (children.length > 0) {
            for (let i = 0; i < children.length; i++) {
                reactChildren.push(<AddReactElement selected={selected} onSelect={onSelect} element={children[i]} key={children[i].id} removeParentElement={() => removeElement(i)}/>);
            }
        };
        //add buttons for ability to keep adding, will be removed later in final product.		
        return createElement(
            type,
            { 
                className: `${classes.join(' ')} ${selected === element.id ? 'border-2 border-black selected-hover' : ''}`,
                id: element.id,
                ref: ref,
                suppressContentEditableWarning: true,
                contentEditable: selected === element.id ? true : false,
                onClick: (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    onSelect(event.target.id, ref);
                    
                }
            },
             [<button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={removeParentElement}>remove</button>, ...reactChildren]);
    };

	return (
		<>
			{renderPageElements(pageElement)}
		</>
	)
}