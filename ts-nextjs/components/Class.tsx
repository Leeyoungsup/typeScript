import React from 'react'
import Link from 'next/link'

type ClassProps = {
    id: String,
    title: String,
    description: String,
    start: String,
    end: String,
    teacher: User ,
    progress: number,
    page: String
}
type User  = {
    name: String
  }

export default function Class({...props }: ClassProps) {
  const link = `/class/${props.id}`
  return (
    <div className='mt-3'>
        <Link href={link} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
        </Link>
    </div>
  )
}
