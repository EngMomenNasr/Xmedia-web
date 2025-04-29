import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ icon, title, description, to }) {
  const [showButton, setShowButton] = useState(false);

  const handleToggle = () => {
    setShowButton(true);

    setTimeout(() => {
      setShowButton(false);
    }, 2000);
  };

  return (
    <div 
      className='group relative flex flex-col items-center bg-[rgba(209,213,219,0.06)] rounded-2xl shadow-lg p-6 w-[350px] h-[270px] transition-all duration-300 overflow-hidden
      '
      onClick={handleToggle}
    >
      <div className='bg-red-700 p-2 rounded-full'>
        <img src={icon} alt="" width="30px" />
      </div>

      <h3 className='mt-5 font-bold text-[20px]'>{title}</h3>
      <p className='text-center mt-5'>{description}</p>

      <Link to={to} className={`mt-6 px-4 py-2 bg-red-700 text-white rounded-full text-sm transition-all duration-300 cursor-pointer
        ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} group-hover:opacity-100 group-hover:translate-y-0`}>
        Learn More
      </Link>
    </div>
  );
}

export default ServiceCard;
