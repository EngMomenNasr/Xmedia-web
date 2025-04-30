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
      setIsSubmitting(false); // إعادة تمكين الزر بعد انتهاء العملية
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
    
     </section>
  );
}