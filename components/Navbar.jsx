import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => { sideMenuRef.current.style.transform = 'translateX(-16rem)'; }
    const closeMenu = () => { sideMenuRef.current.style.transform = 'translateX(16rem)'; }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsScroll(window.scrollY > 50);
        })
    }, [])

    return (
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-darkTheme/90 backdrop-blur-lg shadow-white/10 shadow-sm" : ""}`}>
            <a href="#top">
                <Image src={assets.logo_dark} alt='William' className='w-28 cursor-pointer mr-14' />
            </a>

          <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "border border-white/50 bg-transparent"}`}>
                <li><a className='font-ovo' href="#top">Home</a></li>
                <li><a className='font-ovo' href="#about">About me</a></li>
                <li><a className='font-ovo' href="#services">Services</a></li>
                <li><a className='font-ovo' href="#work">My Work</a></li>
                <li><a className='font-ovo' href="#contact">Contact me</a></li>
            </ul>

            <div className='flex items-center gap-4'>
                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-white rounded-full ml-4 font-ovo bg-white text-black hover:bg-transparent hover:text-white transition-all duration-300'>
                    Contact <Image src={assets.arrow_icon_dark} alt='' className='w-3' />
                </a>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_white} alt='' className='w-6' />
                </button>
            </div>
            
          <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-darkHover text-white transition duration-500'> <div className='absolute right-6 top-6' onClick={closeMenu}> <Image src={assets.close_white} alt='' className='w-5 cursor-pointer' /> </div>
    
                <li><a className='font-ovo' onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-ovo' onClick={closeMenu} href="#about">About me</a></li>
                <li><a className='font-ovo' onClick={closeMenu} href="#services">Services</a></li>
                <li><a className='font-ovo' onClick={closeMenu} href="#work">My Work</a></li>
                <li><a className='font-ovo' onClick={closeMenu} href="#contact">Contact me</a></li>

</ul>
        </nav>
    )
}

export default Navbar