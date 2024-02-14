import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";


const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img className="h-8 mr-4" src={Logo} alt="Logo" />
        </div>
        
        {/* Navigation links on the right */}
        <ul className="flex">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 px-3 py-2">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 px-3 py-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="text-white hover:text-gray-300 px-3 py-2"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/book-table"
              className="text-white hover:text-gray-300 px-3 py-2"
            >
              Book a Table
            </Link>
          </li>
          <li>
            <Link
              to="/order-online"
              className="text-white hover:text-gray-300 px-3 py-2"
            >
              Order Online
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
