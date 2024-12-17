import React from 'react'
import { useNavigate } from "react-router-dom";

export default function LoginRole() {
  const navigate = useNavigate();

  const farmerlogin = () => {
    navigate("/Farmerlogin");
  }

  const retaillogin = () => {
    navigate("/Retaillogin");
  }

  return (
    <div className="w-full h-screen bg-gradient-to-r from-green-300 via-green-500 to-green-700 font-serif flex flex-col items-center justify-center">
      {/* Title Section */}
      <div className="w-4/5 sm:w-1/2 h-12 mt-3 bg-green-700 rounded-full text-center font-bold text-xl text-white shadow-lg">
        Who Are You?
      </div>

      {/* Button Grid */}
      <div className="w-full h-full mt-8 grid grid-rows-2 sm:grid-cols-2 gap-6 justify-items-center ">

        {/* Farmer Button */}
        <button
          onClick={farmerlogin}
          className="w-4/5 sm:w-2/3 h-40 bg-green-200 text-sm sm:text-lg text-green-800 font-semibold rounded-3xl hover:bg-lime-400 hover:text-white transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center shadow-lg"
        >
          <span>I am a Farmer</span>
          <span className="text-sm">/ Crop Seller <br /> /crop producer</span>
        </button>

        {/* Retailer Button */}
        <button
          onClick={retaillogin}
          className="w-4/5 sm:w-2/3 h-40 bg-green-200 text-sm sm:text-xl text-green-800 font-semibold rounded-3xl hover:bg-lime-400 hover:text-white transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center shadow-lg"
        >
          <span>I am a Retailer</span>
          <span className="text-sm">/ Crop Buyer</span>
        </button>

      </div>
    </div>
  )
}
