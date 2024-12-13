'use client';

import React from 'react';

const Section2: React.FC = () => {
  const sections = [
    {
      title: '1 Million Trees Planted 🌳',
      description:
        'Our mission to restore greenery is well underway. Every tree we plant contributes to a healthier planet for future generations.',
      image: '/download.jpg', // Replace with actual image paths
    },
    {
      title: '200+ Volunteers 🌱',
      description:
        'Our growing team of passionate volunteers is driving change one step at a time. Together, we’re making a difference.',
      image: '/group.jpg',
    },
    {
      title: 'Global Reach 🌍',
      description:
        'With 50+ projects across the world, we’re expanding our efforts to build a sustainable future for all.',
      image: '/map.jpg',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-12">
          Together, We Make an Impact
        </h2>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-8 mb-12`}
          >
            {/* Image */}
            <div className="flex-1">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-semibold text-green-600 mb-4">
                {section.title}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {section.description}
              </p>
              <button className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
