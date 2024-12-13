import Navbar from "@/components/navbar";
import React from "react";

const About = () => {
  const stats = [
    { label: "Trees Planted", value: "5,000+" },
    { label: "Eco-Warriors", value: "10,000+" },
    { label: "CO₂ Reduced (tons)", value: "20+" },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
        <Navbar/>
      {/* Header Section */}
      <header className="bg-green-700 text-white pt-20 p-10 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-4">
          Making the world greener, one tree at a time.
        </p>
      </header>

      {/* Mission and Vision Section */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Our Mission & Vision
        </h2>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg">
            Our mission is to inspire and empower individuals to protect and
            nurture the planet through plantation and sustainability efforts.  
          </p>
          <p className="text-gray-700 text-lg mt-4">
            We envision a greener, healthier planet for future generations,
            driven by the collective efforts of communities around the world.
          </p>
        </div>
      </section>

      {/* Why Plantation Matters Section */}
      <section className="p-10 bg-green-50">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Why Plantation Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Cleaner Air",
              description: "1 mature tree absorbs 48 pounds of CO₂ annually, purifying the air.",
            },
            {
              title: "Biodiversity",
              description: "Forests provide habitats for 80% of terrestrial species.",
            },
            {
              title: "Climate Resilience",
              description: "Plantation reduces the effects of climate change and prevents soil erosion.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Behind the Initiative */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Our Journey
        </h2>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg">
            It all started with a small team of passionate individuals who
            believed in the power of trees to transform the planet. Over the
            years, we’ve grown into a global movement, empowering thousands of
            people to make a tangible difference in their communities.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="p-10 bg-green-50">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Our Achievements
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <p className="text-4xl font-bold text-green-700">{stat.value}</p>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Join Us
        </h2>
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-4">
            Together, we can make a difference. Plant a tree today and be a part
            of the movement to protect our planet.
          </p>
          <a
            href="/join"
            className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-500"
          >
            Get Involved
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-10 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p>Email: contact@plantationapp.com</p>
        <p>Phone: +123 456 7890</p>
        <p className="mt-4">Follow us on:</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="#"
            className="text-white hover:text-green-300 transition"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-white hover:text-green-300 transition"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-white hover:text-green-300 transition"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
