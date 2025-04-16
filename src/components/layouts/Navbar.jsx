import React, { useState } from "react";
import logo from "./../../assets/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      {/* Desktop Navbar */}
      <div className="container mx-auto  py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo} // Remplace par ton chemin de logo
            alt="AcademicFlow Logo" 
            className="h-20 object-contain rounded-3xl W-64 mr-2"
          />
          {/* <span className="font-bold text-xl text-blue-800">AcademicFlow</span> */}
        </div>

        {/* Onglets Desktop (cachés en mobile) */}
        <div className="hidden px-4 md:flex space-x-8">
          <a href="/" className="text-gray-800 font-serif hover:text-[#64C369] ">Accueil</a>
          <a href="/about" className="text-gray-800 font-serif hover:text-[#64C369] ">À propos</a>
          <a href="/services" className="text-gray-800 font-serif hover:text-[#64C369] ">Services</a>
          <a href="/contact" className="text-gray-800 font-serif hover:text-[#64C369] ">Contact</a>
        </div>

        {/* Boutons Desktop (cachés en mobile) */}
        <div className="hidden md:flex r-10 space-x-4">
          <button className="bg-[#FD6E47] font-serif rounded-lg text-white px-4 py-2 rounded hover:bg-white hover:text-[#FD6E47] hover:border hover:border-[#FD6E47]">
            Login
          </button>
          <button className=" text-white font-serif rounded-lg px-4 py-2 border bg-[#0927EB] hover:border-[#0923EB] hover:bg-white hover:text-gray-800">
            Connexion
          </button>
        </div>

        {/* Menu Burger (mobile only) */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile (toggle) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white  font-serif pb-4 px-5">
          <div className="flex flex-col space-y-2">
            <a href="/" className="text-gray-800 hover:text-blue-600 py-2 ">Accueil</a>
            <a href="/about" className="text-gray-800 hover:text-blue-600 py-2 ">À propos</a>
            <a href="/services" className="text-gray-800 hover:text-blue-600 py-2 ">Services</a>
            <a href="/contact" className="text-gray-800 hover:text-blue-600 py-2 ">Contact</a>
          </div>
          <div className="mt-4 flex flex-col space-y-4">
            <button className="bg-[#FD6E47] text-white px-4 py-2 rounded-lg w-32 rounded hover:bg-white hover:text-[#FD6E47] hover:border hover:border-[#FD6E47]">
              Login
            </button>
            <button className="bg-[#0923EB] text-white px-4 py-2 rounded-lg w-32  hover:border hover:border-[#0923EB] hover:bg-white hover:text-gray-800">
              Connexion
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;