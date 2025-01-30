import React from 'react';
import Banner from './Banner';
import NewsLetter from './NewsLetter';
import HotBlogs from '../HotBlog/HotBlogs';

const Homepage = () => {
    return (
        <div>
           <Banner></Banner>
           <HotBlogs></HotBlogs>
           <NewsLetter></NewsLetter>
        </div>
    );
};

export default Homepage;