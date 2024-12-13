import Navbar from "@/components/navbar";
import React from "react";

const Events = () => {
  const upcomingEvents = [
    {
      name: "Tree Plantation Drive",
      date: "December 10, 2024",
      location: "Central Park",
      description: "Join us to plant 500 trees and make the city greener.",
    },
    {
      name: "Gardening Workshop",
      date: "December 15, 2024",
      location: "Community Center",
      description: "Learn the basics of gardening and sustainable practices.",
    },
  ];

  const ongoingEvents = [
    {
      name: "Save the Soil Campaign",
      date: "Ongoing",
      location: "Nationwide",
      description: "Promoting soil conservation through awareness drives.",
    },
  ];

  const pastEvents = [
    {
      name: "World Environment Day Celebration",
      date: "June 5, 2024",
      location: "City Hall",
      description:
        "Over 1,000 trees were planted to celebrate the environment.",
    },
    {
      name: "School Gardening Day",
      date: "August 20, 2024",
      location: "Greenwood High School",
      description:
        "Students participated in creating a beautiful school garden.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 pt-20">
        <Navbar/>
      {/* Hero Section */}
      <header className="bg-green-700 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Our Events</h1>
        <p className="text-lg mt-4">
          Events that inspire and bring communities together for a greener future.
        </p>
      </header>

      {/* Upcoming Events */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Upcoming Events
        </h2>
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center"
            >
              <div className="mb-4 md:mb-0 md:w-3/4">
                <h3 className="text-xl font-semibold text-green-700">
                  {event.name}
                </h3>
                <p className="text-gray-600">{event.description}</p>
                <p className="text-gray-700 mt-2">
                  Date: {event.date} | Location: {event.location}
                </p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500">
                Join Event
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Ongoing Events */}
      <section className="p-10 bg-green-50">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Ongoing Events
        </h2>
        {ongoingEvents.length > 0 ? (
          <div className="space-y-6">
            {ongoingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center"
              >
                <div className="mb-4 md:mb-0 md:w-3/4">
                  <h3 className="text-xl font-semibold text-green-700">
                    {event.name}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                  <p className="text-gray-700 mt-2">
                    Status: {event.date} | Location: {event.location}
                  </p>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No ongoing events at the moment.</p>
        )}
      </section>

      {/* Past Events */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Past Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-green-700">
                {event.name}
              </h3>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-gray-700 mt-2">
                Date: {event.date} | Location: {event.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-10 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Organize an Event?</h2>
        <p className="text-lg mb-6">
          Join hands with us to create impactful events that bring communities
          together and protect our planet.
        </p>
        <a
          href="/organize-event"
          className="px-6 py-3 bg-white text-green-700 font-bold rounded-lg shadow-md hover:bg-gray-200"
        >
          Organize an Event
        </a>
      </section>
    </main>
  );
};

export default Events;
