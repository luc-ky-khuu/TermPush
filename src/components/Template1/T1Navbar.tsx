import { useState } from 'react';
import { INavProps } from '../../interface/T1Navbar.interface';
import  EditMenu  from '../editMenu';

export default function NavBar(navProps: INavProps) {
    const [drawerStatus, changeDrawerStatus] = useState<String>('hidden');
    const [editMenuStatus, changeEditMenuStatus] = useState<String>('-translate-x-full');

    const toggleDrawer = () => {
        changeDrawerStatus(drawerStatus === 'hidden' ? '' : 'hidden');
    };

    const toggleEditMenu = () => {
        changeEditMenuStatus(editMenuStatus === '-translate-x-full' ? 'translate-x-0' : '-translate-x-full');
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
                <button onClick={() => toggleEditMenu()}>edit</button>
            </div>
            <nav className={`transform fixed top-0 left-0 z-[1035] h-screen w-60 overflow-hidden bg-gray-200 duration-300 ${editMenuStatus}`}>
                {EditMenu()}
            </nav>
        </nav>
    )
}