import React from "react";
import LemonDessert from "../../assets/lemon_dessert.jpg";
import GreekSalad from "../../assets/greek_salad.jpg";

const SpecialsSection = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4 md:w-2/3">
        <h2 className="text-3xl font-bold mb-8">This Week's Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Special 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
            <img src={LemonDessert} alt="lemon dessert" className="w-full" />
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-xl font-semibold">lemon dessert</h3>
              <p className="text-red-500">$10.99</p>
            </div>
            <p className="text-gray-600">Sweet and Sour lemon dessert</p>
            <div className="flex mt-3 place-content-center">
              <a
                href="/order-online"
                className="bg-yellow-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
              >
                Order
              </a>
            </div>
          </div>

          {/* Special 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
            <img src={GreekSalad} alt="Greek Salad" className="w-full" />
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-xl font-semibold">Greek Salad</h3>
              <p className="text-red-500">$12.99</p>
            </div>
            <p className="text-gray-600">Delicious salad</p>
            <div className="flex mt-3 place-content-center">
              <a
                href="/order-online"
                className="bg-yellow-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
              >
                Order
              </a>
            </div>
          </div>

          {/* Special 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
            <img src={LemonDessert} alt="lemon dessert" className="w-full" />
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-xl font-semibold">Gf & DF lemon dessert</h3>
              <p className="text-red-500">$12.99</p>
            </div>
            <p className="text-gray-600">
              Gluten free and Dairy free Lemon dessert
            </p>
            <div className="flex mt-3 place-content-center">
              <a
                href="/order-online"
                className="bg-yellow-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
              >
                Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
