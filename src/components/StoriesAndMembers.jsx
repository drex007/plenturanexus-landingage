import React from 'react'
import { phone, phone2 } from '../assets'

const StoriesAndMembers = () => {
    return (
        <div className='font-sora  '>

            <img src={phone2} alt="" className=' flex lg:hidden' />

            <div className='bg-black relative'>
                <div className="shadow-xl pt-0 font-sora w-[90vw] mx-auto bg-gradient-to-b from-[#575757] to-black rounded-t-[40px]  relative z-50 -mt-[8%]" >
                    <div className='w-full bg-black px-4 justify-items-start rounded-[30px] absolute -mt-5 py-1'>
                        <p className='my-2 text-primary-green capitalize lg:text-[35px] text-[25px] flex lg:justify-start justify-center rounded-[40px] w-full '>NEWS & STORIES</p>

                    </div>
                    <div className=' px-4 pb-8  justify-items-start rounded-b-2xl lg:py-16 py-8 '>
                        <div className='text-white lg:text-[12px] text-[8px]'>
                            <p className='my-4'><span className='text-primary-green font-semibold'>Milestones:</span> land acquisitions, project launches, production kick-offs</p>

                            <p className='my-4'><span className='text-primary-green font-semibold'>Blog Stories:</span> insights on agri-innovation, PPP best practices, export trends</p>

                            <p className='my-4'><span className='text-primary-green font-semibold'>Press Releases:</span> media coverage, partnership announcements</p>

                            <p className='my-4'><span className='text-primary-green font-semibold'>Community Impact:</span> jobs created, training programs, ESG highlights</p>

                        </div>

                    </div>


                </div>
                <div className="shadow-2xl pt-0 font-sora w-[90vw] mx-auto bg-gradient-to-b from-[#575757] to-black opacity-85 rounded-t-[40px] mt-32 -z-[10]" >
                    <div className='px-8 rounded-[40px] w-full bg-black   py-1'>
                        <p className='my-4 text-primary-green  lg:text-[35px] text-[20px] capitalize flex lg:justify-start justify-center '>MEET OUR MEMBERS</p>

                    </div>
                    <div className=' p-8  lg:justify-items-start justify-items-center rounded-b-2xl'>
                        <div className='text-white lg:text-[12px] text-[8px]'>
                            <p> <span className='font-semibold text-white text-center'>1. Eghosa Okpoko </span> - Founder & Strategic Lead</p>
                            <p> <span className='font-semibold text-center'>2. David Ochoga</span> - Co-Founder & Chief Growth & Partnerships Officer</p>
                            <p> <span className='font-semibold text-center'>3. Rhema Ikokwu</span> - Co-Founder & Chief Operating Officer</p>
                            <p> <span className='font-semibold text-center'>4. Wutem Obi</span> - Director of People, Culture & Strategic Inclusion </p>

                        </div>

                    </div>

                </div>

                <img src={phone} alt="" className='hidden z-[50]  lg:flex absolute justify-items-end top-0 -mt-[55vh] w-1/2 right-0' />
            </div>

        </div>
    )
}

export default StoriesAndMembers
