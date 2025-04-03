import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Styles/MyAdopt.css'

const My_Adoptions = () => {

    const [adoptions, setAdoptions] = useState([]);
    const userEmail = localStorage.getItem('email');
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

    useEffect(() => {
        if (!userEmail) return;

        const fetchAdoptions = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/adoption/request/${userEmail}`);
                setAdoptions(response.data.adoptions);
                console.log("Fetching for Email:", userEmail);
                console.log(response.data);

            } catch (error) {
                console.error("Error fetching adoptions:", error);
            }
        };

        fetchAdoptions();

        
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 adopt-form h-[100vh]" >
            <h2 className="text-3xl font-semibold mb-4 text-center">My Adoption Requests</h2>

            {adoptions.length === 0 ? (
                <p className='text-center text-2xl '>No adoption requests found.</p>
            ) : (
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-[20px]">
                            <th className="border p-2 font-extrabold ">Pet ID</th>
                            <th className="border p-2 font-extrabold ">Name</th>
                            <th className="border p-2 font-extrabold ">Reason</th>
                            <th className="border p-2 font-extrabold ">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adoptions && Array.isArray(adoptions) && adoptions.length > 0 ? (
                            adoptions.map((adopt, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border p-2">{adopt.petId?._id || "N/A"}</td>  {/* Display Pet ID */}
                                    <td className="border p-2">{adopt.petId?.name || "N/A"}</td>  {/* Display Pet Name */}
                                    <td className="border p-2">{adopt.reason || "N/A"}</td>
                                    <td className="border p-2">{adopt.status || "Pending"}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="border p-2 text-center">No adoption requests found.</td>
                            </tr>
                        )}
                    </tbody>



                </table>
            )}
        </div>
    )
}

export default My_Adoptions
