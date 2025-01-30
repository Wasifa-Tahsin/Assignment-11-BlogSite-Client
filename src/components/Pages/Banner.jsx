import React from 'react';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div 
      className="container mx-auto rounded-lg relative bg-gradient-to-r from-indigo-500 to-blue-600 text-white mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Welcome to <motion.span 
              className="text-yellow-300 inline-block"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              BlogSite
            </motion.span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8">
            Dive into the world of stories, ideas, and inspiration. Join our growing
            community to start your creative journey today!
          </p>
          <motion.div 
            className="flex justify-center md:justify-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="#explore"
              className="px-8 py-3 bg-yellow-400 text-indigo-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Blogs
            </motion.a>
            <motion.a
              href="#start-writing"
              className="px-8 py-3 border border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-indigo-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Writing
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-lg">
            <motion.div 
              className="absolute -top-4 -left-4 bg-yellow-300 w-20 h-20 rounded-full blur-2xl opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 bg-indigo-400 w-32 h-32 rounded-full blur-xl opacity-40"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
              alt="Hero"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Shapes */}
      <motion.div 
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="w-full h-full bg-gradient-to-t from-indigo-700 to-transparent opacity-50"
          style={{ clipPath: 'circle(75% at center)' }}
        ></div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
