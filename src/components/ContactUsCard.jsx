import React from 'react'
import { contactUsImage } from '../assets'

const ContactUsCard = () => {
    return (
        <div className='font-sora py-8 w-full my-8'>
            <p className='lg:text-[40px] text-[25px] flex justify-center py-8 font-sora text-gray-500'>HOW TO PARTNER/INVEST</p>

            <div className='w-[100vw] lg:h-[100vh] h-[30vh] lg:bg-contain  bg-cover bg-no-repeat lg:pl-[20vw] lg:pt-[50vh] pt-[10vh] pl-[5vw] ' style={{ backgroundImage: `url(${contactUsImage})` }}>
                <button className='rounded-full h-[40px] px-16 py-6 flex justify-center items-center bg-primary-green text-white '>Contact Us</button>

            </div>

        </div>
    )
}

export default ContactUsCard