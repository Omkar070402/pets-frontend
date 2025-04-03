import React from 'react'
import '../Styles/Pets_card.css'

const Pets_Card = ({ pet, onClick }) => {
  return (
    <div
      className="p-4  rounded-lg md:h-full flex flex-col justify-center items-center shadow shadow-cyan-950 w-72 cursor-pointer hover:shadow-lg transition duration-300 font-semibold pets-card"
      onClick={onClick}
    >
      {/* ✅ Fix height issue */}
      <div className="h-52 w-full overflow-hidden p-3">
        {/* ✅ Use proper hover scale */}
        <img
          src={pet.images[1]}
          alt="Pet"
          className="h-full w-full object-cover shadow shadow-blue-300 hover:shadow-lg rounded-lg transition-transform duration-300 hover:scale-110"
        />
      </div>

      <h2 className="text-3xl font-bold mt-4">{pet.breed}</h2>
      <p>Gender: {pet.gender}</p>
      <p>Age: {pet.age} years</p>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        View Now
      </button>
    </div>

  )
}

export default Pets_Card
