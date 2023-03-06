import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === '/' ? 'choiceTitle' : 'basicTitle'}>
          Home
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a
          className={
            router.pathname === '/about' ? 'choiceTitle' : 'basicTitle'
          }
        >
          About
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration-line: none;
        }
        .choiceTitle {
          color: yellow;
          background-color: red;
        }
        .basicTitle {
          color: yellow;
          background-color: blue;
        }
      `}</style>
    </nav>
  );
}
