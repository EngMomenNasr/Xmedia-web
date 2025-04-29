import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from './components/Footer';
import Header from './components/Header';
import LandSection from './components/LandSection';
import OurProcess from './components/OurProcess';
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";
import OurPortfolio from "./components/OurPortfolio";
import AboutDetails from "./components/AboutDetails";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";
import PortfolioDetails from "./components/PortfolioDetails"; // ✅ أضفته هنا
import NotFound from "./components/NotFound";
import ContantUs from "./components/ContantUs";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />

      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <LandSection />
              <OurProcess />
              <AboutUs />
              <OurServices />
              <OurPortfolio />
              <ContantUs />
            </motion.div>
          } />

          <Route path="/about-details" element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <AboutDetails />
            </motion.div>
          } />

          <Route path="/services" element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Services />
            </motion.div>
          } />

          {/* تفاصيل خدمة معينة */}
          <Route path="/services/:serviceName" element={
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <ServiceDetails />
            </motion.div>
          } />

          {/* ✅ صفحة تفاصيل مشروع بورتفوليو */}
          <Route path="/portfolio/:title" element={
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PortfolioDetails />
            </motion.div>
          } />

          <Route path="/contact-us" element={
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mt-15">
              <ContantUs />
              </div>
            </motion.div>
          } />

          {/* صفحة الخطأ */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </Router>
  );
}

export default App;
