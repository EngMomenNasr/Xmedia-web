import React from 'react'
import LinkSection from './LinkSection';

import { HiBriefcase, HiLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { FaFacebook, FaWhatsapp, FaYoutube, FaInstagram    } from "react-icons/fa6";

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Footer() {
    const quickLinks = [
        { text: "About us", href: "/about-details" },
        { text: "Our Team", href: "/team" },
        { text: "Careers", href: "/careers" },
        { text: "FAQs", href: "/faq" },
      ];

      const serviceLinks = [
        { text: "Marketing", href: "/services/digital-marketing" },
        { text: "Media", href: "/services/social-media-management" },
        { text: "Content ", href: "/services/content-creation" },
        { text: "Social Media", href: ""}
      ];

      const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <footer>
<div className="relative">
  <div className="absolute inset-0 flex items-center justify-center">
  <ul ref={ref} className="flex gap-2 md:gap-15 text-white">
  <li className="text-center">
    <h3 className="text-[12px] md:text-2xl font-bold">
      {inView && <CountUp end={8} duration={2} suffix="K+" />}
    </h3>
    <p className='text-[9px] md:text-[14px]'>Happy Client</p>
  </li>
  <li className="text-center">
    <h3 className="text-[12px] md:text-2xl font-bold">
      {inView && <CountUp end={12} duration={2} suffix="K+" />}
    </h3>
    <p className='text-[9px] md:text-[14px]'>Project Done</p>
  </li>
  <li className="text-center">
    <h3 className="text-[12px] md:text-2xl font-bold">
      {inView && <CountUp end={4.8} duration={2} decimals={1} />}
    </h3>
    <p className='text-[9px] md:text-[14px]'>Review Customer</p>
  </li>
  <li className="text-center">
    <h3 className="text-[12px] md:text-2xl font-bold">
      {inView && <CountUp end={10} duration={2} suffix="+" />}
    </h3>
    <p className='text-[9px] md:text-[14px]'>Years Experience</p>
  </li>
</ul>

  </div>
  <div className="p-10 md:p-20 bg-[url('/footer1-bg.webp')] bg-cover bg-center bg-red-900 bg-opacity-40 bg-blend-overlay" />
  <div className="p-10 md:p-20 bg-[url('/footer-bg.webp')] bg-cover bg-center bg-slate-800 bg-opacity-40 bg-blend-overlay" />
</div>

    <div className='bg-red-900'>
    <div class="flex flex-col justify-center items-center p-3 mx-auto overflow-clip">
    <div class="flex flex-wrap justify-center">
        <div class="flex flex-col items-center md:items-start w-[300px] lg:w-[500px] m-[20px]">
            <img src="/logo.png" alt="" width="200px" className='mb-2'/>
            <p class="text-[15px] text-gray-300">We are X Media, an Egyptian digital agency specializing in providing integrated solutions for market events and audience engagement, through expert services including website design and development, application programming, digital marketing, search engine optimization, content creation, and event organization.            </p>
            <li className='flex items-center gap-5 text-slate-900 text-[20px] mt-5'>
                        <a href="" className='hover:bg-slate-300 rounded-full p-1 transition duration-300 text-3xl'><FaFacebook/></a>
                        <a href="" className='hover:bg-slate-300 rounded-full p-1 transition duration-300 text-3xl'><FaWhatsapp/></a>
                        <a href="" className='hover:bg-slate-300 rounded-full p-1 transition duration-300 text-3xl'><FaYoutube /></a>
                        <a href="" className='hover:bg-slate-300 rounded-full p-1 transition duration-300 text-3xl'><FaInstagram /></a>
            </li>
        </div>
        <div class="w-[250px] m-[20px] flex justify-between text-white">
            <LinkSection  title="Quick link" links={quickLinks} />
            <LinkSection title="Service" links={serviceLinks} />
        </div>
        <div className='flex flex-col justify-center items-center mb-2'>
                <h3 className='text-white font-bold text-[22px]'>Contact us</h3>
                <ul className='text-gray-300 mt-4'>
                    <li className='flex items-center gap-2 m-1'>
                        <HiLocationMarker className='text-white' />
                        <span className='text-white'>Cairo, New Cairo, Katameya</span>
                    </li>
                    <li className='flex items-center gap-2 m-1'>
                        <HiBriefcase className='text-white'  />
                        <span><a href="" className='hover:text-slate-900 transition duration-300'>info@xwar.media</a></span>
                    </li>
                    <li className='flex items-center gap-2 m-1'>
                        <HiOutlinePhone className='text-white'  />
                        <span><a href="" className='hover:text-slate-900 transition duration-300'>+201001416700</a></span>
                    </li>
                </ul>

            </div>
    </div>
    <p class="text-[14px] text-slate-900 mt-4 md:mt-2">Copyright © 2025 All rights reserved, X Media</p>
    </div>
    </div>
    </footer>
  )
}

export default Footer;
