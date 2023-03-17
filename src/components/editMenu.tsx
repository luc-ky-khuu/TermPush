import { useState } from 'react';

export default function EditMenu() {
    const [menuItems, changeMenuItems] = useState([
        'Background Color',
        'Text Color',
        'Text Size',
        'Nav Items',
    ]);

    const renderItems = () => {
       return menuItems.map(item => {
            return (
                <>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={item}>
                    {item}
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={item} type="text" placeholder={item}></input>
                </>
            );
        })
    };



    return (
        <>
            {renderItems()}
        </>
    );
}