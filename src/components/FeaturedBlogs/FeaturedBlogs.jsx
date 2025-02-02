import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { AuthContext } from "../provider/AuthProvider";

// Function to calculate word count from a text
const calculateWordCount = (text) => {
  return text ? text.split(/\s+/).length : 0;
};

const FeaturedBlogs = () => {

  const {user}=useContext(AuthContext)
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        const response = await fetch("https://assignment-11-blogside-server.vercel.app/blogs");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();

        // Calculate word count for each blog in case it's not provided by the backend
        const blogsWithWordCount = data.map((blog) => ({
          ...blog,
          wordCount: blog.wordCount || calculateWordCount(blog.longDescription),
        }));

        setBlogs(blogsWithWordCount);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err.message);
        setError("Failed to load featured blogs. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchFeaturedBlogs();
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="max-w-6xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Featured Blogs</h1>
        {isLoading ? (
          <p className="text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : blogs.length === 0 ? (
          <p className="text-gray-500">No featured blogs found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">#</th>
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">Category</th>
                  <th className="border border-gray-300 px-4 py-2">Author</th>
                  <th className="border border-gray-300 px-4 py-2">Word Count</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr key={blog._id} className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {blog.title}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {blog.category}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {user?.displayName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {blog.wordCount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default FeaturedBlogs;
