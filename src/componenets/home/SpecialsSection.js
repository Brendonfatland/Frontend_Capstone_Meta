import React from "react";
import LemonDessert from "../../assets/lemon_dessert.jpg";
import GreekSalad from "../../assets/greek_salad.jpg";

const SpecialsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">This Week's Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Special 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
          <img  src={LemonDessert} alt="lemon dessert" />
          
            <h3 className="text-xl font-semibold mb-2">lemon dessert</h3>
            <p className="text-gray-600">Sweet and Sour lemon dessert</p>
            <p className="text-gray-600">Price: $10.99</p>
          </div>

          {/* Special 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
          <img  src={GreekSalad} alt="Greek Salad" />
            <h3 className="text-xl font-semibold mb-2">Greek Salad</h3>
            <p className="text-gray-600">Delicious salad</p>
            <p className="text-gray-600">Price: $12.99</p>
          </div>

          {/* Special 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
          <img  src={LemonDessert} alt="lemon dessert" />
            <h3 className="text-xl font-semibold mb-2">Gf & DF lemon dessert</h3>
            <p className="text-gray-600">Gluten free and Dairy free Lemon dessert</p>
            <p className="text-gray-600">Price: $12.99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
