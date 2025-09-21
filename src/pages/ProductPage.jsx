import React from 'react'
import { nexusExport, rawCashew, hisbiscus, sesameSeeds, ginger, cocoa, w1, w2, w3, w4, h1, h2, h3, h4 } from '../assets'
import Footer from '../components/Footer'
import Header from '../components/Header'


const ProductPage = () => {
    const products = [
        {
            title: "Dried Hibiscus Flower",
            image: hisbiscus,
            description: "Premium export-quality hibiscus, sun-dried and vibrant ideal for teas and beverages"
        },
        {
            title: "White Sesame Seeds",
            image: sesameSeeds,
            description: "Sortex cleaned, high oil sesame seeds,export grade, and ready for global markets"
        },

        {
            title: "Raw Cashew Nuts",
            image: rawCashew,
            description: "High-yield, export-standard cashews with low moisture sourced for processors worldwide"
        },
        {
            title: "Dried Split Ginger",
            image: ginger,
            description: "Sun-dried ginger (Zingiber officinale), rich in aroma and oils suitable for food and pharma."
        },

        {
            title: "Cocoa Beans",
            image: cocoa,
            description: "Fermented and sun-dried cocoa beans high butter content and deep flavor for chocolate producers."
        }


    ]
    const whychooseus = [
        {
            title: "Certified Export Quality",
            image: w1,
            description: "We supply only premium-grade products that meet international standards for food safety, purity, and compliance."
        },
        {
            title: "Trusted Global Partnership",
            image: w2,
            description: "We build lasting relationships with buyers worldwide grounded in transparency, integrity, and consistent delivery"
        },

        {
            title: "Efficient & Reliable Logistics",
            image: w3,
            description: "Our streamlined supply chain ensures timely, secure, and traceable shipments to any destination."
        },
        {
            title: "Consistent Product Excellence",
            image: w4,
            description: "Every shipment is carefully sourced, processed, and quality-checked to meet the exact needs of global clients."
        },



    ]

    const howwework = [
        {
            title: "Farming",
            image: h1,
            description: "We operate our own farms and also work closely with trusted local farmers. With sustainable practices and expert field support, we ensure high-quality harvests from start to finish."
        },
        {
            title: "Sourcing & Procurement",
            image: h2,
            description: "We select only the best crops from our farms and partners. Every batch is inspected for moisture, freshness, and purity before approval."
        },

        {
            title: "Processing & Quality Control",
            image: h3,
            description: "Products are cleaned, graded, and packaged using export-standard materials. We meet global standards with SGS inspections and phytosanitary certification."
        },
        {
            title: "Warehousing & Storage",
            image: h4,
            description: "Stored in climate-controlled facilities, our products stay fresh through proper ventilation, pest control, and FIFO inventory management."
        },



    ]
    return (
        <div className=' font-sora '>
            <Header />
            <div className=' lg:h-[100vh] h-[40vh] w-[100vw]  justify-center overflow-hidden bg-no-repeat p-8 lg:bg-cover bg-cover lg:mt-20' style={{ backgroundImage: `url(${nexusExport})`, backgroundPosition: window.innerWidth < 640 ? "-35vw center" : "-0vw center", }}>
                <p className='hidden lg:flex  bg-gradient-radial from-primary-text-green/20 to-primary-text-green from-1% to-99%  px-10 p-4 rounded-full text-white h-[50px] text-[20px]  justify-center items-center lg:mr-[80vw]'>Products</p>
            </div>
            <section className='grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-2 lg:p-16 p-2'>
                {products?.map((e, i) => <div className={`${i === 3 ? "hidden lg:flex flex-col" : "flex flex-col"}`} key={i}>
                    <img src={e?.image} alt="" className='lg:w-[400px] w-[300px] flex mx-auto' />
                    <p className='text-primary-text-green font-semibold text-center flex justify-center my-4'>{e?.title}</p>
                    <p className={`text-center my-2 lg:text-[14px] text-[14px]`}>{e?.description}</p>
                    {/* <p className='px-6 py-2 bg-primary-green rounded-full text-white lg:w-2/4 w-full flex justify-center mx-auto'>See More</p> */}
                </div>)}

            </section>

            <section>
                <p className='flex justify-center my-8 lg:text-[40px] text-[30px]'>Why Choose Us</p>
                <div className='grid lg:grid-cols-2 grid-cols-2 lg:gap-96 gap-2 lg:p-16 p-4'>
                    {whychooseus?.map((e, i) => <div key={i}>
                        <img src={e?.image} alt="" />
                        <p className='text-primary-text-green font-semibold text-center flex justify-center my-4'>{e?.title}</p>
                        <p className='text-center my-4  lg:text-[14px] text-[10px]'>{e?.description}</p>

                    </div>)}

                </div>
            </section>

            <section>
                <p className='flex justify-center my-4 lg:text-[40px] text-[30px]'>How We Work</p>
                <p className='flex justify-center my-4 mx-auto text-center lg:text-[15px] text-[10px] lg:w-1/2 w-full'>At Plentura Nexus, we grow, source, and deliver premium agro commodities through a transparent and efficient system.</p>
                <div className='grid lg:grid-cols-2 grid-cols-2 lg:gap-96 gap-2 lg:p-16 p-4'>
                    {howwework?.map((e, i) => <div key={i}>
                        <img src={e?.image} alt="" />
                        <p className='text-primary-text-green font-semibold text-center flex justify-center my-4'>{e?.title}</p>
                        <p className='text-center my-4  lg:text-[14px] text-[10px]'>{e?.description}</p>

                    </div>)}

                </div>
            </section>
            <section className='bg-black p-2 w-full flex flex-col justify-center items-center'>
                <p className='my-8 p-4 flex justify-center  text-primary-green text-center lg:text-[40px] text-[25px] lg:w-2/3 w-full '>We're Here to Help -Contact Us for Inquiries,Orders or Partnerships.

                </p>
                <p className='my-2 p-4 text-white text-center'>

                    Reach out to us today for seamless trade solutions and expert
                    assistance.</p>

                <p className='my-8 p-4 text-white bg-primary-green rounded-2xl flex justify-center lg:w-1/4 w-1/2 mx-auto cursor-pointer ' onClick={() => { window.location.href = "/contact" }}>Request A Quote</p>
            </section>
            <Footer />
        </div>
    )
}

export default ProductPage