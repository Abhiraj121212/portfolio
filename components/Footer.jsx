import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo_dark} alt='' className='w-36 mx-auto mb-2' />
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
          iamabhirajsingh2003@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2026 Abhiraj Singh. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/Abhiraj121212">GitHub</a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/abhiraj-singh-562517165/">LinkedIn</a></li>
         
        </ul>
      </div>
    </div>
  )
}

export default Footer