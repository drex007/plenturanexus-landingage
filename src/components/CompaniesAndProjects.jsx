import React, { useState, useContext } from 'react'

import { motion } from 'framer-motion'
import fadeIn from './Variant'

const CompaniesAndProjects = () => {

    return (
        <div className='bg-primary-green-black overflow-hidden lg:pt-0 lg:py-32  pb-32 font-sora bg-primary-sky-blue lg:px-16 px-4 text-[12px] -z-50' id='company-projects'>
            <p className='lg:text-[50px]  text-[35px] flex justify-center text-center'>COMPANIES & POJECTS</p>


            <motion.div

                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
            >
                <p className='my-4 font-semibold lg:text-[20px] flex lg:justify-start justify-center'>Featured Projects</p>
                <div className='lg:px-8 flex flex-col lg:items-start items-center '>
                    <p>· Ogbomosho Agro-Industrial Estate</p>
                    <p>· Calabar Cocoa Processing Facility</p>
                    <p>· Cross River Strategic Farming (1,000 ha JV & 5,000 ha lease)</p>

                </div>


                <div className='grid grid-cols-3'>
                    {[1, 2, 3, 4, 5, 6].map((e, i) => <div key={i} className='lg:w-[350px] lg:h-[300px] w-[100px] h-[100px] rounded-[30px] lg:m-8 m-2 bg-white'>

                    </div>)}

                </div>
            </motion.div>

        </div>
    )
}

export default CompaniesAndProjects
