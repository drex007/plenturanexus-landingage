import React, { useState, useContext } from 'react'

import { motion } from 'framer-motion'
import fadeIn from './Variant'

const CompaniesAndProjects = () => {

    return (
        <div className='bg-primary-green-black overflow-hidden lg:pt-0 py-32 font-sora bg-primary-sky-blue lg:px-16 px-4 text-[12px] -z-50'>
            <p className='text-[50px] flex justify-center'>COMPANIES & POJECTS</p>


            <motion.div

                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
            >
                <p className='my-4 font-semibold text-[20px]'>Featured Projects</p>
                <div className='px-8'>
                    <p>· Ogbomosho Agro-Industrial Estate</p>
                    <p>· Calabar Cocoa Processing Facility</p>
                    <p>· Cross River Strategic Farming (1,000 ha JV & 5,000 ha lease)</p>

                </div>


                <div className='grid grid-cols-3'>
                    {[1, 2, 3, 4, 5, 6].map((e, i) => <div key={i} className='lg:w-[350px] lg:h-[300px] w-[200px] h-[200px] rounded-[40px] lg:m-8 m-2 bg-white'>

                    </div>)}

                </div>
            </motion.div>

        </div>
    )
}

export default CompaniesAndProjects
