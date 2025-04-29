import React from 'react'
import PortfolioCard from './PortfolioCard';

function OurPortfolio() {
  return (
    <section className="bg-red-900">
      <div className='container mx-auto p-10 text-white overflow-clip'>
      <div className='w-full text-center mb-10'>
          <h3 className='text-xl' data-aos="fade-up" data-aos-duration="1000">Recent works</h3>
        </div>
        <div className='w-full text-center mb-10'>
          <h1 className='text-5xl font-bold' data-aos="fade-up" data-aos-duration="1000">Featured Projects</h1>
        </div>
        <div className='w-full text-center mb-10'>
          <p className='text-[18px] text-gray-300' data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6">
          <div data-aos="fade-up" data-aos-duration="1000"  >
            <PortfolioCard icon="/footer-bg.webp" title="Only Models" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero eum numquam quam quo nisi fugiat?"/>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000"  >
            <PortfolioCard icon="/services-bg.jpg" title="Only Models" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero eum numquam quam quo nisi fugiat?"/>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000"  >
            <PortfolioCard icon="/services-bg.jpg" title="Only Models" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero eum numquam quam quo nisi fugiat?"/>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000"  >
            <PortfolioCard icon="/footer-bg.webp" title="Only Models" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero eum numquam quam quo nisi fugiat?"/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default OurPortfolio;