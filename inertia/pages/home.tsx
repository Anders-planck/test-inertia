import { Head } from '@inertiajs/react'
import React from 'react'

export default function Home() {
  const [count, setCount] = React.useState(0)

  const increment = () => setCount((prev) => prev + 1)
  return (
    <>
      <Head title="Homepage" />

      <div className="container mx-auto my-3">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <p className="text-lg">Count: {count}</p>
        <button
          onClick={increment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>
      </div>
    </>
  )
}
