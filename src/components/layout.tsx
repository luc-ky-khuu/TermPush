import Head from './head'
import NavBar from './navbar'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
	<>
		<Head />
		<div className='container mx-auto'>
			<NavBar></NavBar>
			<main>{children}</main>
		</div>
	</>
	)
}
