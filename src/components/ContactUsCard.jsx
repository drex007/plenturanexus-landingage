import React from 'react'
import { contactUsImage } from '../assets'

const ContactUsCard = () => {
    return (
        <div className='font-sora py-8 w-full my-8'>
            <p className='text-[40px] flex justify-center py-8 font-sora text-gray-500'>HOW TO PARTNER/INVEST</p>

            <div className='w-[100vw] h-[100vh] bg-contain bg-no-repeat pl-[20vw] pt-[50vh] ' style={{ backgroundImage: `url(${contactUsImage})` }}>
                <button className='rounded-full h-[40px] px-16 py-8 flex justify-center items-center bg-primary-green text-white '>Contact Us</button>

            </div>

        </div>
    )
}

export default ContactUsCard