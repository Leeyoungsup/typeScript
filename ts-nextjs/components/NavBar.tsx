import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <h1 className={router.pathname === '/' ? 'active' : ''}>Home</h1>
      </Link>
      <Link href="/about">
        <h1 className={router.pathname === '/' ? 'active' : ''}>About</h1>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        h1 {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
