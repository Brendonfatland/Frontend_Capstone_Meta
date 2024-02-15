import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

const Nav = () => {
  return (
    <nav className="bg-gray-800 fixed bottom-0 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          {/* Column 1 - Logo (2 columns) */}
          <div className="col-span-2">
            <img src={Logo} alt="Logo" className="h-8" />
          </div>

          {/* Divider (6 columns) */}
          <div className="col-span-6 "></div>

          {/* Column 2 - Navigation links (4 columns) */}
          <div className="col-span-4">
            <ul className="flex justify-end">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-300 px-3 py-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
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
        </div>
      </div>
    </nav>
  );
};

export default Nav;
