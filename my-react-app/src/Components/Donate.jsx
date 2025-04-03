import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Styles/Donate.css'


const Donate = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade : true
    };

    const donations = [
        { img: "/assets/rescue1.jpg", text: "Help rescue abandoned pets." },
        { img: "/assets/rescue2.jpg", text: "Provide medical care for injured pets." },
        { img: "/assets/rescue3.jpg", text: "Your donation feeds hungry animals." },
    ];

    return (
        <div className="py-16 bg-gray-100 text-center donate">
            <h2 className="text-6xl font-bold text-gray-800 mb-6 ">Make a Difference</h2>

            <Slider {...settings} className="w-full mx-auto">
                {donations.map((donation, index) => (
                    <div key={index} className="flex flex-col items-center  text-center mt-5">
                        <div className="w-full flex justify-center ms-10 ">
                            <img
                                src={donation.img}
                                alt="Donation Cause"
                                className=" sm:w-[100%] me-20 p-3 md:w-[50%]  h-96 object-cover shadow rounded-lg"
                            />
                        </div>
                        <p className="text-4xl font-semibold text-gray-700 mt-4">{donation.text}</p>
                    </div>
                ))}
            </Slider>


            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 px-10 rounded-lg text-lg">
                Donate Now
            </button>
        </div>
    );
}

export default Donate
