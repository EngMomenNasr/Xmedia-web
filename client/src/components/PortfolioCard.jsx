import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PortfolioCard({ icon, title, desc }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/portfolio/${encodeURIComponent(title)}`, {
      state: {
        icon,
        title,
        desc
      }
    });
  };

  return (
    <div className="group relative bg-gray-300 shadow-lg p-3 w-[350px] md:w-[400px] transition-all duration-300 overflow-hidden rounded-xl">
      <img 
        src={icon} 
        alt={title} 
        className="grayscale group-hover:grayscale-0 transition-all duration-500 rounded-xl"
      />
      <h3 className="text-xl font-semibold text-slate-900 mt-5">{title}</h3>
      <p className='text-gray-600 w-[320px] mt-5'>{desc}</p>
      <button 
        className='bg-red-700 hover:bg-red-800 mt-5 p-1 w-full rounded-[5px] cursor-pointer'
        onClick={handleClick}
      >
        View Project
      </button>
    </div>
  );
}
