import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceItem from "./ServiceItem";
import { Link } from 'react-router-dom';

function ServiceDetails() {
  const { serviceName } = useParams();

  const servicesData = {
    'digital-marketing': {
        title: "Digital Marketing",
        description: "We craft data-driven digital marketing campaigns to increase your brand visibility, drive quality traffic, and convert visitors into loyal customers across all digital channels.",
        imageSrc: "/sr-digital-marketing.svg",
    },
    'social-media-management': {
        title: "Social Media Management",
        description: "From content creation to analytics, we manage your social media presence to grow your audience, improve engagement, and maintain a strong brand voice.",
        imageSrc: "/sr-social-media-management.svg",
    },
    'content-creation': {
        title: "Content Creation",
        description: "We produce engaging, high-quality content—videos, graphics, blogs, and more—that resonates with your audience and supports your marketing goals.",
        imageSrc: "/sr-content-creation.svg",
    },
    'web-development': {
        title: "Web Development",
        description: "We build fast, responsive, and secure websites tailored to your business needs, ensuring seamless user experiences across all devices.",
        imageSrc: "/sr-wed-development.svg",
    },
    'mobile-apps': {
        title: "Mobile Apps",
        description: "We design and develop mobile applications that are intuitive, feature-rich, and scalable—enhancing your reach on both iOS and Android platforms.",
        imageSrc: "/sr-mobile-apps.svg",
    },
    'seo': {
      title: "SEO",
      description: "We improve your search engine rankings with technical audits, keyword optimization, link building, and performance tracking to boost organic traffic.",
      imageSrc: "/sr-seo.svg",
    },
    'branding': {
      title: "Branding",
      description: "We help define your brand’s identity through logo design, color strategy, tone of voice, and visual guidelines that ensure consistency and recognition.",
      imageSrc: "/sr-branding.svg",
    },
    'events-management': {
      title: "Events Management",
      description: "We plan and execute unforgettable events—from concept to logistics—ensuring flawless delivery and impactful brand experiences.",
      imageSrc: "/sr-events-mangement.svg",
    }
  };

  const service = servicesData[serviceName] || {};

  return (
    <section className="flex flex-col min-h-screen bg-slate-900 text-white px-6 overflow-hidden">
    <div className="container mx-auto mt-10 py-20 text-white">
    <h3 className="text-xl mb-4 text-left">/ <Link to="/services" className='text-red-600 hover:text-red-800'>Services</Link> / {service.title} </h3>
    <div className="service-details">
  <ServiceItem 
    title={service.title}
    description={service.description}
    imageSrc={service.imageSrc}
  />
  <div className="flex justify-center mt-[-30px] md:mt-[-80px] mb-20">
    <Link to="/contact-us" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">
      Start Now
    </Link>
  </div>
</div>

    </div>
    </section>
  );
}

export default ServiceDetails;
