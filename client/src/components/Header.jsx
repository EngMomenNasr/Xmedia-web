import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLanguageOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [showLanguageAlert, setShowLanguageAlert] = useState(false);  // حالة لعرض الرسالة
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();
  const yPosition = useTransform(scrollY, [0, 100], [0, -100]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setIsOpen(false);
        setMobileServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 فنكشن جديدة لغلق المنيو لما اضغط على أي خيار
  const handleMenuItemClick = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  // فنكشن لعرض رسالة عند الضغط على زر اللغة
  const handleLanguageClick = () => {
    setShowLanguageAlert(true);  // تفعيل الرسالة
    setTimeout(() => {
      setShowLanguageAlert(false);  // إخفاء الرسالة بعد 3 ثواني
    }, 3000);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.10, ease: "easeInOut" }}
      className="bg-slate-900 text-white py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out shadow-md"
    >
      <nav className="container mx-auto flex justify-between items-center text-[14px] relative">
        {menuOpen ? (
          <FiX 
            className="md:hidden ml-5 text-[25px]"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
          />
        ) : (
          <FiMenu 
            className="md:hidden ml-5 text-[25px]"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(true);
            }}
          />
        )}

        <Link to="/" onClick={handleMenuItemClick}>
          <img src="/logo.png" alt="Logo" width="130px" className="ml-0 md:ml-5" />
        </Link>
        
        {/* لابتوب */}
        <ul className="hidden md:flex space-x-8 items-center mr-5">
          <li><Link to="/" className="text-red-600">HOME</Link></li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 hover:text-red-600 transition duration-300 cursor-pointer"
            >
              SERVICES <IoIosArrowDown />
            </button>
            {isOpen && (
              <ul className="absolute left-0 mt-2 bg-slate-800 text-white shadow-lg rounded-lg py-2 w-44 z-50">
                <li><Link to="/services/digital-marketing" className="block py-2 text-center hover:bg-red-700" onClick={handleMenuItemClick}>Digital Marketing</Link></li>
                <li><Link to="/services/social-media-management" className="block py-2 text-center hover:bg-red-700" onClick={handleMenuItemClick}>Social Media Management</Link></li>
                <li><Link to="/services/content-creation" className="block py-2 text-center hover:bg-red-700" onClick={handleMenuItemClick}>Content Creation</Link></li>
                <li><Link to="/services/web-development" className="block py-2 text-center hover:bg-red-700" onClick={handleMenuItemClick}>Web Development</Link></li>
                <li><Link to="/services/mobile-apps" className="block py-2 text-center hover:bg-red-700" onClick={handleMenuItemClick}>Mobile Apps</Link></li>
                <li><Link to="/services/seo" className="block py-2 text-center hover:bg-red-700" onClick={handleMenuItemClick}>SEO</Link></li>
                <li><Link to="/services/branding" className="block py-2 text-center hover:bg-red-700" onClick={handleMenuItemClick}>Branding</Link></li>
                <li><Link to="/services/events-management" className="block py-2 text-center hover:bg-red-700" onClick={handleMenuItemClick}>Events Management</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/contact-us" className="hover:text-red-600 transition duration-300">CONTACT US</Link></li>
          <li><Link className="text-[20px]" onClick={handleLanguageClick}><IoLanguageOutline /></Link></li>
          <Link to="/contact-us" className="text-[16px] text-nowrap hidden py-[0.7rem] px-[1.5rem] 
            bg-gradient-to-l from-blue-700 to-red-600 
            rounded-3xl hover:bg-gradient-to-r hover:from-red-700 hover:to-red-700 
            hover:scale-[1.03] hover:shadow-2xl shadow-red-700 
            transition-all duration-300 md:block cursor-pointer">
            Get Started
          </Link>
        </ul>

        {/* موبايل - اللغة */}
        <a href="#arabic" className="block md:hidden text-[25px] mr-5" onClick={handleLanguageClick}><IoLanguageOutline /></a>

        {/* موبايل - المنيو */}
        <ul
          ref={menuRef}
          className={`md:hidden absolute top-16 left-0 w-full bg-slate-900 text-white transition-all duration-300 ease-in-out shadow-md ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ overflow: "hidden" }}
        >
          <li><Link to="/" className="block py-4 text-center" onClick={handleMenuItemClick}>Home</Link></li>

          {/* زرار Services يفتح قائمة فرعية */}
          <li className="text-center">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full py-4 flex justify-center items-center gap-1"
            >
              Services <IoIosArrowDown className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileServicesOpen && (
              <ul className="bg-red-800">
                <li><Link to="/services/digital-marketing" className="block py-2 text-center" onClick={handleMenuItemClick}>Digital Marketing</Link></li>
                <li><Link to="/services/social-media-management" className="block py-2 text-center" onClick={handleMenuItemClick}>Social Media Management</Link></li>
                <li><Link to="/services/content-creation" className="block py-2 text-center" onClick={handleMenuItemClick}>Content Creation</Link></li>
                <li><Link to="/services/web-development" className="block py-2 text-center" onClick={handleMenuItemClick}>Web Development</Link></li>
                <li><Link to="/services/mobile-apps" className="block py-2 text-center" onClick={handleMenuItemClick}>Mobile Apps</Link></li>
                <li><Link to="/services/seo" className="block py-2 text-center" onClick={handleMenuItemClick}>SEO</Link></li>
                <li><Link to="/services/branding" className="block py-2 text-center" onClick={handleMenuItemClick}>Branding</Link></li>
                <li><Link to="/services/events-management" className="block py-2 text-center" onClick={handleMenuItemClick}>Events Management</Link></li>

              </ul>
            )}
          </li>

          <li><Link to="/contact-us" className="block py-4 text-center" onClick={handleMenuItemClick}>Contact Us</Link></li>
        </ul>
      </nav>

      {/* نافذة تنبيه اللغة غير متوفرة */}
      {showLanguageAlert && (
        <div className="absolute top-16 left-0 w-full bg-red-600 text-white py-2 text-center">
          عفوا، اللغة العربية غير متوفرة حاليا
        </div>
      )}
    </motion.header>
  );
};

export default Header;
