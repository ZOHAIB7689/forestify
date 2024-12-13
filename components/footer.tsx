'use client';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: About */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">Plant The Earth</h2>
          <p className="mt-4 text-gray-400">
            Join our mission to create a greener and sustainable planet for the future.
          </p>
          <div className="mt-6">
            <h3 className="font-medium text-gray-200">Contact:</h3>
            <p>Email: info@planttheearth.org</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-cyan-400">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-cyan-500 transition duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="hover:text-cyan-500 transition duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-cyan-500 transition duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#donate"
                className="hover:text-cyan-500 transition duration-200"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Social Media */}
        <div>
          <h3 className="text-xl font-bold text-cyan-400">Follow Us</h3>
          <p className="mt-4 text-gray-400">
            Stay connected with us on social media:
          </p>
          <div className="flex space-x-6 mt-6 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-500 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Plant The Earth. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
