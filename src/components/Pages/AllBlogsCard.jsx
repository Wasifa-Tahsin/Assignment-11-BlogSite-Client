import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllBlogsCard = ({ blog }) => {

  const handleAddToWatchlist = (blog) => {
    const watchlistData = {
      reviewId: blog._id,
      title: blog.title,
      url: blog.imageUrl,
      description: blog.shortDescription,
      category: blog.category,
    };

    fetch('http://localhost:5000/watchList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(watchlistData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: `"${blog.title}" has been added to your Watchlist.`,
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div>
      <div className="border border-gray-300 rounded-lg shadow-md p-4 m-4 bg-white hover:shadow-lg hover:scale-105 transition transform duration-300">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <h2 className="text-xl font-semibold text-gray-800 mt-4">{blog.title}</h2>
        <p className="text-gray-600 mt-2">{blog.shortDescription}</p>
        <p className="text-gray-500 mt-2">
          <strong>Category:</strong> {blog.category}
        </p>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => handleAddToWatchlist(blog)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Add to Watchlist
          </button>
          <Link to={`/blogs/${blog._id}`}>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllBlogsCard;
