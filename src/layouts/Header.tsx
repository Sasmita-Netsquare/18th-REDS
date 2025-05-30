import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="main-container py-3">
      <div className="flex items-center justify-between relative w-full">
        {/* Logo */}
        <div className="flex items-center lg:w-56 ">
          <img
            src="/main_logo.png"
            alt="Logo"
            className="lg:w-auto w-40 h-auto"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden absolute right-1 top-5 text-3xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:gap-10 items-center mt-4 lg:mt-0 gap-6`}
        >
          <a href="#" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#" className="hover:text-yellow-400">
            Speakers
          </a>
          <a href="#" className="hover:text-yellow-400">
            Agenda
          </a>
          <a href="#" className="hover:text-yellow-400">
            Media
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-yellow-400 to-orange-600 text-black font-semibold py-2 px-4"
          >
            Register Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
