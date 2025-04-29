import React from 'react'

import DottedButton from "./DottedButton"

function AboutUs() {
  return (
    <section className='bg-red-900'>
        <div className='container mx-auto p-10 text-white overflow-clip'>
            <div>
                <h1 className='uppercase font-bold text-4xl md:text-5xl w-full text-center md:text-left' data-aos="fade-right">About us</h1>
            </div>
            <div className=' flex flex-col md:flex-row justify-around mt-5'>
                <div className='w-full md:w-[40%]'>
                    <h3 className='text-[20px] font-semibold text-slate-800 my-4' data-aos="fade-right" data-aos-duration="1500">A Full-Service Digital Agency</h3>
                    <p className='text-gray-300 my-4' data-aos="fade-up" data-aos-duration="2500">At X Media, we design and develop websites, build mobile apps, manage social media, create content, and run impactful marketing campaigns.
                    We craft digital experiences that grow brands.
                    </p>
                    <div className='my-5 md:mt-15 ' data-aos="fade-right" data-aos-duration="800">
                        <DottedButton name="Learn More" to="/about-details" />
                    </div>
                </div>
                <div  data-aos="fade-left" data-aos-duration="800">
                    <img src="/about-us.svg" alt="" width="500px"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs;
