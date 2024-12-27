import React from 'react';

export default function Navbar() {
  return (
    <div className=" font-serif h-auto">
      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base transition duration-300 hover:text-gray-300">
            &copy; 2024 @Agrimitra. All rights reserved.
            <span className="block md:inline md:ml-2">
              Supporting sustainable agriculture for a better tomorrow.
            </span>
          </p>
        </div>
      </footer>

      {/* Navbar Section */}
      <div className="navbar w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-8 md:py-10 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">
          {/* Section 1 */}
          <div
            className="div1 text-white text-center md:text-left text-sm md:text-base lg:text-lg w-full md:w-1/3 hover:scale-105 transition transform duration-300"
          >
            🌱 <span className="font-bold">Join Agrimitra</span>: Empower your agricultural business with innovative Platform.
            <span className="block mt-3 text-gray-200 text-xs md:text-sm">
              Grow sustainably by collaborating with farmers, retailers, and crop buyers.
            </span>
          </div>

          {/* Section 2 */}
          <div
            className="div2 text-white text-center md:text-left text-sm md:text-base lg:text-lg w-full md:w-1/3 hover:scale-105 transition transform duration-300"
          >
            📋 <span className="font-bold">Simplify Your Contracts</span>: Tailored templates for easy management.
            <span className="block mt-3 text-gray-200 text-xs md:text-sm">
              Keep your agreements secure and accessible anywhere, anytime.
            </span>
          </div>

          {/* Section 3 */}
          <div
            className="div3 text-white text-center md:text-left text-sm md:text-base lg:text-lg w-full md:w-1/3 hover:scale-105 transition transform duration-300"
          >
            🌾 <span className="font-bold">Agriculture Resources Hub</span>: Insights, tools, and a vibrant community.
            <span className="block mt-3 text-gray-200 text-xs md:text-sm">
              Stay informed and connected in the ever-evolving agricultural world.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
