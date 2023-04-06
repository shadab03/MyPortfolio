import React from 'react'
import Head from 'next/head'
import Layout from '../src/components/Layout'
import AnimatedText from '../src/components/AnimatedText'
import Image from 'next/image'

import ProfilePic from '../public/images/profile/developer-pic-2.jpg'

import NumIncrement from '../src/components/About/NumIncrement'
import Skills from '../src/components/About/Skills'

const About = () => {
  return (
    <>
    <Head>
        <title>Create Next App</title>
     </Head>

    <main className='w-full flext flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" />
        <div className='grid w-full grid-cols-8 gap-16 pt-10'>
          <div className='col-span-3 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
            <p className='font-medium'>
              Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.
            </p>
            <p className='my-4 font-medium'>
              I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
            </p>
            <p className='my-4 font-medium'>
              Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </div>
          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
            <div className='absolute top-0 right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]] bg-dark' />
            <Image src={ProfilePic} alt={process.env.myName} className='w-full h-auto rounded-2xl' />
                      
          </div>

        <div className='col-span-2 flex flex-col items-end justify-between'>
          <NumIncrement title="Satisfied Clients" num="12" />
          <NumIncrement title="Years Experienced" num="10" />
          <NumIncrement title="Projects Completed" num="18" />
        </div>
        </div>

        <Skills />
      </Layout>
    </main>
    </>
  )
}

export default About