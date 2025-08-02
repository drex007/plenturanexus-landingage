import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { logo, logoWhite } from '../assets'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";




const Header = ({ isTransparent }) => {
    const [showMenuBar, setShowMenuBar] = useState(false)
    const [currentScreenSize, setCurrentScreenSize] = useState(0)

    useEffect(() => {
        setCurrentScreenSize(window.innerWidth)
    }, [])

    return (
        <div className='lg:px-8 px-2 py-6 h-[80px] w-full z-50 lg:flex  lg:bg-primary-green justify-between absolute top-0'>
            <div className='flex space-x-3 items-center'>
                <img src={logo} className='h-[30px] lg:h-[40px] lg:flex hidden' />
                <img src={logoWhite} alt="" className='h-[30px] lg:h-[40px] flex lg:hidden' />

            </div>
            <div className='hidden lg:flex space-x-8 items-center '>
                <p className='text-white cursor-pointer bg-black px-8 rounded-2xl py-2 lg:text-[12px]' onClick={() => { window.location.href = "/" }}>Explore Projects</p>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={300}

                >
                    <p className='text-white cursor-pointer lg:text-[12px] bg-black px-8 py-2 rounded-2xl'>Invest With Us</p>


                </Link>
                <Link
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}

                >

                    <p className='text-white cursor-pointer lg:text-[12px] bg-black px-8 py-2 rounded-2xl'>Contact Us</p>

                </Link>


                {/* <p className='text-white cursor-pointer lg:text-[14px]' onClick={() => { window.location.href = "/services" }}>Our Services</p> */}







            </div>

            <div className='relative lg:hidden flex justify-end -mt-10'>
                {!showMenuBar && <HiOutlineMenuAlt2 size={40} color={`${!isTransparent ? 'white' : 'green'}`} className='cursor-pointer' onClick={() => setShowMenuBar(!showMenuBar)} />}

                {showMenuBar &&
                    <div className='absolute z-50 transition-transform ease-in duration-9000 lg:hidden -mr-2 flex-col px-4 py-8 h-[100vh] w-4/5 shadow-2xl shadow-gray-500 -mt-5 top-0 bg-primary-green  right-0'>
                        <ImCancelCircle size={30} color='white' className=' cursor-pointer' onClick={() => setShowMenuBar(!showMenuBar)} />
                        <div className='items-center text-white font-fractul  text-[14px] font-semibold'>
                            <p className='text-white cursor-pointer my-4' onClick={() => { window.location.href = "/" }}>Home</p>
                            <hr className='text-white'></hr>
                            {/* <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={20}
                                duration={300}

                            >
                                <p className=' cursor-pointer my-4'>About Us</p>
                            </Link> */}

                            {/* <hr className='text-white'></hr>
                            <Link
                                to="products"
                                spy={true}
                                smooth={true}
                                offset={20}
                                duration={500}

                            >

                                <p className=' cursor-pointer my-4'>Our Products</p>
                            </Link> */}

                            <hr className='text-white'></hr>


                            {/* <p className=' cursor-pointer my-4' onClick={() => { window.location.href = "/services" }}>Our Services</p>


                            <hr className='text-white'></hr> */}
                            {/* <p className=' cursor-pointer my-4'>Our Team</p> */}
                            <hr className='text-white'></hr>

                            <p className=' cursor-pointer my-4' onClick={() => { window.location.href = "/contact" }}>Contact Us</p>





                        </div>

                    </div>

                }
            </div>




        </div>
    )
}

export default Header
