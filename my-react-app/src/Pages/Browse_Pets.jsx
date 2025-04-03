import React, { useEffect, useState } from "react";
import Pets_Cards from "../Components/Pets_Card.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Browse_Pets = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/pet/get`);
      setPets(response.data.pets);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 @min-xs:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 p-6">
      {pets.map((pet) => (
        <Pets_Cards
          key={pet._id}
          pet={pet}
          onClick={() => navigate(`/pet/${pet._id}`)}
        />
      ))}
    </div>
  );
};

export default Browse_Pets;
