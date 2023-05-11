'use client'
import { Roboto } from 'next/font/google'
import { Inter } from 'next/font/google'
import Tabs from './components/tabs.js'
import { useState } from 'react'
import Chart from './components/chart.js'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: '900',
})
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [category, setCategory] = useState(0)
  function toggleCategory(c) {
    setCategory(c)
  }

  return (
    <main>
      {/* header */}
      <div className="grid grid-cols-2 h-60 bg-neutral">
        <div className="py-16 pl-32 text-6xl">
          <div className='text-error'>
            <h1 className={roboto.className}>bitch,</h1>
          </div>
          <div className='text-base-100'>
          <h1 className={roboto.className}>get some help.</h1>
          </div>
        </div>
        <div className="pt-28 pl-5 text-xl text-base-100">
        <p className={inter.className}>Psychoanalyzing the barkada, one test at a time.</p>
        </div>
      </div>

      {/* tabs for display filtering */}
      <Tabs category={category} toggle={toggleCategory}/>
      <Chart category={category}/>
    </main>
  )
}
