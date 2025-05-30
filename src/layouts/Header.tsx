import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="main-container py-3 px-4 lg:px-8 bg-black shadow-md">
      <div className="flex items-center justify-between w-full relative">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/main_logo.png"
            alt="Logo"
            className="w-32 lg:w-48 h-auto"
          />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full left-0 w-full flex-col items-center bg-black shadow-md z-10 lg:shadow-none lg:bg-transparent lg:flex lg:static lg:flex-row lg:w-auto lg:gap-10 mt-4 lg:mt-0 gap-6 transition-all duration-300 py-2`}
        >
          <a href="#" className="hover:text-yellow-500 text-white">
            Home
          </a>
          <a href="#" className="hover:text-yellow-500 text-white">
            Speakers
          </a>
          <a href="#" className="hover:text-yellow-500 text-white">
            Agenda
          </a>
          <a href="#" className="hover:text-yellow-500 text-white">
            Media
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold py-2 px-4 rounded"
          >
            Register Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
