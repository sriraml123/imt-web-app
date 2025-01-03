"use client"

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const CourseListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'Cloud Data Engineer',
    'AI & Data Science',
    'DevOps & Cloud Computing',
    'Testing Tools',
    'Project Management & Agile',
    'Business Analyst',
    'Cyber Security',
    'Salesforce',
    'Fullstack Development',
    'Medical Coding',
    'Investment Banking'
  ];

  const courses = [
    {
      title: 'Google Cloud Platform',
      category: 'Cloud Data Engineer',
      image: '/api/placeholder/80/80',
      rating: 4.8,
      students: 1200
    },
    {
      title: 'Azure Data Engineer',
      category: 'Cloud Data Engineer',
      image: '/api/placeholder/80/80',
      rating: 4.7,
      students: 980
    },
    {
      title: 'Data Engineering Snowflake',
      category: 'Cloud Data Engineer',
      image: '/api/placeholder/80/80',
      rating: 4.9,
      students: 750
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      {/* <div className="bg-navy-900 text-white p-2 text-center">
        Career Guidance FREE Workshop on 28th December 2024, 10:30 AM.
        <button className="ml-2 text-red-500 font-bold">Register Now</button>
      </div> */}

      {/* Navigation */}
      {/* <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src="/api/placeholder/150/40" alt="QualityThought Logo" className="h-10" />
            <div className="flex space-x-6">
              <button className="text-gray-700 hover:text-blue-600 flex items-center">
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <button className="text-gray-700 hover:text-blue-600">Services</button>
              <button className="text-gray-700 hover:text-blue-600">Resources</button>
              <button className="text-gray-700 hover:text-blue-600">Our Branches</button>
              <button className="text-gray-700 hover:text-blue-600">Placements</button>
            </div>
          </div>
          <button className="bg-indigo-700 text-white px-6 py-2 rounded-md hover:bg-indigo-800">
            Contact Us
          </button>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar */}
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
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.title} className="bg-white rounded-lg shadow-sm hover:shadow-md transition">
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
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1">{course.rating}</span>
                        <span className="mx-2">•</span>
                        <span>{course.students} students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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

export default CourseListing;