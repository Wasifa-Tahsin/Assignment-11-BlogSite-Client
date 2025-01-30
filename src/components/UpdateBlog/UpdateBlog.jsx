import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";
import Swal from "sweetalert2";

const UpdateBlog = () => {
  const blog = useLoaderData(); // Fetch the blog details via loader
  const navigate = useNavigate();

  // States for the form fields
  const [title, setTitle] = useState(blog.title);
  const [details, setDetails] = useState(blog.details);
  const [category, setCategory] = useState(blog.category);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle blog update
  const handleUpdate = async () => {
    if (!title.trim() || !details.trim()) {
      setError("Title and details cannot be empty");
      return;
    }
  
    try {
      setIsLoading(true);
  
      const updatedBlog = { title, details, category };
      console.log("Updating Blog with ID:", blog._id); // Debugging
      console.log("Payload:", updatedBlog);
  
      const response = await fetch(`http://localhost:5000/blogs/${blog._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBlog),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update blog");
      }
  
      setIsLoading(false);
      Swal.fire({
        title: "Blog updated successfully",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
      
      navigate(`/blogs/${blog._id}`);
    } catch (err) {
      console.error(err.message);
      setError("Failed to update blog. Please try again.");
      setIsLoading(false);
    }
  };
  

  return (
    <div>
        <header>
            <Navbar></Navbar>
        </header>
        <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Update Blog</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700">Details</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows="6"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          onClick={handleUpdate}
          disabled={isLoading}
          className={`w-full text-white py-3 rounded-lg ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          } transition`}
        >
          {isLoading ? "Updating..." : "Update Blog"}
        </button>
      </div>
    </div>
    <footer>
        <Footer></Footer>
    </footer>
    </div>
  );
};

export default UpdateBlog;
