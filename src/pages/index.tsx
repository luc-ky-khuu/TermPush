import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../app/page.module.css'
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [name, setName] = useState('');

  function test(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    Router.push(`/${name}`)
  }

  const setInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let input:string = event.target.value;
    setName(input);
  }

  return (
    <main>
      <h1>Enter name below</h1>
      <form onSubmit={test}>
        <label htmlFor='nameInput'>Name</label>
        <input type='text' id='nameInput' name='nameInput' value={name} onChange={(event) => setInput(event)}/>
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}
