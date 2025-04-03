import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AdoptionForm = () => {
  const { id } = useParams(); // Get pet ID from URL
  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    reason: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/adoption/request`, {
        petId: id,  // Ensure pet ID is sent correctly
        ...formData,
      });

      if (response.status === 201) {
        alert("Adoption request submitted successfully!");
        navigate("/myAdoption"); // Redirect to My Adoptions page
      }
    } catch (error) {
      console.error("Error submitting adoption request:", error);
      alert("Failed to submit request. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4">Adoption Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <textarea
          name="reason"
          placeholder="Why do you want to adopt this pet?"
          value={formData.reason}
          onChange={handleChange}
          className="border p-2 rounded h-24"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Adoption Request
        </button>
      </form>
    </div>
  );
};

export default AdoptionForm;
