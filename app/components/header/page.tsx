"use client"

import React, { useState } from 'react';
import { Phone, Send, Youtube, ChevronDown, MessageCircle } from 'lucide-react';

// Define a type for the course categories
type CourseCategory = 'Cloud Data Engineer' | 'DevOps Engineer' | 'Data Analytics & Data science' | 'Data science & AI' | 'AI' | 'Fullstack Development' | 'Testing' | 'Cyber Security' | 'Medical Coding';

type CourseDetails = {
    title: string;
    category: string;
    image: string;
    // rating: number;
    // students: number;
    description?: string;
    // duration?: string;
    prerequisites?: string[];
    syllabus?: string[];
    // price?: string;
};

const Header = () => {
    const [showCourses, setShowCourses] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('Cloud Data Engineer');
    const [selectedCourse, setSelectedCourse] = useState<CourseDetails | null>(null);

    const scrollToSupport = () => {
        const supportSection = document.getElementById('support-section');
        if (supportSection) {
            supportSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const categories: CourseCategory[] = [
        'Cloud Data Engineer',
        'DevOps Engineer',
        'Data Analytics & Data science',
        'Data science & AI',
        'AI',
        'Fullstack Development',
        'Testing',
        'Cyber Security',
        'Medical Coding'
    ];

    const allCourses: Record<CourseCategory, CourseDetails[]> = {
        'Cloud Data Engineer': [
            {
                title: 'Azure Data Engineer',
                category: 'Cloud Data Engineer',
                image: 'https://www.kevinrchant.com/wp-content/uploads/2021/05/microsoft-certified-azure-data-engineer-associate.png',
                // rating: 4.8,
                // students: 1200,
                description: 'Master Azure data engineering with hands-on training in data lakes, data warehousing, and ETL processes.',
                // duration: '6 months',
                prerequisites: ['Basic SQL knowledge', 'Programming fundamentals'],
                syllabus: ['Azure Fundamentals', 'Data Factory', 'Synapse Analytics', 'Azure Databricks'],
                // price: '$999'
            },
            {
                title: 'AWS Data Engineer',
                category: 'Cloud Data Engineer',
                image: 'https://d1.awsstatic.com/certification/badges/AWS-Certified-Data-Engineer-Associate_badge_300x300.a231ff0ff32a28adf061d3f7fa36564964b4a4b5.png',
                // rating: 4.7,
                // students: 980,
                description: 'Comprehensive AWS data engineering course covering S3, Redshift, and EMR.',
                // duration: '6 months',
                prerequisites: ['Basic SQL knowledge', 'Programming basics'],
                syllabus: ['AWS Basics', 'S3 & Glacier', 'Redshift', 'EMR & Glue'],
                // price: '$999'
            },
            {
                title: 'Google Data Engineer',
                category: 'Cloud Data Engineer',
                image: 'https://miro.medium.com/v2/resize:fit:1200/1*T0_akZfhC_BmZNc0znAtdQ.png',
                // rating: 4.9,
                // students: 750,
                description: 'Learn GCP data engineering with BigQuery, Dataflow, and Pub/Sub.',
                // duration: '6 months',
                prerequisites: ['SQL basics', 'Programming knowledge'],
                syllabus: ['GCP Fundamentals', 'BigQuery', 'Dataflow', 'Pub/Sub'],
                // price: '$999'
            }
        ],
        'AI': [
            {
                title: 'Machine Learning Engineer',
                category: 'AI',
                image: 'https://smartclick.ai/wp-content/uploads/2021/11/machine-learning-engineer.jpg',
                // rating: 4.9,
                // students: 850
            },
            {
                title: 'Deep Learning Specialist',
                category: 'AI',
                image: 'https://d15cw65ipctsrr.cloudfront.net/a4/079d5e7c7b45ac9107f22bfcfeab91/Specialization-logo.png',
                // rating: 4.8,
                // students: 720
            }
        ],
        'DevOps Engineer': [
            {
                title: 'AWS DevOps',
                category: 'DevOps Engineer',
                image: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-DevOps-Engineer-Professional_badge.7492bf660b5351e51f3f8015e4818924294a7e8c.png',
                // rating: 4.7,
                // students: 650
            },
            {
                title: 'Azure DevOps',
                category: 'DevOps Engineer',
                image: 'https://miro.medium.com/v2/resize:fit:800/1*8orwInnxqPRhrcKf9aOo9Q.png',
                // rating: 4.6,
                // students: 580
            }
        ],
        'Data Analytics & Data science': [], // Added empty array
        'Data science & AI': [], // Added empty array
        'Fullstack Development': [
            {
                title: 'Python Full Stack Development',
                category: 'Fullstack Development',
                image: 'https://cloudsynergy.in/wp-content/uploads/2023/11/python-fiullstack-1.png',
            },
            {
                title: 'Java Full Stack Development',
                category: 'Fullstack Development',
                image: 'https://www.vagdevitechnologies.com/wp-content/uploads/2024/11/Java-full-stack-1024x683.jpeg',
            },
            {
                title: 'PHP Full Stack Development',
                category: 'Fullstack Development',
                image: 'https://backendapi.iihtsrt.com/wp-content/uploads/2022/07/PHP-Full-Stack.jpg?q=75',
            },
            {
                title: '.NET Full Stack Development',
                category: 'Fullstack Development',
                image: 'https://avantustraining.com/wp-content/uploads/2023/03/net-fullstack-developer.webp',
            },
        ],
        'Testing': [
            {
                title: 'Manual Testing',
                category: 'Testing',
                image: 'https://cdn.azilen.com/wp-content/uploads/2023/07/Manual-testing.jpg',
            },
            {
                title: 'Automation Testing',
                category: 'Testing',
                image: 'https://qentelli.com/sites/default/files/2024-01/top-automation-testing-tools.png',
            },
        ],
        'Cyber Security': [], // Added empty array
        'Medical Coding': [] // Added empty array
    };

    const handleCategoryChange = (category: CourseCategory) => {
        setSelectedCategory(category);
        setSelectedCourse(null); // Reset selected course when changing categories
    };

    const filteredCourses = allCourses[selectedCategory] || [];

    return (
        <div className="w-full font-sans">
            {/* Top announcement bar */}
            <div className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-4 py-4 flex justify-between items-center text-sm sticky top-0 z-50">
                <div>
                    Contact us for information about new batches for training, placements, and internships
                    <span className="text-red-400 ml-2 hover:text-red-500 hover:underline cursor-pointer transition-colors">
                        Register Now
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <a href="tel:+91-7382427742" className="flex items-center gap-1 hover:text-gray-200">
                        <Phone size={16} />
                        +91-7382427742
                    </a>
                    <a href="https://chat.whatsapp.com/GG3fFkiutuf6rsBbF4ajIJ" className="flex items-center gap-1 hover:text-gray-200">
                        <Send size={16} />
                        Join Whats App Group
                    </a>
                    <a href="#" className="flex items-center gap-1 hover:text-gray-200">
                        <Youtube size={16} color="red" />
                        Our YouTube
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        Exam Practice
                    </a>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="bg-white shadow-sm px-4 py-3 sticky top-[48px] z-40">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="flex items-center">
                        <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-2xl font-bold">
                            Infinity Mega Technologies
                        </span>
                    </div>

                    <div className="flex items-center gap-8">
                        <button
                            className="flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                            onClick={() => setShowCourses(!showCourses)}
                        >
                            Courses
                            <ChevronDown size={16} />
                        </button>
                        <div className="relative group">
                            <button className="flex items-center gap-1">Services</button>
                            <div className="absolute hidden group-hover:block w-48 bg-white border shadow-lg rounded-md mt-2 py-2">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">Classroom Training</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">Online Training</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">Corporate Training</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">Internship</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">IT Consulting</a>
                            </div>
                        </div>
                        <button>Resources</button>
                        <button>Our Branches</button>
                        <button>Placements</button>
                        <button className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors relative">
                            Upcoming Batches
                            <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                                New
                            </span>
                        </button>
                        <button onClick={scrollToSupport} className="bg-indigo-700 text-white px-6 py-2 rounded-full hover:bg-indigo-800 transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </nav>

            {/* Course Listing */}
            {showCourses && (
                <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
                    <div className="w-64 flex-shrink-0">
                        <div className="bg-white rounded-lg shadow p-4">
                            <h3 className="font-semibold text-lg mb-4">Categories</h3>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={`w-full text-left px-3 py-2 rounded-md transition ${selectedCategory === category
                                            ? 'bg-blue-50 text-blue-700'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                        onClick={() => handleCategoryChange(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredCourses.map((course) => (
                                    <div
                                        key={course.title}
                                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                                        onClick={() => setSelectedCourse(course)}
                                    >
                                        <div className="p-4">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={course.image}
                                                    alt={course.title}
                                                    className="w-20 h-20 rounded-lg object-cover"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-lg">{course.title}</h3>
                                                    <p className="text-sm text-gray-500">{course.category}</p>
                                                    <div className="mt-2 flex items-center text-sm">
                                                        {/* <span className="mx-2">•</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {selectedCourse && (
                                <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h2>
                                            <p className="mt-2 text-gray-600">{selectedCourse.description}</p>
                                        </div>
                                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                                            Enroll Now
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8 mt-8">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4">Course Details</h3>
                                            <div className="space-y-3">
                                                {/* <p><span className="font-medium">Duration:</span> {selectedCourse.duration}</p> */}
                                                {/* <p><span className="font-medium">Price:</span> {selectedCourse.price}</p> */}
                                                <div>
                                                    <p className="font-medium mb-2">Prerequisites:</p>
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        {selectedCourse.prerequisites?.map((prereq, index) => (
                                                            <li key={index}>{prereq}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4">Syllabus Highlights</h3>
                                            <ul className="list-disc pl-5 space-y-2">
                                                {selectedCourse.syllabus?.map((topic, index) => (
                                                    <li key={index}>{topic}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Chat Widget */}
            <div className="fixed bottom-4 right-4">
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <p className="text-gray-700">Would you like to find out the Best Course for You?</p>
                    <MessageCircle className="absolute bottom-4 right-4 text-blue-600 h-6 w-6" />
                </div>
            </div>
        </div>
    );
};

export default Header;