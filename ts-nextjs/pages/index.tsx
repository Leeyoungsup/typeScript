import { specifiedSDLRules } from 'graphql/validation/specifiedRules';
import Head from 'next/head';
import { NewLineKind } from 'typescript';
import EditorJs, { useState } from 'react';
import NavBar from '@/components/NavBar';

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <NavBar />
        <h1 className="active">Hello</h1>
        <style jsx global>{`
          a {
            color: white;
          }
        `}</style>
      </div>
    </>
  );
}
