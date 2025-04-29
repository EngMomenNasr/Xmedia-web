import React from 'react';
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-90 text-white">
      <h1 className='text-8xl font-bold'>404</h1>
      <img src="/not-found.svg" alt="" width="200px" />
      <h3 className="text-4xl mt-5 text-center">Page Not Found</h3>
      <Link to="/" className='mt-5 p-2 bg-red-600 rounded-xl hover:bg-red-800 transition'>Back To Home</Link>
    </div>
  );
};

export default NotFound;
