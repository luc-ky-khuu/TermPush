import { useEffect } from 'react'
import Head from './head'
import NavBar from './navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		document.querySelector('body')?.classList.add('container')
		document.querySelector('body')?.classList.add('mx-auto')
		document.querySelector('body')?.classList.add('justify-center')
	})
	return (
	<>
		<Head />
		<main className='container bg-white mx-auto h-full'>
			<NavBar></NavBar>
			<div>{children}</div>
		</main>
	</>
	)
}
