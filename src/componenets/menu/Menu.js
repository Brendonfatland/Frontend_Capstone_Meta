import React from "react";
import LemonDessert from "../../assets/lemon_dessert.jpg";

const Menu = () => {
  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Menu</h1>
        <div className="flex justify-center ">
          <div className="w-2/3">
            <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
              <img src={LemonDessert} alt="Item 1" className="w-220 mb-4" />
              <p className="text-lg font-semibold">Item 1</p>
              <p className="text-red-500">$10.99</p>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mt-5">
          <div className="w-2/3">
            <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
              <img src={LemonDessert} alt="Item 1" className="w-220 mb-4" />
              <p className="text-lg font-semibold">Item 1</p>
              <p className="text-red-500">$10.99</p>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mt-5">
          <div className="w-2/3">
            <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
              <img src={LemonDessert} alt="Item 1" className="w-220 mb-4" />
              <p className="text-lg font-semibold">Item 1</p>
              <p className="text-red-500">$10.99</p>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mt-5">
          <div className="w-2/3">
            <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
              <img src={LemonDessert}alt="Item 1" className="w-220 mb-4" />
              <p className="text-lg font-semibold">Item 1</p>
              <p className="text-red-500">$10.99</p>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mt-5">
          <div className="w-2/3">
            <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
              <img src={LemonDessert} alt="Item 1" className="w-220 mb-4" />
              <p className="text-lg font-semibold">Item 1</p>
              <p className="text-red-500">$10.99</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Menu;
