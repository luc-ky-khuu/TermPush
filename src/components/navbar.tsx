import { useState } from 'react';

export default function NavBar({props}: any) {
    const [drawerStatus, changeDrawer] = useState<String>('hidden')
    const [dropdownStatus, changeDropdown] = useState<String>('hidden')
    
    const toggleDrawer = () => {
        changeDrawer(drawerStatus === 'hidden' ? '' : 'hidden');
    };
    const toggleDropdown = () => {
        changeDropdown(dropdownStatus === 'hidden' ? '': 'hidden')
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-zinc-900 p-6">
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
                    <button id="dropdownDefaultButton" onClick={() => toggleDropdown()} className="block mt-4 lg:inline-block lg:mt-0 text-sky-500 hover:text-white mr-4" type="button">
                        Features 
                        <svg className="inline-block w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div id="dropdown" className={`z-10 fixed bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${dropdownStatus}`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="/makeDivs" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">makeDivs</a>
                            </li>
                            <li>
                                <a href="/Template1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Template1</a>
                            </li>
                        </ul>
                    </div>
                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-sky-500 hover:text-white">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}