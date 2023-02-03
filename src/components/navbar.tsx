export default function NavBar({props}: any) {
    return (
        <ul className="flex">
            <li className="mr-6">
                <a className="text-blue-500 hover:text-blue-800" href="/">Home</a>
            </li>
            <li className="mr-6">
                <a className="text-blue-500 hover:text-blue-800" href="/makeDivs">makeDivs</a>
            </li>
            <li className="mr-6">
                <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
            <li className="mr-6">
                <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
            </li>
        </ul>
    )
}