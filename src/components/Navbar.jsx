import React from 'react'
import Link from 'next/link'

import Logo from './Logo'

import CustomLink from './CustomLink'
import { LinkedInIcon } from './Icons'

import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
             <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="About" className="mx-4" />
            <CustomLink href="/projects" title="Projects" className="mx-4" />
        </nav>
       
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://linkedIn.com" target="_blank" className='w-6 mr-32'
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}>
                <LinkedInIcon  />
            </motion.a>
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>
    </header>
  )
}

export default Navbar