import React from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      id='work' 
      className='w-full px-[7%] py-10 scroll-mt-20'
    >
      <h4 className='text-center mb-2 text-lg font-ovo'>My portfolio</h4>
      <h2 className='text-center text-5xl font-ovo'>My latest work</h2>
      
      <div className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {workData.map((project, index) => (
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }} 
            key={index} 
            className='aspect-video bg-no-repeat bg-cover bg-center rounded-lg relative group cursor-pointer'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* The White Box: Changed to w-max and added max-w-[90%] */}
            <div className='bg-white w-max max-w-[90%] rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-3 sm:py-3 sm:px-5 flex items-center justify-between gap-4 duration-500 group-hover:bottom-7 shadow-xl'>
              <div>
                <h2 className='font-semibold text-sm sm:text-base whitespace-nowrap'>{project.title}</h2>
                <p className='text-[10px] sm:text-sm text-gray-700 leading-tight hidden sm:block'>{project.description}</p>
                
                <div className='flex gap-2 mt-1.5 sm:mt-2'>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='flex items-center gap-1 px-2 py-1 text-[9px] sm:text-xs font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all'
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='flex items-center gap-1 px-2 py-1 text-[9px] sm:text-xs font-semibold bg-gray-800 text-white rounded-md hover:bg-black transition-all'
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
              
              <div className='border rounded-full border-black w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center shadow-[1px_1px_0_#000] group-hover:bg-lime-300 transition flex-shrink-0'>
                <Image src={assets.send_icon} alt='' className='w-4 sm:w-5' />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Work;