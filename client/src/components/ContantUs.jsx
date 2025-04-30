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

  const [isSubmitting, setIsSubmitting] = useState(false); // حالة جديدة لتعطيل الزر

  const validateForm = () => {
    const errors = [];
    if (!formData.fullName.trim()) errors.push("Full Name is required.");
    if (!formData.email.trim()) errors.push("Email is required.");
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.push("Invalid email format.");
    if (!formData.phone.trim()) errors.push("Phone is required.");
    else if (!/^[0-9]{10,15}$/.test(formData.phone)) errors.push("Phone number must be between 10 to 15 digits.");
    if (!formData.requestType.trim()) errors.push("Request Type is required.");
    if (!formData.message.trim()) errors.push("Message cannot be empty.");
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
      setModal({
        isOpen: true,
        message: errors.join('\n'),
        isError: true,
      });
      return;
    }

    setIsSubmitting(true); // تعطيل الزر قبل إرسال الطلب

    try {
      const res = await fetch("https://xmedia-web-server.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setModal({
          isOpen: true,
          message: "Your request has been successfully submitted and you will receive a response within the next 24 hours.",
          isError: false,
        });
        setFormData({ fullName: '', email: '', phone: '', requestType: '', message: '' });
      } else {
        setModal({
          isOpen: true,
          message: "An error occurred, please try again.",
          isError: true,
        });
      }
    } catch (error) {
      console.error(error);
      setModal({
        isOpen: true,
        message: "There was an error connecting to the server.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false); // إعادة تمكين الزر بعد انتهاء العملية (سواء نجحت أو فشلت)
    }
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <section className="bg-slate-900 py-16 px-6 md:px-10">
      {modal.isOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className={`flex flex-col justify-center items-center bg-slate-900 p-6 rounded-lg max-w-sm w-full border-2 ${modal.isError ? "border-red-500" : "border-slate-500"}`}>
            <h2 className="text-white text-lg font-bold text-center">
              {modal.isError ? "Error" : "Message Sent Successfully!"}
            </h2>
            <img src={modal.isError ? "/worng.svg" : "/success.svg"} width="150px" className='bg-red-300 rounded-full mt-5' />
            <pre className="text-gray-300 text-center mt-2 whitespace-pre-wrap">{modal.message}</pre>
            <div className="text-center mt-4">
              {modal.isError ? (
                <button onClick={closeModal} className="bg-red-600 hover:bg-red-700 py-2 px-6 rounded text-white cursor-pointer">Close</button>
              ) : (
                <Link to="/" onClick={closeModal} className="bg-red-600 hover:bg-red-700 py-2 px-6 rounded text-white cursor-pointer">Close</Link>
              )}
            </div>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-slate-800 shadow-md rounded-lg p-8">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-300 text-sm font-bold mb-2">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-700" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-700" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-300 text-sm font-bold mb-2">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-700" />
        </div>
        <div className="mb-4">
          <label htmlFor="requestType" className="block text-gray-300 text-sm font-bold mb-2">Type of Request</label>
          <select id="requestType" name="requestType" value={formData.requestType} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-700">
            <option value="">Select a request type</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Sales Question">Sales Question</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-700"></textarea>
        </div>
        <button
          type="submit"
          className={`bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}