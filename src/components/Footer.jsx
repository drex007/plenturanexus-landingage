import React from 'react'
import { locationIcon, messageIcon, worldIcon } from '../assets'

const Footer = () => {
    return (
        <div className='bg-black text-white font-sora flex flex-col justify-center items-center'>
            <p className='text-[40px] text-primary-green'>CONTACT US</p>
            <p className='text-primary-green text-[15px]'>Official Addresses :</p>
            <p className='text-[12px]'>Nigeria & Canada Office</p>

            <div className='flex flex-col items-center mt-4'>
                <p className='text-primary-green text-[15px]'>Email Adresses :</p>
                <p className='text-[12px]'>info@plenturanexus.com, plenturanexus@gmail.com</p>

            </div>
            <div className='flex flex-col items-center my-4'>
                <p className='text-primary-green text-[15px]'>Phone Numbers :</p>
                <p className='text-[12px]'>+234 810 430 9054, +1 (613) 218-9027</p>
            </div>

            <p className="lg:text-[12px] text-[10px] py-2 flex justify-center">© 2025 plenturanexus</p>
        </div>
    )
}

export default Footer
