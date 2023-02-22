import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === '/' ? 'active titleColor' : ''}>
          Home
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === '/about' ? 'active titleColor' : ''}>
          About
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration-line: none;
        }
        .active {
          color: yellow;
        }
        .titleColor {
          background-color: blue;
        }
      `}</style>
    </nav>
  );
}
