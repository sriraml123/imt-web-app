import React from 'react';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">ABOUT INFINITY MEGA TECHNOLOGIES</span>
                    {/* <span className="text-green-500"></span> */}
                </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <img
                    src="https://media.istockphoto.com/id/909472354/photo/these-experts-know-what-theyre-doing.jpg?s=612x612&w=0&k=20&c=HSTZjT4m7hVyL5E3-AADU5RYEeL4WPkIxX4Dy2ll2HI="
                    alt="Training Session"
                    className="rounded-lg shadow-lg"
                />
                <div>
                    <p className="text-gray-700 mb-6">
                        Infinity Mega Technologies is a premier software training institute
                        located in Hyderabad, KPHB, renowned for offering extensive courses
                        across various software technologies. Our programs are led by
                        seasoned industry professionals, ensuring practical and relevant
                        knowledge. Each session includes dedicated lab practice to enhance
                        your hands-on skills, complemented by a mandatory project that
                        simulates real-world scenarios in your chosen domain.
                    </p>
                    <p className="text-gray-700">
                        Along with in-depth training, Infinity Mega Technologies offers
                        robust career support to guide you toward securing your ideal job.
                        Our services include professional resume crafting, regular
                        assessments, mock interview sessions, LinkedIn profile
                        optimization, hands-on experience with agile practices, online
                        aptitude training, and dedicated job placement assistance.
                    </p>
                    <button className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
                        Know More
                    </button>
                </div>

            </div>
        </div>
    );
};

export default About;