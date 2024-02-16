import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: 'Food Item 1', price: 10, quantity: 0 },
    { id: 2, name: 'Food Item 2', price: 12, quantity: 0 },
  ]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (id) => {
    const updatedFoodItems = foodItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setFoodItems(updatedFoodItems);
    updateTotal(updatedFoodItems);
  };

  const handleRemoveFromCart = (id) => {
    const updatedFoodItems = foodItems.map(item => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setFoodItems(updatedFoodItems);
    updateTotal(updatedFoodItems);
  };

  const updateTotal = (items) => {
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !address) {
      alert('Please fill in all fields.');
      return;
    }
    if (!/^\d+$/.test(phone)) {
      alert('Please enter a valid phone number (numbers only).');
      return;
    }

    setName('');
    setEmail('');
    setPhone('');
    setAddress('');

    setSubmitted(true);
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Food Items</h2>
      <div>
        {foodItems.map(item => (
          <div className="flex items-center justify-between border-b border-gray-200 py-2" key={item.id}>
            <p className="text-lg">{item.name} - ${item.price}</p>
            <div className="flex items-center">
              <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md" onClick={() => handleRemoveFromCart(item.id)}>-</button>
              <span className="mx-2">{item.quantity}</span>
              <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md" onClick={() => handleAddToCart(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <p className="text-lg">Total: ${total}</p>
        <form onSubmit={handleSubmit} className="mt-4">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
          <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-md">Submit Order</button>
        </form>
        
        {submitted && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-xl font-bold mb-4">Order submitted successfully!</p>
              <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Go back to Home page</Link>
            </div>
          </div>
        )}
        

      </div>
    </div>
  );
};

export default OrderForm;


