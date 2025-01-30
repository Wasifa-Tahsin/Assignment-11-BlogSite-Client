import {
    createBrowserRouter,
    
  } from "react-router-dom";

import HomeLayout from "../Layout/HomeLayout";
import Homepage from "../Pages/Homepage";

import AddBlog from "../AddBlog/AddBlog";
import UpdateBlog from "../UpdateBlog/UpdateBlog";
import AllBlog from "../AllBlog/AllBlog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BlogDetails from "../BlogDetail/BlogDetails";
import FeaturedBlogs from "../FeaturedBlogs/FeaturedBlogs";
import WishlistedBlogs from "../WishlistedBlogs/WishlistedBlogs";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            path:'/',
            element:<Homepage></Homepage>,
            loader: () => fetch('http://localhost:5000/blogs')
        }
    ],
    
  },
  {
path:'*',
element:<ErrorPage></ErrorPage>
  },
  {
    path:'/addBlog',
    element:<PrivateRoute><AddBlog></AddBlog></PrivateRoute>
  },
  {
    path:'/update-blog/:id',
    element:<UpdateBlog></UpdateBlog>,
    loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
  },
  {
    path: '/all-blogs',
    element: <AllBlog></AllBlog>,
    loader: () => fetch('http://localhost:5000/blogs')
  },
  {
    path: '/blogs/:id',
    element: <BlogDetails></BlogDetails>,
    loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
    
  },
  {
    path: '/featured-blogs',
    element: <FeaturedBlogs></FeaturedBlogs>
    
    
  },
  {
    path: '/wishlist',
    element: <PrivateRoute><WishlistedBlogs></WishlistedBlogs></PrivateRoute>,
   loader:()=>fetch('http://localhost:5000/blogs')
    
    
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  },

]);

export default Router