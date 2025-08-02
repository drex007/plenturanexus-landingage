import React from 'react'
import { nexusExport, img1, img2, img3, img4, img5, p1, p2, p3, p4 } from '../assets'
import { motion } from 'framer-motion'
import fadeIn from './Variant'

const bounceTransition = {
    y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeOut",
    }


}


const xbounceTransition = {
    x: {
        duration: 7,
        repeat: Infinity,
        ease: "easeOut",
    }


}


const zbounceTransition = {
    y: {
        duration: 10,
        repeat: Infinity,
        ease: "easeOut",
    }



}


const AboutUs = () => {
    const personsList = [p1, p2, p3, p4]

    return (
        <div className='overflow-hidden bg-primary-sky-blue text-[12px] ' id='about'>
            <div className=' lg:h-[100vh] h-[40vh] w-[100vw]  justify-center overflow-hidden bg-no-repeat p-8 bg-cover' style={{ backgroundImage: `url(${nexusExport})` }}>
                <p className='font-sora text-primary-text-black px-10 p-4 rounded-full border h-[50px] font-semibold text-[20px] flex justify-center items-center ml-[80vw]'>Send Quota</p>
                <p className='font-sora text-primary-text-black px-2 py-8 rounded-[30px] border 2xl:text-[60px] text-[55px] bg-transparent flex justify-center items-center w-2/3 backdrop-blur-md mt-[40vh]'>Explore With Plentura Nexus</p>
            </div>

            {/* //Our Products */}
            <div className='w-2/3 -mt-[5%] bg-white shadow-xl rounded-2xl  my-4  mx-auto z-10 p-4'>
                <p className='flex justify-center text-primary-text-black my-4 font-sora font-semibold'>OUR EXPORT PRODUCTS</p>

                <div className='grid grid-cols-4 gap-x-4 p-4'>
                    <div className='font-sora'>
                        <img src={img1} alt="" className='' />
                        <p className='text-primary-text-green font-semibold text-[20px] flex justify-center my-4'>Raw Cashew Nuts</p>
                        <p className='text-center text-[12px] font-light'>High-yield, export-standard cashews
                            with low moisture sourced for
                            processors worldwide.</p>
                    </div>
                    <div className='font-sora'>
                        <img src={img1} alt="" className='' />
                        <p className='text-primary-text-green font-semibold text-[20px] flex justify-center my-4'>Cocoa Beans</p>
                        <p className='text-center text-[12px] font-light'>Fermented and sun-dried cocoa beans high butter content and deep flavor for chocolate producers.</p>
                    </div>
                    <div className='font-sora'>
                        <img src={img1} alt="" className='' />
                        <p className='text-primary-text-green font-semibold text-[20px] flex justify-center my-4'>Dried Split Ginger</p>
                        <p className='text-center text-[12px] font-light'>Sun-dried ginger (Zingiber officinale), rich in aroma and oils—suitable for food and pharma.
                        </p>
                    </div>
                    <div className='font-sora bg-primary-text-green rounded-full w-[100px] h-[100px] items-center flex flex-col justify-center text-white mt-[5vh] ml-[5vw]'>
                        <p>+</p>
                        <p>See</p>
                        <p>More</p>

                    </div>
                </div>

            </div>

            <div className='flex flex-1 px-16 py-8 font-sora space-x-8 text-[12px] items-center'>
                <div className='flex-[0.5]'>
                    <div className='bg-primary-sky-blue shadow-lg border rounded-xl p-8'>
                        <div className='flex w-full my-4 items-center'>
                            {personsList?.map((e, i) => <img src={e} className={`z-${2* i} w-1/6 -ml-3`} key={i} />)}
                            <div className='bg- rounded-full h-[50px] w-[50px] text-black items-center flex justify-center z-[50] -ml-3'>
                                <p className='font-semibold text-[30px] '>+</p>
                            </div>
                        </div>
                        <p className='font-light'>We co-create, build, scale, and deliver high-impact ventures across agriculture, real estate, infrastructure, energy, and emerging technology engineering sustainable value chains that connect local resources to global markets</p>

                    </div>
                    <div>
                        <p className='fonts-sora my-4 text-[48px] mt-10'>About Plentura Nexus</p>
                        <p className='font-sora font-light text-[12px]'>Plentura Nexus began as a simple idea: pool the strengths of visionaries and capital partners to tackle big projects together. As a dedicated execution powerhouse, we’ve evolved from co-creating cashew and cocoa farms into a full-service platform—structuring, mobilizing, and delivering ventures across multiple sectors. Today, if you want to buy Nigerian cash crops for export, develop a large-scale PPP in any city, or launch an agritech R&D center, you find us—your trusted JV and execution partner</p>
                        <p className='font-sora my-4 font-light text-[12px]'>Plentura Nexus sprang from a simple insight: great projects succeed when visionaries, capital partners, and operators unite. Initially focused on joint-venture cashew and cocoa farms, we’ve become full-service execution arm—structuring, mobilizing, and delivering ventures in agriculture, real estate, infrastructure, energy, technology, and exports. If you need reliable partners to buy or export Nigerian cash-crops, develop city-scale PPPs, or launch an agritech innovation hub, you’ve landed with us.</p>
                    </div>
                </div>
                <div className='flex-[0.5] grid grid-cols-2 items-center px-4 space-x-4'>
                    <div className='space-y-8'>
                        <img src={img3} alt="" className='w-4/5' />
                        <img src={img5} alt="" className='w-4/5' />

                    </div>
                    <div className='space-y-8'>
                        <img src={img1} alt="" className='w-4/5' />
                        <img src={img2} alt="" className='w-4/5' />
                        <img src={img4} alt="" className='w-4/5' />
                    </div>


                </div>
            </div>






        </div>
    )
}

export default AboutUs