import Navbar from "@/components/navbar";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaypal,
  FaCreditCard,
  FaBitcoin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-100">
        <Navbar/>
      {/* Hero Section */}
      <header className="bg-green-700 text-white pt-20 p-10 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-4">
          We’d love to hear from you! Reach out for any queries, collaborations, or to support our cause.
        </p>
      </header>

      {/* Contact Form */}
      <section className="p-10  bg-center bg-cover md:bg-[url('/bg2.jpg')]">
        <h2 className="text-3xl font-bold text-green-800 md:text-green-400 mb-6 text-center">Send Us a Message</h2>
        <form className="max-w-3xl mx-auto bg-green-50 p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-bold">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 rounded-lg shadow hover:bg-green-500"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Social Media Links */}
      <section className="p-10 bg-green-100 md:bg-gray-300 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Connect with Us</h2>
        <div className="flex justify-center space-x-6 text-green-700">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-green-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-green-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-green-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-green-500"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </section>

      {/* Donate Section */}
      <section className="p-10 bg-white md:bg-[url('/growing.jpg')] bg-center bg-cover">
        <h2 className="text-3xl font-bold text-green-800 md:text-green-400 mb-6 text-center">Support Our Cause</h2>
        <p className="text-gray-700 md:text-gray-300 text-center mb-6">
          Your contributions help us plant more trees, protect the environment, and create a sustainable future.
        </p>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex flex-col items-center bg-green-50/30 backdrop:blur-lg p-6 rounded-lg shadow-md">
            <FaPaypal className="text-4xl text-green-700 mb-4" />
            <button className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-green-500">
              Donate with PayPal
            </button>
          </div>
          <div className="flex flex-col bg-green-50/30 backdrop:blur-lg items-center bg-green-50 p-6 rounded-lg shadow-md">
            <FaCreditCard className="text-4xl text-green-700 mb-4" />
            <button className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-green-500">
              Donate with Card
            </button>
          </div>
          <div className="flex flex-col items-center bg-green-50/30 backdrop:blur-lg hover:scale-105  p-6 rounded-lg shadow-md">
            <FaBitcoin className="text-4xl text-green-700 mb-4" />
            <button className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-green-500">
              Donate with Bitcoin
            </button>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="p-10 bg-[url('/kashmir.jpg')] bg-cover bg-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Our Office</h2>
        <div className="max-w-4xl mx-auto bg-gray-300 p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-center mb-6">
            Visit us at our office for more details:
            <br />
            <strong>123 Green Street, Nature City, Earth</strong>
          </p>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.836725567727!2d-122.41941518468145!3d37.77492977975885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c2a285ef%3A0xe5c024751debe5c7!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2s!4v1636970071824!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
