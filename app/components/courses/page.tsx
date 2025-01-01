"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const courses = [
  {
    title: "Cloud Services",
    image: "https://pics.craiyon.com/2023-07-26/39fb5339a9854a21bec21dcc2ab24a5f.webp",
    training: "45000",
    joip: "60000",
    iandi: "80000 + 30000"
  },
  {
    title: "Full Stack Developer",
    image: "https://images.pexels.com/photos/7653460/pexels-photo-7653460.jpeg?auto=compress&cs=tinysrgb&w=400",
    training: "30000",
    joip: "40000",
    iandi: "80000 + 30000"
  },
  {
    title: "Python Full Stack",
    image: "https://th.bing.com/th/id/OIP.dJToM1TiZiJA0GYwzDHwjQHaHY?rs=1&pid=ImgDetMain",
    training: "30000",
    joip: "55000",
    iandi: "80000 + 30000"
  },
  {
    title: "Data Analytics",
    image: "https://www.visionfulfill.com/wp-content/uploads/2021/04/69015594_m-e1619728547181.jpg",
    training: "40000 + GST",
    joip: "30000",
    iandi: "80000 + 30000"
  },
  {
    title: "Data Science & AI",
    image: "https://th.bing.com/th/id/OIP.fXHgwo8Q58iC_mD_exQWPwHaF7?w=213&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    training: "40000 + GST",
    joip: "30000",
    iandi: "80000 + 30000"
  },
  {
    title: "Artificial Intellgence",
    image: "https://th.bing.com/th/id/OIP.IM5Ch7ZypSUMvqpuydOdYAHaD3?w=330&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    training: "40000 + GST",
    joip: "30000",
    iandi: "80000 + 30000"
  },
  {
    title: "SAP CPI",
    image: "https://th.bing.com/th/id/OIP.WsD7dpWol965-kHKIDFdKQHaEQ?rs=1&pid=ImgDetMain",
    training: "40000 + GST",
    joip: "30000",
    iandi: "80000 + 30000"
  },
  {
    title: "Data Engineering",
    image: "https://www.udacity.com/blog/wp-content/uploads/2020/07/Data-Engineer_Blog-scaled.jpeg",
    training: "40000 + GST",
    joip: "30000",
    iandi: "80000 + 30000"
  },
  {
    title: "DevOps Engineering",
    image: "https://assets-global.website-files.com/5e5e8f604174b0c09d6a05e0/60d42c20b741c60eeca40c17_Devops.jpeg",
    training: "40000 + GST",
    joip: "30000",
    iandi: "80000 + 30000"
  },
];

const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === courses.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleCourses = [...courses.slice(currentIndex), ...courses.slice(0, currentIndex)];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
      
      <div className="relative">
        <div className="flex gap-6 transition-transform duration-500">
          {visibleCourses.slice(0, 4).map((course, idx) => (
            <div key={idx} className="w-1/4 bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <span>Online / Offline Classes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Job Oriented Training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Interview Preparation Tips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Exam Preparation and Assignments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Certification Oriented Training</span>
                  </div>
                </div>

                {/* <h4 className="font-bold text-lg mb-4">Best Price</h4>
                
                <div className="space-y-1 text-gray-600 mb-6">
                  <p>Training : {course.training}</p>
                  <p>JOIP : {course.joip}</p>
                  <p>I&I : {course.iandi}</p>
                </div> */}

                <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => setCurrentIndex(prev => prev === 0 ? courses.length - 1 : prev - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg"
        >
          <ChevronLeft />
        </button>
        
        <button 
          onClick={() => setCurrentIndex(prev => prev === courses.length - 1 ? 0 : prev + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Courses;