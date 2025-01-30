import React, { useState } from 'react';
import Footer from '../Pages/Footer';
import Navbar from '../Pages/Navbar';
import Swal from 'sweetalert2';
const AddBlog = () => {

    const [formData, setFormData] = useState({
        title: "",
        imageUrl: "",
        category: "",
        shortDescription: "",
        longDescription: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       

        const form=e.target
        const title=form.title.value
        const imageUrl=form.imageUrl.value
        const category=form.category.value
        const shortDescription=form.shortDescription.value
        const longDescription=form.longDescription.value
       
        const BlogData = {
          title,
          imageUrl,
          category,
          shortDescription,
          longDescription,
         
        };
    

console.log(BlogData);

         // send data to the server
         fetch('http://localhost:5000/blogs', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(BlogData)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
        
            if (data.insertedId) {
              Swal.fire({
                title: 'Success',
                text: 'Blog Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              });
            }
          });
        
        
    
      };



     
   
    return (
        

         <div>

            <Navbar></Navbar>
             <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-6">Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Enter the blog title"
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Enter the image URL"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-500"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Health">Health</option>
            <option value="Travel">Travel</option>
            <option value="Education">Education</option>
          </select>
        </div>

        {/* Short Description */}
        <div className="mb-4">
          <label htmlFor="shortDescription" className="block text-gray-700 font-medium mb-2">
            Short Description
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Enter a short description of the blog"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Long Description */}
        <div className="mb-4">
          <label htmlFor="longDescription" className="block text-gray-700 font-medium mb-2">
            Long Description
          </label>
          <textarea
            id="longDescription"
            name="longDescription"
            value={formData.longDescription}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Enter the detailed description of the blog"
            rows="6"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Submit Blog
          </button>
        </div>
      </form>
    </div>

    <footer>
        <Footer></Footer>
    </footer>
         </div>
        
    );
};

export default AddBlog;