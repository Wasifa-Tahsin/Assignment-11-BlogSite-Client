import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-6 container mx-auto">
      <div className=" px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About BlogSite</h2>
          <p className="text-gray-400">
            BlogSite is your go-to platform for sharing and discovering amazing
            stories, ideas, and inspiration. Join our community today and
            explore a world of blogs!
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a  className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400">
                All Blogs
              </a>
            </li>
            <li>
              <a  className="hover:text-gray-400">
                Featured Blogs
              </a>
            </li>
            <li>
              <a  className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a  className="hover:text-gray-400">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.59c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.774-1.63 1.562v1.886h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996A4.107 4.107 0 0 0 11.846 8.92a11.651 11.651 0 0 1-8.457-4.287 4.107 4.107 0 0 0 1.27 5.482 4.093 4.093 0 0 1-1.858-.513v.052a4.107 4.107 0 0 0 3.292 4.027 4.093 4.093 0 0 1-1.852.07 4.107 4.107 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407 11.616 11.616 0 0 0 8.29 20.251z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.297c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.297h-3v-5.445c0-1.297-.025-2.969-1.812-2.969-1.812 0-2.088 1.417-2.088 2.884v5.53h-3v-10h2.884v1.354h.041c.401-.757 1.382-1.554 2.845-1.554 3.039 0 3.604 2.003 3.604 4.605v5.595z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-slate-900 py-4">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} BlogSite. All rights reserved by Afia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
