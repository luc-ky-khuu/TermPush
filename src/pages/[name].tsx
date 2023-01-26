import { useRouter } from 'next/router';

export default function testing() {
    const router = useRouter();
    const { name } = router.query;

    return <h3>Hello {name}</h3>
}
