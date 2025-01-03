"use client"

import React, { useState } from 'react';
import { Youtube, Facebook, Linkedin, Instagram, Send, Phone, Globe, X } from 'lucide-react';

const LearnerSupportSection = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const socialLinks = [
        { icon: Youtube, color: 'bg-red-600 hover:bg-red-700', label: 'YouTube' },
        { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700', label: 'Facebook' },
        { icon: Linkedin, color: 'bg-blue-700 hover:bg-blue-800', label: 'LinkedIn' },
        { icon: Instagram, color: 'bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600', label: 'Instagram' },
    ];

    return (
        <div id="support-section" className="max-w-6xl mx-auto px-4 py-16 space-y-16 bg-gradient-to-b from-white to-gray-50">
            {/* Support Section */}
            <div className="space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        24/7 Expert Support
                    </h1>
                    <p className="text-xl text-gray-600">
                        Our dedicated team is here to help you succeed
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {/* Indian Nationals */}
                    <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center space-x-6">
                            <div className="w-16 h-16 relative animate-pulse">
                                <div className="w-full h-full rounded-full bg-white border-2 border-gray-200 overflow-hidden">
                                    <div className="h-1/3 bg-orange-500" />
                                    <div className="h-1/3 bg-white" />
                                    <div className="h-1/3 bg-green-500" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <span className="font-bold text-2xl text-gray-800">Indian Nationals</span>
                                <a href="tel:+917382427742"
                                    className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-green-500 text-white group-hover:from-orange-600 group-hover:to-green-600 transition-all">
                                    <Phone className="w-5 h-5 mr-3 animate-bounce" />
                                    <span className="font-semibold">+91-7382427742</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Foreign Nationals */}
                    <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center space-x-6">
                            <div className="w-16 h-16 animate-pulse">
                                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <span className="font-bold text-2xl text-gray-800">Foreign Nationals</span>
                                <a href="tel:+917382427742"
                                    className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                                    <Phone className="w-5 h-5 mr-3 animate-bounce" />
                                    <span className="font-semibold">+91-7382427742</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Community Section */}
            <div className="text-center space-y-8 py-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Join Our Social Community
                </h2>
                <p className="text-xl text-gray-600">Stay Connected, Stay Inspired!</p>

                <div className="flex flex-wrap justify-center gap-4">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`p-4 text-white rounded-lg transform hover:scale-110 transition-all duration-300 ${social.color}`}
                            title={social.label}
                        >
                            <social.icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Chat Widget */}
            <div className="fixed bottom-6 right-6 flex items-end space-x-4 z-50">
                {isChatOpen && (
                    <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm animate-fade-in">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-lg">Discover Your Path to Success</h3>
                            <button
                                onClick={() => setIsChatOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-gray-700 mb-4">
                        Let us guide you in choosing the perfect course to help you <span className="font-bold text-blue-600">achieve your goals!</span>
                        </p>
                        <a
                            href="https://chat.whatsapp.com/GG3fFkiutuf6rsBbF4ajIJ?text=Hi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
                        >
                            Start Chat
                        </a>
                    </div>
                )}
                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                    <Send className="w-6 h-6 text-white" />
                </button>
            </div>


        </div>
    );
};

export default LearnerSupportSection;