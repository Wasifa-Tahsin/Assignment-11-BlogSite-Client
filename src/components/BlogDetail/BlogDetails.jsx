import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";
import { AuthContext } from "../provider/AuthProvider";

const BlogDetails = () => {

  const {user}=useContext(AuthContext)
  const blog = useLoaderData();
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://assignment-11-blogside-server.vercel.app/comments/${blog._id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const data = await response.json();
        setComments(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err.message);
        setError("Failed to load comments.");
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [blog._id]);

  const handleAddComment = async () => {
    if (!newComment.trim()) {
      setError("Comment cannot be empty");
      return;
    }

    try {
      // const comment = {
      //   blogId: blog._id,
      //   userName: "John Doe", // Replace with dynamic user data
      //   userProfilePic: "https://via.placeholder.com/50", // Replace with user profile pic
      //   commentText: newComment,
      //   createdAt: new Date(),
      // };

      const response = await fetch("https://assignment-11-blogside-server.vercel.app/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      });

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      setComments((prevComments) => [comment, ...prevComments]);
      setNewComment("");
      setError("");
    } catch (err) {
      console.error(err.message);
      setError("Failed to add the comment. Please try again.");
    }
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 relative">
  {/* Blog Image with Overlay */}
  <div className="relative">
    <img
      src={blog.imageUrl}
      alt={blog.title}
      className="w-full h-80 object-cover rounded-lg shadow-md"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
    <div className="absolute bottom-4 left-4 text-white">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="mt-2 text-sm text-gray-200">By {blog.author}</p>
    </div>
  </div>

  {/* Blog Content */}
  <div className="bg-gray-50 -mt-10 p-6 rounded-lg shadow-md relative z-10">
    <p className="text-lg text-gray-700 leading-relaxed">{blog.details}</p>
    <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
      <span className="font-semibold">
        Category: <span className="text-gray-700">{blog.category}</span>
      </span>
      <span className="font-semibold">
        Author: <span className="text-gray-700">{user?.displayName}</span>
      </span>
    </div>
  </div>

  {/* Comments Section */}
  <div className="mt-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
      Comments
    </h2>
    <div className="space-y-6">
      {isLoading ? (
        <p className="text-gray-500">Loading comments...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          {comments.length === 0 && !isLoading ? (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment) => (
              <div
                key={comment._id}
                className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-12 h-12 rounded-full border"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{user?.displayName}</p>
                  <p className="text-gray-600 mt-1">{comment.commentText}</p>
                </div>
              </div>
            ))
          )}
        </>
      )}
    </div>

    {/* Add Comment */}
    <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment here..."
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="3"
      />
      <button
        onClick={handleAddComment}
        className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-blue-700 transition"
      >
        Submit Comment
      </button>
    </div>
  </div>

  {/* Update Blog Button */}
  <div className="mt-8 text-center">
    <button
      onClick={() => navigate(`/update-blog/${blog._id}`)}
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition"
    >
      Update Blog
    </button>
  </div>
</div>


      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BlogDetails;
