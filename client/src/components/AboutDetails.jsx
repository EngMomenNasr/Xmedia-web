import React, { useEffect, useState } from 'react';

function AboutDetails() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage("url('./land-bg.webp')");
  }, []);

  return (
    <section 
      style={{ backgroundImage: backgroundImage }}
      className="flex min-h-screen bg-cover bg-center lg:bg-left xl:bg-top bg-red-950 bg-opacity-40 bg-blend-overlay text-white px-6 english-text overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mt-30">
          <h3 className="text-xl mb-4 text-left">/ <span className='text-red-600'>About Us</span></h3>
          <h1 className="text-4xl font-bold mt-5">
            Digital expertise that leads you to the top
          </h1>
          <p className='text-xl mt-18 mx-0 md:mx-40'>
            We are X Media, an Egyptian digital agency specializing in providing integrated solutions for market events and audience engagement,
            through expert services including website design and development,
            application programming, digital marketing, search engine optimization, content creation, and event organization.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl">"<span className="font-bold text-red-600">Our vision</span>"</h3>
          <p className='mt-2'>
            To become the first choice in Egypt and the Arab world for smart and creative digital transformation.
          </p>
        </div>

        <div className="text-center mt-15">
          <h3 className="text-xl">"<span className="font-bold text-red-600">Our message</span>"</h3>
          <p className='mt-2'>
            Providing advanced technical and marketing solutions that help brands excel and grow.
          </p>
        </div>

        <div className="text-center my-15">
          <h3 className="text-xl">"<span className="font-bold text-red-600">Our values</span>"</h3>
          <ul className='mt-2'>
            <li>Quality and craftsmanship</li>
            <li>Innovation</li>
            <li>Transparency</li>
            <li>Commitment</li>
            <li>Continuous support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutDetails;
