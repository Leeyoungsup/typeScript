import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <h1 style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>
          Home
        </h1>
      </Link>

      <Link href="/about">
        <h1 style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}>
          about
        </h1>
      </Link>
    </nav>
  );
}
