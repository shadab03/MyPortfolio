import React from 'react'

import {motion} from 'framer-motion'

import {quote, singleWord} from '../common/animateSetting'


const AnimatedText = ({text, className=""}) => {

  return (
    <div className='w-full mx-auto py-2 flext items-center justify-center overflow-hidden'>
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`} variants={quote} 
          initial="initial"
          animate="animate"
        >
            {
            text.split(" ").map((word,index) =>
                <motion.span key={word + '-' + index} className='inline-block' variants={singleWord}>
                    {word}&nbsp;
                </motion.span>
           )
           }
        </motion.h1>
    </div>
  )
}

export default AnimatedText