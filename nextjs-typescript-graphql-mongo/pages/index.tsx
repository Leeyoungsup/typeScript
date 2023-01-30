import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { type } from 'os';

type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) => arr[0];
superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(['asd', 1, 2, true]);

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>{superPrint(['asd', 1, 2, true])}</p>
        </div>
      </main>
    </>
  );
}
