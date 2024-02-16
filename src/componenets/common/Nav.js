import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

const Nav = () => {
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2">
            <img src={Logo} alt="Logo" className="h-8" />
          </div>

          <div className="col-span-6 "></div>

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
                <a
                  href="/#about"
                  className="text-white hover:text-gray-300 px-3 py-2"
                  onClick={scrollToAbout}
                >
                  about
                </a>
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
