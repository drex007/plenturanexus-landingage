import React from 'react'

const ProjectDescriptionCard = () => {
    return (
        <div className="shadow-xl pt-0 font-sora w-[90vw] mx-auto -mt-20 " >
            <div className='grid grid-cols-4 w-full bg-black px-4 justify-items-center rounded-t-2xl'>
                <p className='my-4 text-primary-green font-semibold lg:text-[16px] text-[12px]'>Project</p>
                <p className='my-4 text-primary-green font-semibold lg:text-[16px] text-[12px]'>Description</p>
                <p className='my-4 text-primary-green font-semibold lg:text-[16px] text-[12px]'>Status</p>
                <p className='my-4 text-primary-green font-semibold lg:text-[16px] text-[12px]'>Location</p>
            </div>
            <div className='grid grid-cols-4 px-4 pb-8 bg-black opacity-90 justify-items-center rounded-b-2xl'>
                <div className='text-white lg:text-[12px] text-[8px]'>
                    <p className='my-4'>Ogbomosho Agro-Industrial Estate</p>
                    <p className='my-4'>Calabar Cocoa Farmstead</p>
                    <p className=''>Cross River Strategic Farming (1k & 5k ha)</p>

                </div>
                <div className='text-white lg:text-[12px] text-[8px]'>
                    <p className='my-4'>1,500 ac integrated farm, R&D hub, eco-resort</p>
                    <p className='my-4'>1.2 ha leased mechanized cocoa farm</p>
                    <p className=''>Large-scale JV + lease farming in JV/profit-share mode</p>

                </div>
                <div className='text-white lg:text-[12px] text-[8px]'>
                    <p className='my-4'>Pilot phase</p>
                    <p className='my-4'>Feasibility</p>

                </div>
                <div className='text-white lg:text-[12px] text-[8px]'>
                    <p className='my-4'>Oriire LGA, Ogbomosho</p>
                    <p className='my-4'>Cross River State</p>
                </div>
            </div>



        </div>
    )
}

export default ProjectDescriptionCard
