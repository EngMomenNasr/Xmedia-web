import React from 'react';

export default function ServiceItem({ title, description, imageSrc, index }) {
  const isEven = index % 2 === 1;
  return (
    <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center my-20`}>
      <div className="md:w-1/2">
        <img src={imageSrc} alt={title} className="hidden md:block w-100 mx-auto" />
      </div>
      <div className="flex flex-col items-center w-full md:w-1/2 text-center md:text-left px-4">
        <h3 className="text-3xl my-4">{title}</h3>
        <img src={imageSrc} alt={title} className="md:hidden w-[250px] mx-auto my-4" />
        <p className="text-left">
          {description}
        </p>
      </div>
    </div>
  );
}
