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
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
                
                {/* Links Section - Dark Theme */}
                <div className='flex gap-2 mt-2.5'>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm'
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-gray-800 text-white rounded-md hover:bg-black transition-all shadow-sm'
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
              
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='' className='w-5' />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Work;