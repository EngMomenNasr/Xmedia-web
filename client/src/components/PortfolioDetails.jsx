import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PortfolioDetails() {
  const location = useLocation();
  const { icon, title, desc } = location.state || {};
  const navigate = useNavigate();

  if (!icon || !title || !desc) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center p-10">
        <h1 className="text-white text-3xl font-bold mb-5">Project Not Found</h1>
        <p className="text-gray-600 mb-4">You need to access this page via the portfolio section.</p>
        <button 
          className="bg-red-700 text-white px-4 py-2 rounded"
          onClick={() => navigate('/')}
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div
      className='flex items-center justify-center min-h-screen bg-cover bg-right md:bg-center lg:bg-left xl:bg-top bg-slate-800 bg-opacity-40 bg-blend-overlay text-white px-6 english-text overflow-hidden'
      style={{ backgroundImage: `url(${icon})` }}
    >
      <div className='flex flex-col justify-center items-center p-5 w-full md:w-[80%] bg-gray-300 rounded-2xl md:my-30'>
        <img src={icon} alt={title} className="w-[90%] md:w-[60%] max-w-3xl rounded-xl mb-8" />
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700 text-lg max-w-2xl text-center">{desc}</p>
      </div>
    </div>
  );
  
}
