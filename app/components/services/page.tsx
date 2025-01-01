"use client"

import React, { useState, useEffect } from 'react';

const ServiceCard = ({ title, description, image }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[660px] flex flex-col">
        <img src={image} alt={title} className="w-full h-64 object-cover flex-shrink-0" />
        <div className="p-6 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed overflow-y-auto">{description}</p>
        </div>
    </div>
);

const OurServices = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const services = [
        {
            title: "Classroom Training",
            description: "Infinity Mega Technologies's classroom courses provide practical, engaging learning experiences with expert instructors committed to supporting your career growth.",
            image: "https://media.istockphoto.com/id/1166978137/photo/male-speaker-giving-presentation-in-hall-at-university-workshop.jpg?s=612x612&w=0&k=20&c=OC4wH_PMhXIurkHbBf1IDVD8s2TVct90HV17l6gnz_w="
        },
        {
            title: "Online Training",
            description: "Our online training programs provide the convenience of self-paced learning, with a broad selection of courses and resources available at your fingertips.",
            image: "https://media.istockphoto.com/id/1434116614/photo/teamwork-diversity-and-sales-manager-planning-branding-ideas-with-a-creative-designer-on-a.jpg?s=612x612&w=0&k=20&c=0qDHz0EDKEgxqcRP7V-YWaGv9nrjKDXG5lz8svrlbcQ="
        },
        {
            title: "Corporate Training",
            description: "Our corporate training is customized to meet your specific needs, offering personalized learning solutions that drive organizational growth and success.",
            image: "https://media.istockphoto.com/id/1049828098/photo/speaker-talking-in-seminar-with-many-of-audiences-for-business-meeting-for-key-of-success.jpg?s=612x612&w=0&k=20&c=arIWrDpbFuYBlKiVZzKXcKKNwc7BelyUNSn7XpuClCE="
        },
        {
            title: "Internship",
            description: "Our internship training is designed to tailor learning experiences that contribute to your organization's success and growth.",
            image: "https://media.istockphoto.com/id/1051777582/photo/group-of-young-candidates-sitting-at-boardroom-table-listening-to-presentation-at-business.jpg?s=612x612&w=0&k=20&c=GSpSRRGecJA8bRcXlnG8NruSLcXRSMOPU2yCwgVFv2o="
        },
        {
            title: "IT Consulting",
            description: "Infinity Mega Technologies is a top training institute in Hyderabad, providing expert classroom training in Data Engineering, DevOps Engineering, SQL, Python, Power BI, Full Stack Python, Full Stack Development, Testing, Medical Coding, Data Science & AI, and Artificial Intelligence (AI).",
            image: "https://media.istockphoto.com/id/1291751221/photo/the-sales-department-scores-again.jpg?s=612x612&w=0&k=20&c=m5TBkQ4fpqEjX372FqL6pQ3I4oGLFdYQVtK-kgZc_Lw="
        },
    ];

    const duplicatedServices = [...services, ...services];

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(prev => {
                    const nextSlide = prev + 1;
                    if (nextSlide >= services.length) {
                        setTimeout(() => {
                            setIsTransitioning(false);
                            setCurrentSlide(0);
                        }, 0);
                        return prev;
                    }
                    setTimeout(() => setIsTransitioning(false), 500);
                    return nextSlide;
                });
            }
        }, 3000);

        return () => clearInterval(timer);
    }, [services.length, isTransitioning]);

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                <div className="relative overflow-hidden">
                    <div
                        className={`flex ${isTransitioning ? 'transition-transform duration-500' : ''} ease-in-out`}
                        style={{ transform: `translateX(-${currentSlide * 25}%)` }}
                    >
                        {duplicatedServices.map((service, index) => (
                            <div key={index} className="w-1/4 flex-shrink-0 px-4">
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;