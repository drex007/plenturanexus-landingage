import React, { useState, useEffect } from 'react'
import { arrowback, arrowfront, womanExport, nexusMeeting, nexusAgro } from '../assets'





const CarouselSlider = () => {
    // slides = [0, 1, 2, 3]
    const images = [womanExport, nexusMeeting, nexusAgro,]
    const slideIndex = [0, 1, 2]
    const [currentIndex, setCurrentIndex] = useState(0)
    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length)
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // change every 3 seconds

        return () => clearInterval(interval); // cleanup on unmount
    }, [images.length]);

    return (
        <div className='overflow-hidden md:h-[100vh] lg:h-[120vh] 2xl:h-[90vh] w-full m-auto relative '>

            <div className='flex transition-transform duration-500 w-full'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images?.map((e, i) => {
                    return <img src={e} key={i} className='w-full lg:h-[120vh] h-[95vh] right-1/3 object-cover flex-shrink-0 opacity-100' loading='lazy' 
                    style={{
                        
                        transformOrigin: "center",
                        objectPosition: "50% 70%", // 👈 X% Y%  → push focus to the right
                    }} 
                    
                    />
                })}

            </div>

            <div className='hidden lg:flex absolute top-[35%] h-[10vh] w-full justify-between px-8 items-center z-20   '>
                <div className='rounded-[100px] backdrop-blur-sm bg-transparent px-5 py-4 border'>
                    <img src={arrowback} className='hover:cursor-pointer w-[20px] lg:w-[20px]' onClick={prevSlide} />
                </div>
                <div className='rounded-[100px] backdrop-blur-sm bg-transparent px-5 py-4 border'>
                    <img src={arrowfront} className='hover:cursor-pointer w-[20px] lg:w-[20px]' onClick={nextSlide} />
                </div>

            </div>


            {/* <div className='lg:hidden flex absolute space-x-6 lg:top-[10%] -top-[5%] h-full  justify-center items-center w-full'>
                <button className='rounded-full cursor-pointer bg-yellow-300 py-2 px-6 2xl:w-[200px] 2xl:py-6 lg:w-[140px] text-[12px] font-neulis-semibold' onClick={() => {
                    if (currentIndex !== 1) {
                        window.location.href = "/contact"
                    }
                    else {
                        window.location.href = "/services"
                    }

                }}>Send Quota</button>
                <button className='rounded-full cursor-pointer bg-white py-2 px-6 lg:w-[140px] 2xl:w-[200px] 2xl:py-6 text-[12px] font-neulis-semibold'>Read Reviews</button>

            </div> */}
            {currentIndex == 0 && <div className='flex flex-1 lg:flex-row flex-col w-full justify-between'>
                <div className='absolute z-2 flex lg:hidden justify-center  right-0 mr-5 bg-red-600 w-2/6 -mt-[75vh] bg-transparent border px-2 py-3 rounded-[40px] backdrop-blur-md'>
                    <p className='flex justify-center text-white font-sora text-[10px]' >Partner With Us</p>

                </div>
                <div className='lg:flex-[0.5] absolute lg:top-[70%] top-[70%] bg-transparent border px-6 lg:py-4 py-8 ml-8 rounded-[30px] backdrop-blur-[2px]  justify-start lg:w-1/2 '>
                    <p className='2xl:text-[45px] lg:text-[40px] text-[14px] font-sora text-white w-full '>We Don't Just Grow Ventures,</p>
                    <p className='2xl:text-[45px] lg:text-[40px] text-[14px] font-sora text-white w-full font-semibold'>We <span className='text-primary-green font-semibold'>Engineer The Future!</span></p>
                </div>
                <div className='hidden lg:flex justify-center flex-[0.5] w-1/6 ml-[60vw]  absolute lg:top-[80%] top-[50%] bg-transparent border px-4 py-4 rounded-[40px] backdrop-blur-[4px]'>
                    <p className='flex justify-center text-white font-sora'>Partner With Us</p>

                </div>

            </div>



            }
            {currentIndex == 1 && <div className='absolute lg:top-[70%] top-[50%] h-full  justify-start  px-8 lg:w-1/2 w-full'>
                <p className='2xl:text-[35px] lg:text-[35px] text-[18px] font-sora text-white w-full '>We advocate for best practices and traceable results. We do this by our specialized and thorough procedures </p>
                <p className='2xl:text-[35px] lg:text-[35px] text-[18px] font-sora text-white w-full font-semibold'> <span className='text-primary-green font-semibold'>As builders, we transform business ideas into Establishments by means of trusted models and by providing hands-on technical skills.</span></p>
            </div>}
            {currentIndex == 2 && <div className='absolute lg:top-[70%] top-[50%] h-full  justify-start  px-8 w-full'>
                <p className='2xl:text-[50px] lg:text-[50px] text-[30px] font-sora text-white w-full '>We Don't Just Grow Ventures,</p>
                <p className='2xl:text-[50px] lg:text-[50px] text-[30px] font-sora text-white w-full font-semibold'>We <span className='text-primary-green font-semibold'>Engineer The Future !</span></p>
            </div>}
            <p className='absolute text-white lg:top-[95%] ml-[85vw] font-fractul font-semibold'>plenturanexus.com</p>

            <div className='lg:hidden absolute flex justify-center top-[92%] space-x-4 w-full' >
                {slideIndex?.map((e, i) => <div key={i}
                    className={`${i == currentIndex ? "bg-white" : "bg-gray-400"}  rounded-xl h-[5px] w-[40px] cursor-pointer`}
                    onClick={() => setCurrentIndex(i)}
                >

                </div>)}
            </div>



        </div>
    )
}

export default CarouselSlider
