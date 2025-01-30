
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

import AllBlogsCard from "../Pages/AllBlogsCard";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllBlog = () => {
const blogs=useLoaderData()

const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (blog) => {
    if (!wishlist.some((item) => item._id === blog._id)) {
      setWishlist([...wishlist, blog]);
      console.log(`${blog.title} added to wishlist`);
    } else {
      console.log(`${blog.title} is already in wishlist`);
    }
  };

  return (
    <div>
      <div>
        <header>
          <Navbar></Navbar>
        </header>

<div className="container mx-auto px-4 py-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {
        blogs.map((blog)=><AllBlogsCard key={blog._id} blog={blog} addToWishlist={addToWishlist}></AllBlogsCard>)
    }
</div>
</div>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default AllBlog;
