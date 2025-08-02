import React from 'react'
import { nexusWhatWeDo } from '../assets'

const WhatWeDo = () => {
    return (
        <div className='bg-primary-sky-blue w-full font-sora flex flex-1 p-16 space-x-16 text-[12px]'>
            <div className='flex-[0.6]'>
                <p className='my-4 text-[60px]'>What We Do </p>
                <p>At Plentura Nexus, opportunity isn’t stumbled upon—it’s engineered. As an execution hub and export gateway, we structure, mobilize, and execute bold ideas into scalable, real-world impact. From high-value agriculture and PPP infrastructure to export-grade processing and global trade facilitation, we activate value chains, align stakeholders, and bridge the gap between vision and implementation.

                </p>
                <p className='text-[30px] my-8'>Our Services:</p>

                <p className='my-6'><span className='font-semibold'>1. Export & Global Trade:</span><br></br>
                    We lead the export of high-quality agricultural commodities—building structured trade ecosystems, ensuring certification and compliance, and connecting producers to global buyers and markets.<p />

                    <p className='my-6'>
                        <span className='font-semibold'>2. Strategic Ventures & Capital Solutions:</span> <br></br>
                        We create and manage joint ventures, raise and structure capital (equity, debt, blended finance), and oversee SPV and asset management across agriculture, infrastructure, energy, and technology.
                    </p>

                    <p className='my-6'>

                        <span className='font-semibold'>3. Project Advisory & Infrastructure Delivery:</span><br></br>
                        We support governments, developers, and investors with feasibility studies, regulatory navigation, technical design, and turnkey delivery of large-scale infrastructure and PPP projects.
                    </p>

                    <p className='my-6'>

                        <span className='font-semibold'> 4. Agriculture & Value Chain Development:</span><br></br>
                        We operate across the agricultural value chain—from farm production and mechanization to processing, input supply, and value-addition—driving productivity and sustainability.</p>

                </p>

            </div>
            <div className='flex-[0.4]'>
                <img src={nexusWhatWeDo} alt="Export of agro products" className='' />
            </div>
        </div>
    )
}

export default WhatWeDo
