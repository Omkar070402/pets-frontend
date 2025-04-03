import React from 'react'
import '../Styles/Adopt.css'

const Adopt = () => {
    return (
        <div className="mt-5">
            <div className="relative w-full h-screen">
              
                <video 
                    src="./assets/dogs-videos.mp4" 
                    className="absolute top-0 left-0 w-full h-full object-cover brightness-50" 
                    autoPlay 
                    loop 
                    muted
                ></video>

                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 adopt">
                    <h1 className="text-7xl font-bold">Find Your Perfect Pet Companion</h1>
                    <p className="text-4xl mt-4">Adopt, care, and love. Join our community of pet lovers today!</p>

                    <div className="mt-6 space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-xl">Browse Pets</button>
                        <button className="bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg text-xl">Learn More</button>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Adopt
