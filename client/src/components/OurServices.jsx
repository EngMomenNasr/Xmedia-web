import React from 'react';
import ServiceCard from './ServiceCard';
import DottedButton from './DottedButton';

function OurServices() {
  return (
    <section className="bg-slate-900">
      <div className='container mx-auto p-10 text-white overflow-clip'>
        
        <div className='w-full text-center mb-10'>
          <h3 className='text-xl text-red-700 mb-10' data-aos="fade-up" data-aos-duration="1200">Our Services</h3>
          <p className='text-5xl font-bold mb-10' data-aos="fade-up" data-aos-duration="1600">Our Palette of Expertise</p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <div data-aos="fade-right" data-aos-duration="1200">
            <ServiceCard 
              icon="/digital-marketing-ic.svg" 
              title="Digital Marketing" 
              description="Campaigns that convert—ads, email, SEO & analytics."
              to="/services/digital-marketing"  // مسار ديناميكي
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1200">
            <ServiceCard 
              icon="/social-media-management.svg" 
              title="Social Media Management" 
              description="Content, design & engagement—managed by experts."
              to="/services/social-media-management"
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="1200">
            <ServiceCard 
              icon="/connect-ic.svg" 
              title="Content Creation" 
              description="Words that sell. Stories that connect."
              to="/services/content-creation"
            />
          </div>
          <div data-aos="fade-right" data-aos-duration="1200">
            <ServiceCard 
              icon="/web-development-ic.svg" 
              title="Web Development" 
              description="Responsive, fast & secure websites tailored to your brand."
              to="/services/web-development"
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="1200">
            <ServiceCard 
              icon="/mobile-apps.svg" 
              title="Mobile Apps" 
              description="iOS & Android apps built to engage and perform."
              to="/services/mobile-apps"
            />
          </div>
        </div>

        <div className='w-full flex justify-center mt-10' data-aos="fade-up" data-aos-duration="800">
          <DottedButton name="Load more" to="/services" />
        </div>

      </div>
    </section>
  );
}

export default OurServices;
