import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/NavBar'

export default function Home() {
  return (
    <div className="min-h-screen animate-grad_xy flex-col items-center bg-gradient-to-tr from-fuchsia-900 to-indigo-800">
      <Head>
        <title>LambdaCode | Home</title>
      </Head>
      <Navbar />
      {/* <div className="flex min-h-screen items-center justify-center"> */}
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div>
            <h1 className="animate-pulse animate-grad_x bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text font-nunito text-8xl font-bold text-transparent drop-shadow-2xl md:text-3xl lg:text-8xl">
              LambdaCode
            </h1>
            <p className="animate-pulse font-ubuntu text-xl">
              A Language Of Tomorrow
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
