import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
   
    alert('Message sent successfully!');
    reset();
  };

  return (
    <div className="min-h-screen font-serif bg-green-400 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h1>
      <div className="bg-green-200 shadow-lg rounded-lg w-11/12 max-w-4xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4 font-serif">We’re here to help and answer any questions you might have. We look forward to hearing from you!</p>
            <ul className="text-gray-700 space-y-2">
              <li><span className="font-bold text-green-600 ">Office Address: </span>HousNO-3,Somehwere In Faridabad,Haryana 121013</li>
              <li><span className="font-bold text-green-600">Phone: </span>1234567890 ,9874563210</li>
              <li className='break-words'><span className="font-bold text-green-600">Email: </span>ContactAgrimitra@gmail.com,agrimitrahelp@gmail.com</li>
            </ul>

          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full mt-1 p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })}
                  className={`w-full mt-1 p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Phone Number</label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone number is required' })}
                  className={`w-full mt-1 p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows="4"
                  className={`w-full mt-1 p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
