import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../src/components/Layout'

import ProfilePic from '../public/images/profile/developer-pic-1.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
    
      </Head>

      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout>
         <div className='flex items-center justify-between w-full'>
            <div>
               <Image src={ProfilePic} alt="Shadab" className='w-full h-auto' />
            </div>
         </div>

        </Layout>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
