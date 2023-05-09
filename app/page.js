import { Roboto } from 'next/font/google'
import { Inter } from 'next/font/google'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: '900',
})
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      {/* header */}
      <div className="grid grid-cols-2 h-48">
        <div className="py-16 pl-32 text-6xl">
          <div className='text-error'>
            <h1 className={roboto.className}>bitch,</h1>
          </div>
          <div>
          <h1 className={roboto.className}>get some help.</h1>
          </div>
        </div>
        <div className="pt-28 pl-5 text-xl">
        <p className={inter.className}>Psychoanalyzing the barkada based on our Big Five test results</p>
        </div>
      </div>

      {/* tabs for display filtering */}
      <div className="tabs tabs-boxed justify-center my-10 mx-72">
        <a className="tab tab-active">all</a> 
        <a className="tab">openness to experience</a> 
        <a className="tab">conscientiousness</a>
        <a className="tab">extraversion</a>
        <a className="tab">agreeableness</a>
        <a className="tab">neuroticism</a>
      </div>
      
    </main>
  )
}
