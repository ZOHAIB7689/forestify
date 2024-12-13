import React from "react";

const Initiative = () => {
  const initiatives = [
    {
      title: "Green City Campaign",
      description:
        "An urban tree plantation drive to make our cities cleaner and greener.",
      progress: 75,
    },
    {
      title: "School Garden Initiative",
      description:
        "Engaging students in hands-on gardening activities to promote sustainability.",
      progress: 50,
    },
    {
      title: "Save the Soil Project",
      description:
        "A movement to educate people on soil conservation and sustainable practices.",
      progress: 90,
    },
  ];

  const upcomingEvents = [
    { name: "Tree Plantation Drive", date: "December 10, 2024", location: "Central Park" },
    { name: "Gardening Workshop", date: "December 15, 2024", location: "Community Center" },
    { name: "Save the Soil Awareness Walk", date: "December 20, 2024", location: "Main Square" },
  ];

  return (
    <main className="min-h-screen bg-gray-100 ">
      {/* Hero Section */}
      <header className="bg-green-700 pt-16 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Our Initiatives</h1>
        <p className="text-lg mt-4">
          Driving change, one step at a time. Explore our ongoing and upcoming efforts to create a sustainable future.
        </p>
      </header>

      {/* Featured Initiatives */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Featured Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {initiative.title}
              </h3>
              <p className="text-gray-600">{initiative.description}</p>
              <div className="mt-4">
                <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-green-600 h-full rounded-full"
                    style={{ width: `${initiative.progress}%` }}
                  ></div>
                </div>
                <p className="text-gray-700 text-sm mt-2">
                  Progress: {initiative.progress}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="p-10 bg-green-50">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Upcoming Events
        </h2>
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-green-700">
                  {event.name}
                </h3>
                <p className="text-gray-600">
                  {event.date} - {event.location}
                </p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500">
                Join
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-10 bg-white text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Get Involved</h2>
        <p className="text-gray-700 text-lg mb-6">
          Join us in our mission to create a greener, healthier planet. Every small step makes a big difference.
        </p>
        <a
          href="/join"
          className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-500"
        >
          Become a Volunteer
        </a>
      </section>

      {/* Support Section */}
      <section className="p-10 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Support Our Cause</h2>
        <p className="text-lg mb-6">
          Your support helps us reach more communities and plant more trees. Together, we can make a lasting impact.
        </p>
        <a
          href="/donate"
          className="px-6 py-3 bg-white text-green-700 font-bold rounded-lg shadow-md hover:bg-gray-200"
        >
          Donate Now
        </a>
      </section>
    </main>
  );
};

export default Initiative;
