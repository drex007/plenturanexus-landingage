import React, { useEffect, useState } from 'react'
import { locationIcon, messageIcon, worldIcon } from '../assets'
import { FaArrowUp } from "react-icons/fa6";
import { Link } from 'react-scroll'

// const Footer = () => {
//     return (
//         <div className='bg-black text-white font-sora flex flex-col justify-center items-center'>
//             <p className='lg:text-[40px] text-[30px] text-primary-green'>CONTACT US</p>
//             <p className='text-primary-green text-[15px]'>Official Addresses :</p>
//             <p className='text-[12px]'>Nigeria & Canada Office</p>

//             <div className='flex flex-col items-center mt-4'>
//                 <p className='text-primary-green text-[15px]'>Email Adresses :</p>
//                 <p className='text-[12px]'>info@plenturanexus.com, plenturanexus@gmail.com</p>

//             </div>
//             <div className='flex flex-col items-center my-4'>
//                 <p className='text-primary-green text-[15px]'>Phone Numbers :</p>
//                 <p className='text-[12px]'>+234 810 430 9054, +1 (613) 218-9027</p>
//             </div>

//             <p className="lg:text-[12px] text-[10px] py-2 flex justify-center">© 2025 plenturanexus</p>
//         </div>
//     )
// }

// export default Footer
const Footer = () => {
    const [currentWidth, setCurrentWidth] = useState(null)
    useEffect(() => {

        setCurrentWidth(window.innerWidth)

    }, [])

    return (
        <div className='bg-black text-white font-sora'>
            <div className='flex justify-end mx-4 pt-4'>
                <Link
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={1000}
                >

                    <FaArrowUp className='bg-white rounded-full lg:py-4 py-2 cursor-pointer' color='green' size={currentWidth < 1200 ? 40 : 60} />
                </Link>
            </div>

            <p className='flex justify-center lg:text-[20px] text-[15px]  pt-4 font-semibold'></p>
            <div className='flex justify-start  space-x-2 w-full px-4 my-2 items-center '>
                <img src={messageIcon} className='w-[20px]' />
                <p className='flex justify-center lg:text-[12px] text-[10px]'>info@plenturanexus.com | plenturanexus@gmail.com </p>
            </div>

            <div className='flex justify-start  space-x-2 w-full px-4 '>
                <img src={worldIcon} className='w-[20px]' />
                <p className='flex justify-center lg:text-[12px] text-[10px] items-center'>www.plenturanexus.com</p>
            </div>
            <div className='flex justify-start  space-x-2 w-full px-4 my-2 items-center  '>
                <img src={locationIcon} className='w-[20px]' />
                <p className='flex justify-center lg:text-[12px] text-[10px]'>Nigeria & Canada Office</p>
            </div>

            <p className='flex justify-center lg:text-[15px] text-[12px] lg:px-0 px-4 py-4 text-center'>At plenturanexus,  we are boosting production,distribution and export of agricultural products</p>
            <div className=' grid lg:grid-cols-4 grid-cols-2 lg:gap-y-0 gap-y-2 lg:gap-x-0 gap-x-32 text-white font-fractul px-4 py-4  lg:text-[14px] text-[10px]'>
                <div>
                    <p className='font-semibold lg:text-[16px] text-[14px] text-primary-light-green'>Quick Links</p>

                    <p className='my-2 cursor-pointer'>Contact Us</p>
                </div>
                <div>
                    <p className='font-semibold lg:text-[16px] text-[14px] text-primary-light-green'>Products</p>

                    <p className='my-2 cursor-pointer'>Product page</p>

                </div>
                <div>
                    <p className='font-semibold lg:text-[16px] text-[14px] text-primary-light-green'>Explore</p>

                    <p className='my-2 cursor-pointer'>Our Team</p>

                </div>
                <div>
                    <p className='font-semibold lg:text-[16px] text-[14px] text-primary-light-green'>Company</p>

                    <p className='my-2 cursor-pointer'>Privacy Policy</p>
                </div>

            </div>
            <p className="lg:text-[12px] text-[10px] py-4 flex justify-center">© 2025 Plenturanexus</p>
        </div>
    )
}

export default Footer
