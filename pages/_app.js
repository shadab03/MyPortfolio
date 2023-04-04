import '../styles/globals.css'
import { Montserrat} from 'next/font/google'

import Head from 'next/head'

import Navbar from '../src/components/Navbar'

const monst = Montserrat({
  subsets :['latin'], 
  variable :'--font-mont'
})

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={`${monst.variable} font-sans bg-light w-full min-h-screen`}>
      <Navbar />
       <Component {...pageProps} />
    </main>
    </>
   )
}

export default MyApp
