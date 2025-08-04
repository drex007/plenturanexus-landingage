import React from 'react'
import { contactUsImage } from '../assets'

const ContactUsCard = () => {
    return (
        <div className='font-sora w-full lg:my-8 lg:py-32' id='invest'>
            <p className='lg:text-[40px] text-[20px] flex justify-center py-8 font-sora text-gray-500'>HOW TO PARTNER/INVEST</p>

            <div className='w-[100vw] lg:h-[100vh] h-[40vh] left-[10%] lg:bg-contain  bg-cover bg-no-repeat lg:pl-[20vw] lg:pt-[50vh] pt-[10vh] pl-[5vw] ' style={{ backgroundImage: `url(${contactUsImage})`,  backgroundPosition: window.innerWidth < 640 ? "-35vw center" : "-0vw center", }}>
                <button className='rounded-full h-[40px] px-16 py-6 flex justify-center items-center bg-primary-green text-white ' onClick={() => { window.location.href = "/contact" }}>Contact Us</button>

            </div>

        </div>
    )
}

export default ContactUsCard