import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ReactDom from 'react-dom';
import './app/globals.css'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Home Page</title>
				<script src="https://cdn.tailwindcss.com"></script>
			</Head>
			<h1>Test</h1>
		</div>
	)
}

export default Home