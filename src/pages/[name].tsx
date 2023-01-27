import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import handler from './api/hello';
export default function testing() {
    const router = useRouter();
    const { name } = router.query;
    const backToHome = () => {
      router.push('/');
    }
    
      return (
        <main>
          <h1>Hello {name}</h1>
          <button type='button' onClick={backToHome}>Back</button>
        </main>
      )
}
