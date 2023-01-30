import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {

	return (
	<>
		<Head>
			<title>Home Page</title>
			<script src="https://cdn.tailwindcss.com"></script>
			<script src="https://kit.fontawesome.com/ad32dad39c.js" crossorigin="anonymous"></script>
		</Head>
		<main className='container mx-auto'>
			<ul className="flex">
				<li className="mr-6">
					<a className="text-blue-500 hover:text-blue-800" href="#">Active</a>
				</li>
				<li className="mr-6">
					<a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
				</li>
				<li className="mr-6">
					<a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
				</li>
				<li className="mr-6">
					<a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
				</li>
			</ul>
			<Component {...pageProps } />
		</main>
	</>
		
	);
}