import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import '../Styles/Success.css'
const Success_Stories = () => {

    const stories = [
        {
            id: 1,
            text: 'Hi,Im John . adopted a street dog , which has become my family member . Try , reaching out here , because humanity needs us'
        },
        {
            id: 2,
            text: 'Hi,Im Ram . adopted a street dog , which has become my family member . Try , reaching out here , because humanity needs us'
        },
        {
            id: 3,
            text: 'Hi,Im Sheela . adopted a street dog , which has become my family member . Try , reaching out here , because humanity needs us'
        },
    ]

    return (
        <div className="py-10 bg-gray-100">
            <h2 className="text-6xl font-bold text-center mb-6 success-heading">🐶 Success Stories</h2>

            <div className="grid md:grid-cols-3 gap-6 px-6">
                {stories.map((story) => (
                    <div key={story.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaQuoteLeft className="text-blue-500 text-3xl mb-3 mx-auto" />
                        <p className="text-gray-700 text-lg">{story.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Success_Stories
