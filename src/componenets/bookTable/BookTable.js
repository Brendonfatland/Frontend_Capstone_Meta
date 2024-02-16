import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookTable = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    numberOfPeople: "",
    name: "",
    phone: "",
    email: "",
    occasion: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("your-api-endpoint-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit form data:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to submit form data:", error.message);
    }

    const validationErrors = validateForm(formData);
    try {
      if (Object.keys(validationErrors).length === 0) {
        const response = await fetch("https://api.example.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form data");
        }

        const data = await response.json();
        console.log("Form data submitted to API:", data);
        setSubmitted(true);
      } else {
        setErrors(validationErrors);
      }
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.date) {
      errors.date = "Date is required";
    }
    if (!data.time) {
      errors.time = "Time is required";
    }
    if (!data.numberOfPeople) {
      errors.numberOfPeople = "Number of people is required";
    }
    if (!data.name) {
      errors.name = "Name is required";
    }
    if (!data.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(data.phone)) {
      errors.phone = "Phone number must contain only digits";
    }
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book a Table</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="date" className="block text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-input border border-gray-300 rounded-md px-4 py-2 mb-4"
            />
            {errors.date && <p className="text-red-500">{errors.date}</p>}
          </div>
          <div>
            <label htmlFor="time" className="block text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="form-input border border-gray-300 rounded-md px-4 py-2 mb-4"
            />
            {errors.time && <p className="text-red-500">{errors.time}</p>}
          </div>
          <div>
            <label htmlFor="numberOfPeople" className="block text-gray-700">
              Number of People
            </label>
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              className="form-input border border-gray-300 rounded-md px-4 py-2 mb-4"
            />
            {errors.numberOfPeople && (
              <p className="text-red-500">{errors.numberOfPeople}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input border border-gray-300 rounded-md px-4 py-2 mb-4"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input border border-gray-300 rounded-md px-4 py-2 mb-4"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input border border-gray-300 rounded-md px-4 py-2 mb-4"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="occasion" className="block text-gray-700">
            Occasion
          </label>
          <input
            type="text"
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            className="form-input border border-gray-300 rounded-md px-4 py-2 mb-4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-xl font-bold mb-4">
              Booking submitted successfully!
            </p>
            <p>Date: {formData.date}</p>
            <p>Time: {formData.time}</p>
            <p>Number of People: {formData.numberOfPeople}</p>
            <p>Name: {formData.name}</p>
            <p>Phone: {formData.phone}</p>
            <p>Email: {formData.email}</p>
            <p>Occasion: {formData.occasion}</p>
            <p className="mt-4">
              A confirmation email has been sent to {formData.email}.
            </p>
            <Link
              to="/"
              className="block w-full bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300 text-center"
            >
              Go back to Home page
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTable;
