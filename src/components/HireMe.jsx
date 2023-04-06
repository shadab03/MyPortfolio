import React from 'react'

import { CircularIcon } from './CircularIcon'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relaitive'>
         <CircularIcon className={`fill-dark animate-spin-slow`} />
         <Link href={`mailto:${process.env.myEmail}`} target={'_blank'} className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark'>Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe