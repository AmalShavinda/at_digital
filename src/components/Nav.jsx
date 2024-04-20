import React, { useState } from 'react'
import WhiteLogo from '../assets/whiteLogo.png'
import {navLinks} from '../constants'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Nav = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <header className='w-full bg-primary'>
        <nav className='flex justify-between items-center max-container py-6 padding-x'>
            <a href='/'>              
                <img src={WhiteLogo} alt='Logo' width={238.89} height={25} />
            </a>
            <ul className='flex justify-center items-center gap-16 max-md:hidden max-lg:gap-8'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal max-lg:text-sm text-lg text-white'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div onClick={handleNav} className='md:hidden'>
                {!nav ? <AiOutlineMenu size={30} color='white'/> : <AiOutlineClose size={30} color='white'/>}
            </div>

            {/* Mobile Menu Start */}
            <div className={!nav ? 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-30' : 'fixed top-0 w-[80%] h-full border-r bg-slate-100 left-0 ease-in-out duration-500 z-10'}>
                <ul className='uppercase p-4'>
                {navLinks.map((item) => (
                    <li key={item.label} className='p-4 border-b'>
                    <a href={item.href} onClick={() => setNav(false)} className='font-montserrat leading-normal text-lg text-slate-gray'>
                    {item.label}
                    </a>
                </li>
                ))}  
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Nav
