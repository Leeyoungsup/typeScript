import { useSubscription } from '@apollo/client';
import React, { useEffect } from 'react';
import { RESULTS_SUBSCRIPTION } from '../graphql/subscriptions/ResultsSubscriptions';

type TerminalComponentTypes = {
  results: {
    result: string;
  };
};

export default function TerminalComponent() {
  /* const { data, loading } = useSubscription<TerminalComponentTypes, boolean>(RESULTS_SUBSCRIPTION);
  if (loading) return <p>Loading...</p>;
  if (data) { 
    console.log(data)
    const result = data.results.result.split('\r\n').slice(0, -1)
     */
  /*   return (
      <div className='mt-5'>
        {result.map((line:any, index:any) => (
      <p key={index}><span className='ml-5  w-8 inline-block'>{index + 1}.</span><span className='inline-block'>{line}</span> </p>
      ))}

      </div>
      
      )
    } */
  return <h1> Terminal</h1>;
}
