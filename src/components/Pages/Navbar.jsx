import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
const navigate=useNavigate()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout =  () => {
    logOut();
    navigate('/');
  };

  return (
    <nav className="container mx-auto sticky top-0 z-50 backdrop-blur-lg bg-white/30">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            BlogSite
          </Link>
        </div>

        {/* Right Section for Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          {user ? (
            <>
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <button
                onClick={handleLogout}
                className="text-sm text-red-600 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-indigo-600 hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm text-gray-600 hover:underline"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-blogs" className="hover:text-indigo-600 transition">
              All Blogs
            </Link>
          </li>
          <li>
            <Link to="/featured-blogs" className="hover:text-indigo-600 transition">
              Featured Blogs
            </Link>
          </li>
         


         {
          user &&<>
           <li>
            <Link to="/addBlog" className="hover:text-indigo-600 transition">
              Add Blog
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="hover:text-indigo-600 transition">
              Wishlist
            </Link>
          </li>
          
          </>
         }
        </ul>

        {/* Right Section for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-700 shadow-md">
          <ul className="space-y-4 px-4 py-6">
            <li>
              <Link to="/" className="block hover:text-indigo-600 transition" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-blogs"
                className="block hover:text-indigo-600 transition"
                onClick={toggleMenu}
              >
                All Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/featured-blogs"
                className="block hover:text-indigo-600 transition"
                onClick={toggleMenu}
              >
                Featured Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/add-blog"
                className="block hover:text-indigo-600 transition"
                onClick={toggleMenu}
              >
                Add Blog
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                className="block hover:text-indigo-600 transition"
                onClick={toggleMenu}
              >
                Wishlist
              </Link>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
