import { useState } from 'react';
import { INavProps } from '../../interface/T1Navbar.interface';

export default function NavBar(navProps: INavProps) {
    const [drawerStatus, changeDrawer] = useState<String>('hidden');
    const [editMenuStatus, changeEditMenu] = useState<String>('hidden');

    const toggleDrawer = () => {
        changeDrawer(drawerStatus === 'hidden' ? '' : 'hidden');
    };

    const toggleEditMenu = () => {
        changeEditMenu(editMenuStatus === 'hidden' ? '' : 'hidden');
    }

    const updateValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const backgroundHex = event.target.navbg.value;
        navProps.updateBackgroundColor(backgroundHex)
    }

    return (
        <nav className={`flex items-center justify-between flex-wrap p-6 bg-[${navProps.backgroundColor}]`}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">TermPush</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => toggleDrawer()} className="flex items-center px-3 py-2 border rounded text-sky-500 border-sky-500 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:show ${drawerStatus}`}>
                <div className="text-sm lg:flex-grow">
                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-sky-500 hover:text-white mr-4">
                        Home
                    </a>
                    <a href="/makeDivs" className="block mt-4 lg:inline-block lg:mt-0 text-sky-500 hover:text-white mr-4">
                        Features
                    </a>
                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-sky-500 hover:text-white">
                        Contact
                    </a>
                </div>
                <div className='relative'>
                    <button onClick={() => toggleEditMenu()}><i className="fa-solid fa-pen-to-square" style={{color:'white'}}></i></button>
                    <div className={`right-0 z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 ${editMenuStatus}`}>
                        <form onSubmit={updateValues} className="p-2 text-sm text-gray-700 dark:text-gray-200">
                            <div className='flex'>
                                <label htmlFor="navbg">NavBar Background Color: </label>
                                <input type="text" id="navbg" name="navbg" className="border-solid border-2 border-black"/>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </nav>
    )
}