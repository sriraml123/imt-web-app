import React from 'react';
import { Phone, Send, Youtube } from 'lucide-react';

const Header = () => {
    return (
        <div className="w-full font-sans">
            {/* Top announcement bar */}
            <div className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-4 py-4 flex justify-between items-center text-sm sticky top-0 z-50">
                <div>
                    Contact us for information about new batches for training, placements, and internships
                    <span className="text-cyan-300 ml-2 hover:text-cyan-400 hover:underline cursor-pointer transition-colors">
                        Register Now
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <a href="tel:+91-7382427742" className="flex items-center gap-1 hover:text-gray-200">
                        <Phone size={16} />
                        +91-7382427742
                    </a>
                    <a href="https://chat.whatsapp.com/GG3fFkiutuf6rsBbF4ajIJ" target="_blank"
                        rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-200">
                        <Send size={16} />
                        Join What&apos;s App Group
                    </a>
                    <a href="#" className="flex items-center gap-1 hover:text-gray-200">
                        <Youtube size={16} />
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
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-2xl font-bold">
                            Infinity Mega Technologies
                        </span>
                    </div>

                    {/* Navigation links */}
                    <div className="flex items-center gap-8">
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                                Courses
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center gap-1">
                                Services
                            </button>
                            {/* Dropdown content */}
                            <div className="absolute hidden group-hover:block w-48 bg-white border shadow-lg rounded-md mt-2 py-2">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">Classroom Training</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">Online Training</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">Corporate Training</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">Internship</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">IT Consulting</a>
                            </div>
                        </div>

                        <div className="relative group">
                            <button>Resources</button>
                            <div className="absolute hidden group-hover:block w-48 bg-white border shadow-lg rounded-md mt-2 py-2">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">Corporate Training</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">Classroom Training</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-50">On Campus Training</a>
                            </div>
                        </div>

                        <button>Our Branches</button>
                        <button>Placements</button>
                        <button className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors relative">
                            Upcoming Batches
                            <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                                New
                            </span>
                        </button>
                        <button className="bg-indigo-700 text-white px-6 py-2 rounded-full hover:bg-indigo-800 transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
