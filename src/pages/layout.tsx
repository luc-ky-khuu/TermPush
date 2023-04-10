import { useEffect } from 'react'
import Head from '../components/head'
import NavBar from '../components/navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		document.querySelector('body')?.classList.add('mx-auto')
		document.querySelector('body')?.classList.add('justify-center')
	})
	return (
	<>
		<Head />
		<main className='w-screen h-screen bg-white'>
			<NavBar></NavBar>
			<div className='container px-6 mx-auto'>{children}</div>
		</main>
	</>
	)
}
