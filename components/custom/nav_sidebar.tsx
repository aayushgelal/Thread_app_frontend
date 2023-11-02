import React from "react";
import { FaHome, FaSearch, FaPlus, FaUser, FaHamburger } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
export default function NavBar() {
  return (
    <nav className="w-64 px-4 fixed z-1 flex flex-col  h-full p-4 space-y-4  text-sm text-white">
      <div className=" flex-1 items-center pt-11">
        <ul className="py-4">
          <li className=" py-2 flex items-center hover:text-gray-300">
            <a href="/home" className="flex items-center">
              <FaHome className="mr-2" />
              Home
            </a>
          </li>
          <li className=" py-2 flex items-center  hover:text-gray-300">
            <a href="/search" className="flex items-center">
              <FaSearch className="mr-2" />
              Search
            </a>
          </li>
          <li className=" py-2 flex items-center  hover:text-gray-300">
            <a href="/create-activity" className="flex items-center">
              <FaPlus className="mr-2" />
              Create Activity
            </a>
          </li>
          <li className=" py-2 flex items-center hover:text-gray-300">
            <a href="/profile" className="flex items-center">
              <FaUser className="mr-2" />
              Profile
            </a>
          </li>
        </ul>
      </div>
      <div className="flex space-x-3 w-full ">
        <AiOutlineMenu />
        <p>More</p>
      </div>
    </nav>
  );
}
