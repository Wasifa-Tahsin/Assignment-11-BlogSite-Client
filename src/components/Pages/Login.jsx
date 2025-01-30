// import React, { useContext, useRef, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";


import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { FaAppStore } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {

const navigate=useNavigate()
const {signInUser}=useContext(AuthContext)

  const provider= new GoogleAuthProvider()


  const handleGoogleSignIn = () => {
    signInWithPopup(auth,provider)
    .then((result)=>{
      console.log(result);
    })
    .catch(err=>{
      console.log(
      'ERROR',err
      );
    })
  }
//   const { userLogin, setUser, signInWithGoogle,usePassword } = useContext(AuthContext);
  const [error, setError] = useState([]);
  const [showPassword, setShowPassword] = useState(false); 
//   const location = useLocation();
//   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    console.log(email,password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        e.target.reset()
        setUser(user);
        toast.success("Login Successful!");
        navigate(location?.state?.from || "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        toast.error("Login Failed. Please check your credentials.");
      });
  };


    // signInWithGoogle()
    //   .then((result) => {
    //     const user = result.user;
    //     setUser(user);
    //     toast.success("Google Login Successful!");
    //     navigate(location?.state?.from || "/");
    //   })
    //   .catch((err) => {
    //     console.error("Google Login Failed:", err.message);
    //     toast.error("Google Login Failed. Please try again.");
    //   });
  



  return (
    <div>

      <header>
        <Navbar></Navbar>
      </header>
      <div className="min-h-screen flex justify-center items-center">
      
      <div  className=" bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center mt-5">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
         

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

         
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"} 
              placeholder="password"
              className="input input-bordered"
              required
            />

            <p  className="mt-2 hover:underline">ForgetPassword</p>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-3 top-10"
            >
              {showPassword ? (
                <AiFillEye className="text-gray-500 w-6 h-6" />
              ) : (
                <AiFillEyeInvisible className="text-gray-500 w-6 h-6" />
              )}
            </button>
          
            {error.login && (
              <label className="label text-sm text-red-600">{error.login}</label>
            )}
          </div>

         
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>

       
        <p className="text-center font-semibold mb-2">
          Don’t Have An Account?{" "}
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>

       
        <div className="divider">OR</div>
        <div className="form-control mb-4 p-6">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-primary flex items-center justify-center gap-2"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>

    <footer>
     <Footer></Footer>
    </footer>
    </div>
  );
};

export default Login;