import React from 'react';
import Logo from '../../assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 absolute bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          {/* Column 1 - Logo (2 columns) */}
          <div className="col-span-2">
            <img src={Logo} alt="Logo" className="h-8" />
          </div>

          {/* Divider (6 columns) */}
          <div className="col-span-6 "></div>

          {/* Column 2 - Contact (2 columns) */}
          <div className="col-span-2">
            <h3 className="text-lg mb-2">Contact</h3>
            <div>
              <p>Email: example@example.com</p>
              <p>Phone: 123-456-7890</p>
              <p>Address: 123 Main St, City, Country</p>
            </div>
          </div>

          {/* Column 3 - Social Media (2 columns) */}
          <div className="col-span-2">
            <h3 className="text-lg mb-2">Social Media</h3>
            <div>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

