import React from 'react'

import AnimatedNum from './AnimatedNum'


const NumIncrement = ({num, title}) => {
  return (
    <div className='flex flex-col items-end justify-center'>
        <span className='inline-block text-7xl font-bold'>
          <AnimatedNum value={num} />+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75'>{title}</h2>
    </div>
  )
}

export default NumIncrement