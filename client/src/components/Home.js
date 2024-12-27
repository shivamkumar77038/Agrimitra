import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';



export default function Home() {
  const navigate = useNavigate();
 

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/Cropimages/cropimage3.jpg",
    "/images/Cropimages/cropimage2.jpg",
    "/images/Cropimages/cropimage1.jpg",
    "/images/Cropimages/cropimage4.jpg",  
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentSlide]);


  const getcrops = () => {
    navigate("/Allcrops");
  };

  const getallproposal = () => {
    navigate("/AllavailableProposal");
  };

  return (
    <>
      <div className="w-full text-green-900 font-serif h-auto bg-gradient-to-b from-green-50 to-green-200">
      
      <div className="w-full text-xs md:text-lg h-12 sm:h-16 bg-green-200 flex justify-center gap-4 items-center">
  <button
    onClick={getcrops}
    className="w-2/5 sm:w-1/4 h-full rounded-full shadow-lg bg-gradient-to-r from-green-400 to-green-500 text-white hover:from-green-500 hover:to-green-600 transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
  >
    Available Crops
  </button>
  <button
    onClick={getallproposal}
    className="w-2/5 sm:w-1/4 h-full rounded-full shadow-lg bg-gradient-to-r from-green-400 to-green-500 text-white hover:from-green-500 hover:to-green-600 transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
  >
    Available Proposals
  </button>
</div>



        <div className="bg-green-50 text-gray-800">
          
          {/*headrs ectiom*/}
          <header className="relative bg-gradient-to-r from-green-700 to-green-500 text-white py-20 shadow-2xl">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-extrabold drop-shadow-md">
              Welcome to Agrimitra
            </h1>
            <p className="mt-4 text-xl drop-shadow-sm">
              A contract-based farming platform connecting Farmers, Retailers, and Crop Buyers.
            </p>
          </div>
          <div className="relative mt-8 flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-green-400 p-2 rounded-full shadow-lg hover:bg-green-500 transition-transform"
            >
              &lt;
            </button>
            <div className="w-full overflow-hidden max-w-3xl">
              <div
                className="flex transition-transform ease-in-out duration-500"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="min-w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-400 p-2 rounded-full shadow-lg hover:bg-green-500 transition-transform"
            >
              &gt;
            </button>
          </div>
        </header>
         

          {/* About Section */}
          <section className="bg-white py-16 shadow-inner rounded-xl">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-green-800 drop-shadow-md">About Us</h2>
              <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-lg">
                Agrimitra is dedicated to connecting farmers with retailers and buyers, promoting
                sustainable agriculture and fair trade. Our platform empowers farmers to reach broader
                markets and helps buyers find quality, locally sourced produce.
              </p>
            </div>
          </section>

          {/* Farmer Review Section */}
          <section className="bg-gradient-to-r from-green-400 to-green-300 py-6 rounded-3xl shadow-lg">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-green-800 drop-shadow-md">Farmer Testimonials</h2>
              <div className="mt-7 flex flex-col md:flex-row items-center justify-center  md:space-x-12 space-y-8 md:space-y-0">
                <img
                  src="images/farmerimage.jpg"
                  alt="Farmer"
                  className="w-40 h-40 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-transform"
                />
                <div className="max-w-md text-left">
                  <p className="text-lg">
                    "Agrimitra has changed the way I sell my crops. I've been able to reach more
                    buyers and get fair prices for my produce. It's a game-changer for farmers!"
                  </p>
                  <p className="mt-4 font-semibold">-Mohan Ram, Organic Farmer</p>
                </div>
              </div>
            </div>
          </section>

          {/* Founder Section */}
                    <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 rounded-3xl shadow-xl">
            <div className="container mx-auto px-6 md:px-12 text-center">
              <h2 className="text-4xl font-extrabold text-green-900 drop-shadow-md">Meet Our Founder</h2>
              <p className="mt-4 text-lg text-green-700">
                The visionary leader behind Agrimitra, fostering innovation and sustainability in agriculture.
              </p>

              <div className="mt-12 flex flex-col md:flex-row items-center justify-center md:space-x-16 space-y-8 md:space-y-0">
                <img
                  src="images/founderimage.jpg"
                  alt="Founder"
                  className="w-40 h-40 sm:w-56 sm:h-56 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-transform"
                />
                <div className="max-w-lg text-left">
                  <p className="text-lg text-gray-800">
                    <span className='font-bold'>Shivam Kumar</span>, founded Agrimitra with a mission to empower farmers and create a more connected, equitable agricultural market. His dedication to 
                    bridging the gap between traditional farming and modern technology has transformed countless 
                    agricultural businesses.
                  </p>
                  <p className="mt-4 text-lg text-gray-800">
                    Agrimitra is not just a platform—it’s a movement towards building resilient farming communities 
                    and fostering partnerships between farmers, retailers, and consumers. By leveraging technology, 
                    Agrimitra ensures transparency, fair trade, and sustainability at every step of the agricultural value chain.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Goal Section */}
                      <section className="bg-gradient-to-r from-green-500 to-green-300 py-16 shadow-xl rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-green-800 drop-shadow-xl transition-all duration-300 transform hover:translate-y-2">
                  Our Goals
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  We are committed to fostering sustainable and transparent agricultural practices that benefit both local communities and global markets. Our goals focus on empowering farmers and ensuring the integrity of the supply chain.
                </p>
                <ul className="mt-8 space-y-6 max-w-3xl mx-auto text-gray-700 list-disc list-inside">
                 
                  <li className="transform hover:translate-x-2 hover:scale-105 transition-all duration-300">
                    To provide fair trade opportunities for farmers, empowering them with better prices and improved livelihoods.
                  </li>
                  <li className="transform hover:translate-x-2 hover:scale-105 transition-all duration-300">
                    To connect local growers with national markets, expanding their reach and growing their businesses.
                  </li>
                  
                  
                </ul>
                <p className="mt-8 text-lg text-gray-600">
                  Together, we aim to create a thriving ecosystem for agriculture that not only supports farmers but also promotes sustainable practices that will benefit future generations.
                </p>
              </div>
            </section>



        </div>
      </div>
    </>
  );
}
