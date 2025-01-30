import React, { useContext, useState } from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const WishlistedBlogs = () => {

  const {user}=useContext(AuthContext)
  const blogs = useLoaderData(); // Blogs loaded by the loader
  const [blogList, setBlogList] = useState(blogs);
  const navigate = useNavigate();

  const handleRemoveFromWishlist = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/watchList/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The blog has been removed from your wishlist.",
                icon: "success",
              });
              const remaining = blogList.filter((blog) => blog._id !== _id);
              setBlogList(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="max-w-6xl mx-auto p-6 mt-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">My Wishlisted Blogs</h1>
        {blogList.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-500">No blogs in your wishlist.</p>
            <button
              onClick={() => navigate("/all-blogs")}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Explore Blogs
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogList.map((blog) => (
              <div
                key={blog._id}
                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
              >
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 truncate">
                    {blog.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">{blog.category}</p>
                  <p className="text-gray-700 text-sm mt-4 truncate">
                    {user?.displayName}
                  </p>
                </div>
                <div className="p-4 flex justify-between items-center bg-gray-50">
                  <button
                    onClick={() => navigate(`/blogs/${blog._id}`)}
                    className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(blog._id)}
                    className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default WishlistedBlogs;
