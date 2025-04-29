import React from 'react';
import ServiceItem from "./ServiceItem";
import DottedButton from './DottedButton';

export default function Services() {
  const services = [
    {
      title: "Digital Marketing",
      description: "We craft data-driven digital marketing campaigns to increase your brand visibility, drive quality traffic, and convert visitors into loyal customers across all digital channels.",
      imageSrc: "/sr-digital-marketing.svg",
    },
    {
      title: "Social Media Management",
      description: "From content creation to analytics, we manage your social media presence to grow your audience, improve engagement, and maintain a strong brand voice.",
      imageSrc: "/sr-social-media-management.svg",
    },
    {
      title: "Content Creation",
      description: "We produce engaging, high-quality content—videos, graphics, blogs, and more—that resonates with your audience and supports your marketing goals.",
      imageSrc: "/sr-content-creation.svg",
    },
    {
      title: "Web Development",
      description: "We build fast, responsive, and secure websites tailored to your business needs, ensuring seamless user experiences across all devices.",
      imageSrc: "/sr-wed-development.svg",
    },
    {
      title: "Mobile Apps",
      description: "We design and develop mobile applications that are intuitive, feature-rich, and scalable—enhancing your reach on both iOS and Android platforms.",
      imageSrc: "/sr-mobile-apps.svg",
    },
    {
      title: "SEO",
      description: "We improve your search engine rankings with technical audits, keyword optimization, link building, and performance tracking to boost organic traffic.",
      imageSrc: "/sr-seo.svg",
    },
    {
      title: "Branding",
      description: "We help define your brand’s identity through logo design, color strategy, tone of voice, and visual guidelines that ensure consistency and recognition.",
      imageSrc: "/sr-branding.svg",
    },
    {
      title: "Events Management",
      description: "We plan and execute unforgettable events—from concept to logistics—ensuring flawless delivery and impactful brand experiences.",
      imageSrc: "/sr-events-mangement.svg",
    },
  ];

  return (
    <section className="flex flex-col min-h-screen bg-slate-900 text-white px-6 overflow-hidden">
      <div className="container mx-auto mt-10 py-20">
        <h3 className="text-xl mb-4 text-left">/ <span className='text-red-600'>Services</span></h3>
        {services.map((service, index) => (
          <ServiceItem 
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            index={index}
          />
        ))}
        <div className="flex justify-center mt-10">
          <DottedButton name="Start Now" to="/contact-us" />
        </div>
      </div>
    </section>
  );
}
