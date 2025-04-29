import React, { useEffect, useState } from "react";
import DottedButton from "./DottedButton";
import { motion } from "framer-motion";

const LandSection = () => {
  const [backgroundImage, setBackgroundImage] = useState("url('./land-bg.jpg')");

  useEffect(() => {
    // تغيير الخلفية فقط في الصفحة الرئيسية
    setBackgroundImage("url('./land-bg.webp')");
  }, []);

  return (
    <section 
      className="flex items-center min-h-screen bg-cover bg-right md:bg-center lg:bg-left xl:bg-top bg-slate-800 bg-opacity-40 bg-blend-overlay text-white px-6 english-text overflow-hidden"
      style={{ backgroundImage: backgroundImage }}  // تحديد الخلفية هنا فقط
    >   
      <div className="container mx-auto">
        <div className="p-5 max-w-xl mt-14">
          <motion.h1 
            className="text-[40px] md:text-5xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            We Bring Your <span className="text-red-700">Ideas</span> to Life
          </motion.h1>
          <motion.p 
            className="text-[20px] md:text-[22px] text-gray-300 mb-10"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Websites, Apps, Digital Marketing & More. Smart. Creative. Effective.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
          >
            <DottedButton name="Get Started" to="/contact-us" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandSection;
