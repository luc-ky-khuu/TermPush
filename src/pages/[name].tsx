import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
export default function Testing() {
    const router = useRouter();
    const { name } = router.query;
    const backToHome = () => {
        router.push('/');
    };
    
    return (
        <main>
            <h1>{name} sucks</h1>
            <button type='button' onClick={backToHome}>Back</button>
        </main>
    );
}
