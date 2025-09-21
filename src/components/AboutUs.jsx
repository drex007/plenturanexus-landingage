import React from 'react'
import {
    nexusExport, img1, img2, img3, img4, img5, p1, p2, p3, p4, splitGinger,
    cashew,
    cocoaBeans
} from '../assets'
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
            <div className=' lg:h-[100vh] h-[40vh] w-[100vw]  justify-center overflow-hidden bg-no-repeat p-8 lg:bg-cover bg-cover' style={{ backgroundImage: `url(${nexusExport})` }}>
                <p className='hidden lg:flex font-sora text-primary-text-black px-10 p-4 rounded-full border h-[50px] font-semibold text-[20px]  justify-center items-center lg:ml-[80vw]'>Send Quote</p>
                <p className='font-sora text-primary-text-black px-2 py-8 rounded-[30px] border 2xl:text-[60px] lg:text-[55px] text-[20px] bg-transparent flex justify-center text-center items-center lg:w-2/3 w-5/6 backdrop-blur-md lg:mt-[40vh]  lg:mx-0 mx-auto'>Export With Plentura Nexus</p>
                <p className='flex lg:hidden font-sora mt-4 text-primary-text-black px-4 p-4 rounded-full border h-[50px] font-semibold lg:text-[20px] w-1/2  justify-center items-center ml-[8vw]'>Send Quote</p>
            </div>

            {/* //Our Products */}
            <div className='lg:mx-0 mx-4'>
                <div className='lg:w-2/3 w-full -mt-[5%] bg-white shadow-xl rounded-[40px]  my-4  lg:mx-auto  z-10 p-4'>
                    <p className='flex justify-center text-primary-text-black my-4 font-sora lg:text-[25px]'>OUR EXPORT PRODUCTS</p>

                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-x-4 lg:p-4'>
                        <div className='font-sora'>
                            <img src={cashew} alt="" className='' />
                            <p className='text-primary-text-green font-semibold lg:text-[20px] text-[10px] flex justify-center my-4'>Raw Cashew Nuts</p>
                            <p className='text-center text-[10px] font-light'>High-yield, export-standard cashews
                                with low moisture sourced for
                                processors worldwide.</p>
                        </div>
                        <div className='font-sora'>
                            <img src={cocoaBeans} alt="" className='' />
                            <p className='text-primary-text-green font-semibold lg:text-[20px] text-[10px] flex justify-center my-4'>Cocoa Beans</p>
                            <p className='text-center text-[10px] font-light'>Fermented and sun-dried cocoa beans high butter content and deep flavor for chocolate producers.</p>
                        </div>
                        <div className='font-sora'>
                            <img src={splitGinger} alt="" className='' />
                            <p className='text-primary-text-green font-semibold lg:text-[20px] text-[10px] flex justify-center my-4'>Dried Split Ginger</p>
                            <p className='text-center text-[10px] font-light'>Sun-dried ginger (Zingiber officinale), rich in aroma and oils—suitable for food and pharma.
                            </p>
                        </div>
                        <div className='font-sora bg-primary-text-green rounded-full lg:w-[100px] w-[70px] lg:h-[100px] h-[70px]  items-center flex flex-col justify-center text-white lg:mt-[5vh] mt-5 ml-[5vw] lg:text-[10px] text-[12px] cursor-pointer' onClick={() => { window.location.href = "/products" }}>
                            <p>+</p>
                            <p>See</p>
                            <p>More</p>

                        </div>
                    </div>

                </div>
            </div>

            <div className='lg:absolute bg-primary-sky-blue shadow-lg border rounded-[40px] lg:ml-16 lg:mx-0 p-10 lg:w-1/3 w-5/6 lg:my-0  mx-auto'>
                <div className='flex  my-4 items-center'>
                    {personsList?.map((e, i) => <img src={e} className={`z-${2 * i} w-1/5 -ml-3`} key={i} />)}
                    <div className='bg-gray-300 rounded-full h-[50px] w-[50px] text-black items-center flex justify-center z-[50] -ml-3'>
                        <p className='font-semibold text-[30px] '>+</p>
                    </div>
                </div>
                <p className='font-light'>We co-create, build, scale, and deliver high-impact ventures across agriculture, real estate, infrastructure, energy, and emerging technology engineering sustainable value chains that connect local resources to global markets</p>

            </div>
            <div className='flex flex-1 lg:flex-row flex-col lg:px-16 px-4 lg:py-8 font-sora lg:space-x-8 text-[12px] items-center mt-[5vh]'>
                <div className='flex-[0.5] lg:order-1 order-2'>
                    <div>
                        <p className='fonts-sora my-4 lg:text-[48px] text-[25px] flex lg:justify-start justify-center mt-10'>About Plentura Nexus</p>
                        <p className='font-sora font-light text-[12px] flex lg:text-start text-center'>Plentura Nexus began as a simple idea: pool the strengths of visionaries and capital partners to tackle big projects together. As a dedicated execution powerhouse, we’ve evolved from co-creating cashew and cocoa farms into a full-service platform—structuring, mobilizing, and delivering ventures across multiple sectors. Today, if you want to buy Nigerian cash crops for export, develop a large-scale PPP in any city, or launch an agritech R&D center, you find us—your trusted JV and execution partner</p>
                        <p className='font-sora my-4 font-light text-[12px] flex lg:text-start text-center'>Plentura Nexus sprang from a simple insight: great projects succeed when visionaries, capital partners, and operators unite. Initially focused on joint-venture cashew and cocoa farms, we’ve become full-service execution arm—structuring, mobilizing, and delivering ventures in agriculture, real estate, infrastructure, energy, technology, and exports. If you need reliable partners to buy or export Nigerian cash-crops, develop city-scale PPPs, or launch an agritech innovation hub, you’ve landed with us.</p>
                    </div>
                </div>
                <div className='lg:flex-[0.5] lg:order-2 order-1 grid grid-cols-2 items-center px-4 space-x-4'>
                    <div className='space-y-8'>
                        <img src={img3} alt="" className='lg:w-4/5 w-full' />
                        <img src={img5} alt="" className='lg:w-4/5 w-full' />

                    </div>
                    <div className='space-y-8'>
                        <img src={img1} alt="" className='lg:w-4/5 w-full' />
                        <img src={img2} alt="" className='lg:w-4/5 w-full' />
                        <img src={img4} alt="" className='lg:w-4/5 w-full hidden lg:flex' />
                        <div className='h-[200px] w-full lg:hidden flex'></div>
                    </div>


                </div>
            </div>






        </div>
    )
}

export default AboutUs