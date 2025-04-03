import React from "react";
import { FaSearch, FaPaw, FaFileAlt, FaHome } from "react-icons/fa";
import '../Styles/How.css'

const HowItWorks = () => {
    const steps = [
        { icon: <FaSearch />, title: "Browse Pets", text: "Look through our available pets and find your perfect match." },
        { icon: <FaPaw />, title: "Choose Your Companion", text: "Select a pet that fits your lifestyle and needs." },
        { icon: <FaFileAlt />, title: "Fill Out Adoption Form", text: "Provide some details to help us ensure a good match." },
        { icon: <FaHome />, title: "Welcome Your Pet", text: "Complete the adoption process and bring your new pet home!" },
    ];

    return (
        <div className="py-16 bg-gray-100">
            <h2 className="text-6xl font-bold text-center mb-10 how-heading">🐾 How It Works</h2>

            <div className="grid md:grid-cols-4 gap-8 px-6 md:px-20">
                {steps.map((step, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="text-5xl text-blue-500 mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
