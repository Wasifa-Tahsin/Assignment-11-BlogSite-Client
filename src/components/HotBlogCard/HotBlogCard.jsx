import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const HotBlogCard = ({ blog }) => {
  const { user } = useContext(AuthContext); // Get logged-in user
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;

    const fetchWishlistStatus = async () => {
      try {
        const response = await axios.get(`/api/watchList/${user.uid}/${blog.id}`);
        setIsWishlisted(response.data.isWishlisted);
      } catch (error) {
        console.error('Error fetching wishlist status:', error);
      }
    };

    fetchWishlistStatus();
  }, [user, blog.id]);

  const handleWishlist = async () => {
    if (!user) {
      toast.success('You must be logged in to add blogs to your wishlist!');
      return;
    }

    setLoading(true);
    const watchlistData = {
      userId: user.uid, // Ensure user ID is sent
      reviewId: blog._id,
      title: blog.title,
      url: blog.imageUrl,
      description: blog.shortDescription,
      category: blog.category,
    };

    try {
      const response = await fetch('http://localhost:5000/watchList', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(watchlistData),
      });

      const data = await response.json();
      if (data.insertedId) {
        setIsWishlisted(true);
        Swal.fire({
          title: 'Success!',
          text: `"${blog.title}" has been added to your Watchlist.`,
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      }
    } catch (error) {
      console.error("Error adding to watchlist:", error);
      toast.error("Failed to add to watchlist. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      {/* Blog Image */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={blog.imageUrl} alt={blog.title} className="w-full h-64 object-cover rounded-t-lg" />
        <motion.div 
          className="absolute top-4 left-4 bg-indigo-600 text-white text-xs uppercase font-semibold px-3 py-1 rounded"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {blog.category}
        </motion.div>
      </motion.div>

      {/* Blog Content */}
      <div className="p-6">
        <motion.h3 
          className="text-2xl font-bold text-gray-800 mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {blog.title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 text-sm leading-relaxed line-clamp-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {blog.shortDescription}
        </motion.p>

        {/* Buttons */}
        <div className="mt-4 flex items-center justify-between">
          <motion.button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => console.log(`Viewing details for: ${blog.title}`)}
          >
            Details
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-md text-sm transition ${
              isWishlisted ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWishlist}
            disabled={loading}
          >
            {loading ? 'Updating...' : isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default HotBlogCard;
