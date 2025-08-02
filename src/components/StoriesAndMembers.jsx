import React from 'react'
import { phone } from '../assets'

const StoriesAndMembers = () => {
    return (
        <div className='bg-black p-16 font-sora  relative'>
            <div className="shadow-xl pt-0 font-sora w-[90vw] mx-auto bg-gradient-to-b from-[#575757] to-black opacity-85 rounded-t-[40px] z-50  " >
                <div className='w-full bg-black px-4 justify-items-start rounded-t-2xl'>
                    <p className='my-4 text-primary-green capitalize text-[35px] rounded-[40px] w-full bg-black'>NEWS & STORIES</p>

                </div>
                <div className=' px-4 pb-8  justify-items-start rounded-b-2xl'>
                    <div className='text-white text-[12px]'>
                        <p className='my-4'>Ogbomosho Agro-Industrial Estate</p>
                        <p className='my-4'>Calabar Cocoa Farmstead</p>
                        <p className=''>Cross River Strategic Farming (1k & 5k ha)</p>

                    </div>

                </div>


            </div>
            <div className="shadow-2xl pt-0 font-sora w-[90vw] mx-auto bg-gradient-to-b from-[#575757] to-black opacity-85 rounded-t-[40px] mt-32 -z-[10]" >
                <div className='px-8 rounded-[40px] w-full bg-black   py-1'>
                    <p className='my-4 text-primary-green  text-[35px] capitalize '>MEET OUR MEMBERS</p>

                </div>
                <div className=' p-8  justify-items-start rounded-b-2xl'>
                    <div className='text-white text-[12px]'>
                        <p> <span className='font-semibold text-white'>1. Eghosa Okpoko </span> - Founder & Strategic Lead</p>
                        <p> <span className='font-semibold'>2. David Ochoga</span> - Co-Founder & Chief Growth & Partnerships Officer</p>
                        <p> <span className='font-semibold'>3. Rhema Ikokwu</span> - Co-Founder & Chief Operating Officer</p>
                        <p> <span className='font-semibold'>4. Wutem Obi</span> - Director of People, Culture & Strategic Inclusion </p>

                    </div>

                </div>

            </div>

                <img src={phone} alt="" className='absolute z-[9999] flex justify-items-end top-0 -mt-[30vh] w-1/2 right-0' />

        </div>
    )
}

export default StoriesAndMembers
