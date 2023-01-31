import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { type } from 'os';

abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Player extends User {
  getNickName(): void {
    console.log(this.nickname);
  }
}

const nico = new Player('asd', 'asd1', '12333');

nico.getNickName();

export default function Home() {
  return (
    <>
      <Head>
        <title>nico.getFullName</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p></p>
        </div>
      </main>
    </>
  );
}
