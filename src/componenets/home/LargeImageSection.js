import React from "react";
import backgroundImage from "../../assets/restaurant_chef_B.jpg";

const LargeImageSection = () => {
  return (
    <section className="relative py-24">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center -636px' // Move the image up by 636 pixels
        }}
        alt="Chef preparing food"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center text-left">
          <div className="text-left text-white bg-gray-500 bg-opacity-50 p-4 rounded"> {/* Changed text-center to text-left */}
            <h2 className="text-3xl font-bold mb-4">Welcome to Little Lemon</h2>
            <p className="text-lg mb-8">Discover our delicious dishes and cozy atmosphere.</p>
            <button
              className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
              aria-label="Explore Menu"
            >
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeImageSection;
