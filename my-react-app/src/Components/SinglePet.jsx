import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../Styles/SinglePet.css'


const SinglePet = () => {

    const { id } = useParams()
    const [pet, setPet] = useState([])
    const navigate = useNavigate()
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL



    const fetchData = async () => {

        try {

            const response = await axios.get(`${BACKEND_URL}/api/v1/pet/get/${id}`)
            setPet(response.data.pet)

        } catch (error) {
            console.error(error);


        }



    }

    useEffect(() => {
        fetchData()
    }, [])


    return (


        <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-8 single-card mt-10 h-[100vh]">
         
            {/* Left Side - Images */}
            <div className="flex flex-col gap-10 overflow-x-auto whitespace-nowrap  md:w-1/2 ">
                {pet?.images?.map((imgUrl, index) => (
                    <img
                        key={index}
                        src={imgUrl}
                        alt={`Pet ${pet?.name}`}
                        className="w-50 h-50 object-cover rounded-xl  shadow-lg"
                    />
                ))}
            </div>

            {/* Right Side - Pet Details */}
            <div className="md:w-1/2 flex flex-col gap-4 justify-center ">
                <h2 className="text-5xl font-semibold">{pet.name}</h2>
                <p className="text-gray-800 text-2xl">{pet.description}</p>
                <p className='text-[18px]'><strong>Breed:</strong> {pet.breed}</p>
                <p className='text-[18px]'><strong>Age:</strong> {pet.age} years</p>
                <p className='text-[18px]'><strong>Gender:</strong> {pet.gender}</p>
                <p className='text-[18px]'><strong>Location:</strong> {pet.location}</p>
                <p className='text-[18px]'><strong>Status:</strong> {pet.adoptionStatus}</p>

                {/* Adopt Button */}
                <button
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => navigate(`/adopt/${pet._id}`)}
                >
                    Adopt Now
                </button>
            </div>

        </div>






    )
}

export default SinglePet
