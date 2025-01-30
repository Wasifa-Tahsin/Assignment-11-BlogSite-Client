import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import './section.css'
const NewsLetter = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!email) {
        toast.error("Please enter a valid email address", {
          position: "top-middle",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
  
      // Toast for successful subscription
      toast.success("Thank you for subscribing to our newsletter!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  
      // Clear input field
      setEmail("");
    };
    return (
        <div className='container mx-auto '>
         


      {/* Unique Section */}
      <section className=" rounded-lg relative bg-indigo-900 text-white py-20 mt-10">
  <div className="container mx-auto px-6 mt-10">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold mb-6">
        What Makes Us <span className="text-yellow-400">Different?</span>
      </h2>
      <p className="text-gray-300 text-lg">
        We're reimagining creativity and innovation to give you a platform
        like no other.
      </p>
    </div>

    {/* Diagonal Split Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      {/* Left Side Text */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold">Innovative Features</h3>
        <p className="text-gray-400">
          Dive into a world of powerful tools, a vibrant community, and
          data-driven insights designed to transform your creative journey.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <p className="ml-4">Cutting-edge creative tools</p>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <p className="ml-4">A global community of innovators</p>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <p className="ml-4">Real-time analytics and insights</p>
          </li>
        </ul>
      </div>

      {/* Right Side: 3D Rotating Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 perspective">
        <div className="card rotate">
          <div className="card-inner">
            <div className="card-front">
              <h4 className="text-lg font-bold">🌟 Creative Tools</h4>
              <p className="text-sm">Tools that elevate your content.</p>
            </div>
            <div className="card-back">
              <p>Design, write, and innovate with ease.</p>
            </div>
          </div>
        </div>
        <div className="card rotate">
          <div className="card-inner">
            <div className="card-front">
              <h4 className="text-lg font-bold">🌐 Global Reach</h4>
              <p className="text-sm">Share stories worldwide.</p>
            </div>
            <div className="card-back">
              <p>Connect with a diverse global audience.</p>
            </div>
          </div>
        </div>
        <div className="card rotate">
          <div className="card-inner">
            <div className="card-front">
              <h4 className="text-lg font-bold">📊 Data Insights</h4>
              <p className="text-sm">Optimize your impact.</p>
            </div>
            <div className="card-back">
              <p>Get detailed audience analytics.</p>
            </div>
          </div>
        </div>
        <div className="card rotate">
          <div className="card-inner">
            <div className="card-front">
              <h4 className="text-lg font-bold">🔒 Security</h4>
              <p className="text-sm">Your data is safe.</p>
            </div>
            <div className="card-back">
              <p>State-of-the-art protection for your content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    <section className=" rounded-lg relative bg-gray-900 text-white py-20 mt-10">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-6 text-yellow-400">
            Explore Our Key Features
          </h2>
          <p className="text-gray-300 text-lg">
            Discover what makes our platform stand out with tools designed to
            empower creators and inspire audiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card hover:feature-hover">
            <div className="icon">
              🎨
            </div>
            <h3 className="feature-title">Creative Tools</h3>
            <p>
              Leverage advanced creative tools to bring your ideas to life with
              ease and style.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card hover:feature-hover">
            <div className="icon">
              🌍
            </div>
            <h3 className="feature-title">Global Reach</h3>
            <p>
              Connect with a global audience and share your work with the world
              instantly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card hover:feature-hover">
            <div className="icon">
              📊
            </div>
            <h3 className="feature-title">Data Insights</h3>
            <p>
              Understand your audience with real-time data and detailed
              analytics to grow your influence.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card hover:feature-hover">
            <div className="icon">
              ⚡
            </div>
            <h3 className="feature-title">Fast Performance</h3>
            <p>
              Experience blazing-fast load times and a seamless user experience,
              anytime and anywhere.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="feature-card hover:feature-hover">
            <div className="icon">
              🔒
            </div>
            <h3 className="feature-title">Enhanced Security</h3>
            <p>
              Your data and content are protected with state-of-the-art security
              measures.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="feature-card hover:feature-hover">
            <div className="icon">
              🌟
            </div>
            <h3 className="feature-title">Customizable Themes</h3>
            <p>
              Personalize your blog with stunning themes tailored to your
              preferences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className='rounded-lg '>
    <div className="bg-gray-300 py-16 px-6 mt-10 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-8">
          Get the latest updates, news, and exclusive offers straight to your
          inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 border border-gray-300 rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
    </section>
        </div>
    );
};

export default NewsLetter;