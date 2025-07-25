import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="main-container py-3 bg-black shadow-md">
      <div className="flex items-center justify-between w-full relative">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
          <img
            src="/main_logo.png"
            alt="Logo"
            className="w-32 lg:w-56 h-auto"
          />
          </a>
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
          {/* <a href="#" className="hover:text-yellow-500 text-white">
            Home
          </a> */}
          <Link to="/investor-meet" className="hover:text-yellow-500 text-white">
            Investor Meet
          </Link>
          <Link to="/agenda" className="hover:text-yellow-500 text-white">
            Agenda
          </Link>
          {/* <a href="#" className="hover:text-yellow-500 text-white">
            Media
          </a> */}
          <Link
            to="/register"
            className="text-black py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-[0_0_20px_4px_rgba(240,175,18,0.7)] hover:text-white"
            style={{
              background: "linear-gradient(96.18deg, #F0AF12 0%, #B2680A 100%)",
            }}
          >
            Register Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
