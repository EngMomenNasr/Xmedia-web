import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    requestType: '',
    message: '',
  });

  const [modal, setModal] = useState({
    isOpen: false,
    message: '',
    isError: false,
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const res = await fetch("https://xmedia-web-server.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
  
      const data = await res.json();
      if (data.success) {
        setModal({
          isOpen: true,
          message: "Your request has been successfully submitted and you will receive a response within the next 24 hours.",
          isError: false
        });
        setFormData({ fullName: '', email: '', phone: '', requestType: '', message: '' });
        setErrors({});
      } else {
        setModal({
          isOpen: true,
          message: "An error occurred, please try again.",
          isError: true
        });
      }
    } catch (error) {
      console.error(error);
      setModal({
        isOpen: true,
        message: "There was an error connecting to the server.",
        isError: true
      });
    }
  
    setIsSubmitting(false);
  };
  

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Invalid email address.";
    if (!formData.phone.match(/^\d{10,15}$/)) newErrors.phone = "Invalid phone number.";
    if (!formData.requestType) newErrors.requestType = "Please select a request type.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
  
    setErrors(newErrors);
  
    return Object.keys(newErrors).length === 0;
  };  

  return (
    <section className="bg-slate-900 py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-white">
        <div className="text-center mb-12">
          <h3 className="text-lg text-red-600 uppercase tracking-wide">Contact Us</h3>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">Let's Get in Touch</h1>
          <p className="mt-4 text-gray-300">Have a question or need a service? Fill out the form and we’ll get back to you shortly.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img src="/contant-us-ic.svg" alt="Contact Illustration" className="w-full max-w-md mx-auto md:mx-0" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <label htmlFor="fullName">Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName}
              placeholder="Full Name" 
              className="w-full p-3 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              onChange={handleChange}
              required 
            />
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              placeholder="Email Address" 
              className="w-full p-3 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              onChange={handleChange}
              required 
            />
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone}
              placeholder="Phone Number" 
              className="w-full p-3 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              onChange={handleChange}
              required 
            />
            <label htmlFor="requestType">Request Type</label>
            <select 
              name="requestType" 
              value={formData.requestType}
              className="w-full p-3 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              onChange={handleChange}
              required
            >
              <option value="">Select Request Type</option>
              <option value="Inquiry">Inquiry</option>
              <option value="Service Request">Service Request</option>
              <option value="Technical Issue">Technical Issue</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea 
              name="message" 
              value={formData.message}
              placeholder="Your Message" 
              rows="5" 
              className="w-full p-3 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              onChange={handleChange}
              required
            ></textarea>
<button 
  type="submit" 
  disabled={isSubmitting}
  className="bg-red-600 hover:bg-red-700 w-full py-3 rounded-lg text-white font-semibold transition duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isSubmitting ? "Sending..." : "Send Message"}
</button>

          </form>
        </div>
      </div>

      {modal.isOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className={`flex flex-col justify-center items-center bg-slate-900 p-6 rounded-lg max-w-sm w-full border-2 ${modal.isError ? "border-red-500" : "border-slate-500"} `}>
            <h2 className="text-white text-lg font-bold text-center">
              {modal.isError ? "Error" : "Message Sent Successfully!"}
            </h2>
            <img src={modal.isError ? "/worng.svg" : "/success.svg"} width="150px" className='bg-red-300 rounded-full mt-5' />
            <p className="text-gray-300 text-center mt-2">{modal.message}</p>
            <div className="text-center mt-4">
            <div className="text-center mt-4">
  {modal.isError ? (
    <button
      onClick={closeModal}
      className="bg-red-600 hover:bg-red-700 py-2 px-6 rounded text-white cursor-pointer"
    >
      Close
    </button>
  ) : (
    <Link
      to="/"
      onClick={closeModal}
      className="bg-red-600 hover:bg-red-700 py-2 px-6 rounded text-white cursor-pointer"
    >
      Close
    </Link>
  )}
</div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
