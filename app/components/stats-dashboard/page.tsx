import React from 'react';
import { Users, BookOpen, UserCheck, Building2 } from 'lucide-react';

const StatsDashboard = () => {
  const stats = [
    {
        id: 1,
        number: '500+',
        label: 'Students Trained',
        icon: Users,
        color: 'bg-gradient-to-r from-blue-500 to-cyan-600'
      },
      {
        id: 2,
        number: '300+',
        label: 'Students Placed',
        icon: UserCheck,
        color: 'bg-gradient-to-r from-orange-500 to-red-600'
      },
    {
      id: 3,
      number: '50+',
      label: 'Placement Companies',
      icon: Building2,
      color: 'bg-gradient-to-r from-purple-500 to-indigo-600'
    },
    {
      id: 4,
      number: '3',
      label: 'Years of Student Trust',
      icon: BookOpen,
      color: 'bg-gradient-to-r from-emerald-500 to-teal-600'
    },
    
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our <span className="text-blue-600">Achievements</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`${stat.color} rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 shadow-xl`}
          >
            <div className="flex flex-col items-center text-white">
              <stat.icon className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsDashboard;