import React from 'react'
import { motion } from 'framer-motion'

import SkillData from '../../../allSkills.json';

const Skill =({props}) =>{
     const {name, x, y, color} = props;
    return (
        <motion.div className={`flex items-center justify-center rounded-full font-semibold text-light py-3 px-6 shadow-dark cursor-pointer absolute ${(color != null ? color : 'bg-dark')}`} 
        whileHover={({scale:1.05})}
        initial ={{x:0,y:0}}
        animate={{x:x,y:y}}
        transition={{duration: 1.5}}>
         {name}
        </motion.div> 
    )
}

const Skills = () => {

  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center'>
        Skills
    </h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularlight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer' 
        whileHover={({scale:1.05})}>
         Web
        </motion.div> 

        {
            SkillData.skill.map((item, index) =>{
                return(
                    <Skill key={item.name} props={item} />
                )
            })
        }

       
    </div>
    </>
  )
}

export default Skills