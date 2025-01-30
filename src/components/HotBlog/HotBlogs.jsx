import React, { useEffect, useState } from 'react';
import HotBlogCard from '../HotBlogCard/HotBlogCard';

const HotBlogs = () => {
    const [blog,setBlog]=useState([])
    useEffect(()=>{
     fetch('http://localhost:5000/sixBlogs')
     .then(res=>res.json())
     .then(data=>setBlog(data))
    },[])
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    blog.map(blog=><HotBlogCard key={blog._id} blog={blog}></HotBlogCard>)
                }
            </div>
        </div>
    );
};

export default HotBlogs;