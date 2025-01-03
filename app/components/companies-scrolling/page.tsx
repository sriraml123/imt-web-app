"use client"

import React from 'react';

const LogoScroll = () => {
  const logos = [
    {
      name: "HCL",
      url: "data:image/jpeg;base64,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"
    },
    {
      name: "Microsoft",
      url: "https://th.bing.com/th/id/R.03d3a537bd75c4e24aa47a29c944a44e?rik=lsJ8RX3JWruWtg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-iR9975oRrmQ%2fT0zNn7yT3xI%2fAAAAAAAAHtA%2fTVoybOO2Tgg%2fs1600%2fMicrosoftLogo_company_logo_pictures_with_name_business_brand_marketing_.jpg&ehk=Yh1E1fhM7RkgbimI2BYN%2fjjpVLUtAkvZFFtWdo0MAFo%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      name: "Google",
      url: "https://th.bing.com/th/id/OIP.iDvQH2mK3omhPoWdSonQVgHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      name: "Infosys",
      url: "https://ts3.mm.bing.net/th?id=OIP.z_OvQzz13SS6eIHvkv8i_wHaDf&pid=15.1"
    },
    {
      name: "Accenture",
      url: "https://images.squarespace-cdn.com/content/v1/5d23ae890b7dee000180ec51/1586367987659-BZ5L8BA1UZBLNVFMATYK/ke17ZwdGBToddI8pDm48kPjg6bM-W17gCtBWJ8Mjp2AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnBItPiluyZS-UhYJJ6omcW3Y-2_8y8J8iHad74oPUfQWBOqOCHXbC31Z0m-iT7ZRQQ/accenturelogo.png"
    },
    {
      name: "IBM",
      url: "https://th.bing.com/th/id/OIP.sROvu7mrrCrUgbg35Mg2sgAAAA?rs=1&pid=ImgDetMain"
    },
    {
      name: "Oracle",
      url: "https://loghi-famosi.com/wp-content/uploads/2020/09/Oracle-Simbolo.png"
    },
  ];

  return (
    <div className="w-full bg-white p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Leading with Collaboration, Innovating with Purpose      </h2>

      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="w-[300px] flex-shrink-0 px-2"
            >
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-32">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-[160px] max-h-[60px] object-contain"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="w-[300px] flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-[160px] max-h-[60px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoScroll;