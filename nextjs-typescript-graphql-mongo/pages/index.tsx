import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const numbers: readonly number[] = [1, 2, 3, 4];
const player: [string, number, boolean] = ['nico', 1, true];

const a: number[] = [1, 2, 3, 4];
const b: any = true;
a + b;
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>{a + b}</p>
        </div>
      </main>
    </>
  );
}
