import React from "react";
// import { AiOutlineBarChart, AiOutlineHome } from "react-icons/ai";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      <div className="p-4 text-2xl font-bold">EVENT</div>
      <nav className="flex-1 px-2 space-y-1">
        <a
          href="#"
          className="group flex items-center px-2 py-2 text-sm font-medium rounded hover:bg-gray-100"
        >
          {/* <AiOutlineHome className="h-6 w-6 mr-3" /> */}
          Events
        </a>
        <a
          href="#"
          className="group flex items-center px-2 py-2 text-sm font-medium rounded hover:bg-gray-100"
        >
          {/* <AiOutlineHome className="h-6 w-6 mr-3" /> */}
          Speakers
        </a>
        <a
          href="#"
          className="group flex items-center px-2 py-2 text-sm font-medium rounded hover:bg-gray-100"
        >
          {/* <AiOutlineBarChart className="h-6 w-6 mr-3" />  */}
          Sponsors
        </a>
        <a
          href="#"
          className="group flex items-center px-2 py-2 text-sm font-medium rounded hover:bg-gray-100"
        >
          {/* <AiOutlineBarChart className="h-6 w-6 mr-3" />  */}
          Delegates
        </a>
        {/* Add more links as needed */}
      </nav>
    </aside>
  );
};

export default Sidebar;
