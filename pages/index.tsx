import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LambdaCode | Home</title>
      </Head>
      <div>
        <Navbar />
        <div>
          <div className="flex items-center justify-center gap-40">
            <div>
              <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-megrim text-6xl font-bold text-transparent">
                LambdaCode
              </h1>
              <p className="text-l text-slate-300">The Language For Tomorrow</p>
            </div>
            <div>
              <Image src="/img/img1.png" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
