import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Authcontext } from '../../Context/Contextapi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(Authcontext);
  const [loading,setLoading] = useState();
  const backendurl = process.env.REACT_APP_BACKEND_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [hide, setView] = useState(false);
  const viewPass = () => {
    setView((prev) => !prev);
  };

  const handleLogin = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${backendurl}/farmer/login`, data);
      toast.success(response.data.message);
      navigate('/');
      login(response.data.token, response.data.user);
    } catch (error) {
      if (error.response?.status === 400) {
        toast.warning(error.response.data.message);
      } else {
        toast.error('Request Failed');
        console.log('error from loginretail', error);
        navigate('/');
      }
    }finally{
      setLoading(true);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-green-400 via-blue-300 to-green-400">
        <div className="w-11/12 sm:w-1/2 h-auto bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
            Retailer Login
          </h2>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                {...register('email', { required: true })}
                id="email"
                type="email"
                className="mt-1 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">Email is required</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={hide ? 'text' : 'password'}
                  {...register('password', { required: true })}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={viewPass}
                  className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 hover:text-green-600 focus:outline-none"
                >
                  {hide ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && <p className="text-red-600 text-xs mt-1">Password is required</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition"
              >
               Login
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link
                  to="/Retailsignup"
                  className="text-green-700 font-semibold hover:text-green-500 hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
