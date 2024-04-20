import React from 'react'
import WhiteLogo from '../assets/whiteLogo.png'
import { technologies, ourServices } from '../constants'

const Footer = () => {
  return (
    <div className='flex flex-wrap footer-container w-full bg-[#6B3CC9] text-white mx-auto'>
        <div className='flex-wrap md:mx-20 md:my-10 flex md:flex-nowrap col-span-3 gap-10 w-full justify-between max-sm:mx-[5px] mx-auto max-md:p-[20px]'>
            <div className='sm:w-full mx-auto gap-3'>
                <div className='lg:w-[413px]'>
                    <img src={WhiteLogo} alt=''/>
                    <p className='text-base font-normal mt-[10px]'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.</p>
                </div>
            </div>
            <div className='gap-3 w-[350px] font-inter'>
                <h3 className='font-semibold text-[21px]'>Our Technologies</h3>
                <ul className='text-sm'>
                {technologies.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            </div>
            <div className='gap-3 w-[255px] font-inter'>
                <h3 className='font-semibold text-[21px]'>Our Services</h3>
                <ul className='text-sm'>
                    {ourServices.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='flex justify-center w-full items-center'>
            <div className='flex flex-row my-3 font-inter text-[14px] font-medium border-t-2 gap-[8px] pt-2'>
                <p className='ml-[30px] md:ml-[200px] lg:ml-[300px]'>Privacy Policy</p>
                <span className='mx-[5px]'>|</span>
                <p className='mr-[30px] md:mr-[200px] lg:mr-[300px]'>Terms & Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
