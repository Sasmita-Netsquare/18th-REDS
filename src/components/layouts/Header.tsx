import React from "react";
// import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";

const Header: React.FC = () => (
  <header className="flex items-center justify-between bg-white px-6 py-4 border-b">
    <div className="flex items-center space-x-4">
      {/* <button className="p-2 rounded hover:bg-gray-100">
        <AiOutlineSearch className="h-6 w-6" />
      </button> */}
      <span className="text-xl font-semibold">Welcome, Jonathan Deo</span>
    </div>
    <div className="flex items-center space-x-4">
      <button className="relative p-2 rounded hover:bg-gray-100">
        {/* <AiOutlineBell className="h-6 w-6" /> */}
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
          5
        </span>
      </button>
      <img
        src="https://i.pravatar.cc/40"
        alt="avatar"
        className="h-10 w-10 rounded-full"
      />
    </div>
  </header>
);

export default Header;
