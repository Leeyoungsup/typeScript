import NavBar from '@/components/NavBar';
import Head from 'next/head';

export default function Potato() {
  return (
    <>
      <Head>
        <title>about</title>
      </Head>
      <main>
        <h1>about</h1>
        <style jsx global>{`
          a {
            color: white;
          }
        `}</style>
      </main>
    </>
  );
}
