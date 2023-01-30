import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import '../app/globals.css';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Home Page</title>
				<script src="https://cdn.tailwindcss.com"></script>
				<script src="https://kit.fontawesome.com/ad32dad39c.js" crossorigin="anonymous"></script>
			</Head>
			<h1>Test</h1>
		</div>
	)
}

export default Home