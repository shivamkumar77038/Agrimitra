import React, { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserLarge, FaUserLargeSlash } from "react-icons/fa6";
import { Authcontext } from "../Context/Contextapi";
import { NavLink, useNavigate } from "react-router-dom";
import FarmerProfileCard from "../pages/farmerPages/FarmerProfileCard.js";
import RetailProfileCard from "../pages/RetailerPages/RetailerProfileCard.js";

export default function Header() {
  const { token, user, logout } = useContext(Authcontext);
  const navigate = useNavigate();

  const [isProfileOpen, setProfileOpen] = useState(false); // Profile menu toggle state

  // Toggle profile menu
  const toggleProfileMenu = () => {
    setProfileOpen(!isProfileOpen);
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="w-full h-6 flex justify-between">
        <div className="w-1/2 h-full bg-green-400 rounded-tr-3xl"></div>
        <p className="text-green-800 font-mono sm:text-xl mr-2 font-extrabold">Agrimitra</p>
      </div>

      {/* Header Navigation */}
      <div className="headmaindiv  w-full h-12 font-serif text-sm sm:text-lg text-white sm:h-16 bg-gradient-to-r from-green-700 to-green-400 flex">
        {/* Logo */}
        <div className="logodiv w-1/6 sm:w-36 h-full rounded-2xl"></div>

        {/* Navigation Links */}
        <div className="headsubdiv w-full h-full flex">
          <div className="atributhead w-1/2 h-full">
            <ul className="flex justify-evenly items-center w-full h-full">
              <li className="ml-2 hover:text-green-900">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "navactive " : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-green-900">
                <NavLink to="/ContactUs"
                className={({ isActive }) => (isActive ? "navactive" : "")}
                >ContactUs</NavLink>
                
              </li>
            </ul>
          </div>

          {/* Login/Logout Button */}
          <div className="w-1/2 h-full flex justify-end">
            {token ? (
              <button
                onClick={handleLogout}
                className="w-1/3 h-full mr-3 hover:text-green-900"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "navactive" : "")}
              >
                <button className="w-1/3 h-full mr-3 hover:text-green-900">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {/* Search Bar and Profile */}
      <div className="w-full h-10 bg-green-900 flex items-center">
        {/* Search Input */}
        <input
          className="bg-white w-2/3 pl-2 h-5/6 sm:w-1/2 sm:text-base ml-1 rounded-l-md text-xs"
          placeholder="Search"
          type="text"
        />
        <button
          className="h-5/6 w-8 sm:w-12 bg-lime-600 rounded-r-md text-white"
          aria-label="Search"
        >
          <FaSearch className="text-2xl ml-2 sm:text-3xl" />
        </button>

        {/* Profile Icon */}
        {user && (
          <div
            className="w-4/6 flex justify-center items-center sm:w-3/5 h-full pr-4"
            onClick={toggleProfileMenu}
          >
            <div className="w-1/2 h-full flex justify-center items-center">
              {isProfileOpen ? (
                <FaUserLargeSlash   className="text-3xl ml-2 sm:text-4xl" />
              ) : (
                <FaUserLarge  className="text-2xl sm:ml-2 sm:text-3xl" />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Profile Dropdown */}
      {isProfileOpen && user && user.role && (
        <div onClick={toggleProfileMenu}>
          {user.role === "Farmer" && <FarmerProfileCard />}
          {user.role === "Retailer" && <RetailProfileCard />}
        </div>
      )}
    </div>
  );
}
