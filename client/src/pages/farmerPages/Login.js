import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Authcontext } from '../../Context/Contextapi';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(Authcontext);

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
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/farmer/login`, data);
      toast.success(response.data.message);
      login(response.data.token, response.data.user);
      navigate('/');
    } catch (error) {
      navigate('/');
      if (error.response?.status === 400) {
        toast.warning(error.response.data.message);
      } else {
        toast.error('Request Failed');
        console.log('error from loginretail', error);
      }
    }
  };

  return (
    <>
      <div className="bg-green-400 flex justify-center items-center w-full h-screen">
        <div className="w-11/12 sm:w-1/2 h-auto bg-green-200 text-green-900 shadow-green-900 shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Farmer Login!</h2>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
            {/* Email Field */}
            <div className="p-2">
              <label htmlFor="email" className="block text-sm font-semibold">
                Email
              </label>
              <input
                {...register('email', { required: true })}
                id="email"
                className="mt-1 h-10 p-2 w-full outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-600 text-xs">Email is required</p>}
            </div>

            {/* Password Field */}
            <div className="mt-2 p-2 flex-col items-center">
              <label htmlFor="password" className="block text-sm font-semibold">
                Password
              </label>
             
              <div className="flex items-center w-full mt-1">
                <input
                  type={hide ? 'text' : 'password'}
                  {...register('password', { required: true })}
                  className="h-10 p-2 w-full rounded-l-md outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
                  placeholder="Enter Your Password"
                />
                <button
                  onClick={viewPass}
                  type="button"
                  className="bg-white rounded-r-xl h-10 w-12 sm:w-14 pt-1 text-xs"
                >
                  {hide ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && <p className="text-red-600 text-xs">Password is required</p>}
            </div>

            {/* Submit Button */}
            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
              >
                Login
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">Don't have an account? </p>
              <Link className="text-green-900 text-xl hover:text-red-700 hover:underline" to="/Farmersignup">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-10 bg-white"></div>
    </>
  );
}
