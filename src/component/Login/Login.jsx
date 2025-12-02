import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import plan1 from "../../assets/photo-project/login/plant-1.png";
import plan2 from "../../assets/photo-project/login/plant-2.png";
import Character from "../../assets/photo-project/login/Character.png";
import { motion } from "framer-motion"
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../Register/services/authService";

export default function Login() {
const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);







  async function hundleSubmit(values) {
    setLoading(true)
    setErrorMessage("")
    try {
      const {data} =await loginUser(values)
      localStorage.setItem("token",data.token)
navigate("/home", { replace: true });
    } catch (error) {
    setErrorMessage(error.response?.data?.message || "Login failed"); 
    }finally {
    setLoading(false); 
  }
  }

    const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });


  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema,
    onSubmit:hundleSubmit
  })
  return (
    <div className=" px-4 md:px-20 text-black dark:text-white">

<div className="w-full md:w-100  rounded-2xl shadow-lg mb-10 relative 
                flex flex-col py-6 md:py-10 px-3 md:px-3">
  <h2 className="text-3xl font-bold text-center  mb-2">
    Welcome back!
  </h2>

  <p className="text-center text-gray-600 mb-6">
    Login to your account
  </p>

  <form onSubmit={formik.handleSubmit} className="space-y-6 w-full max-w-md mx-auto">

    <div className="relative w-full">
      <input
        {...formik.getFieldProps("email")}
                type="email"
        id="email"
  className="
    peer w-full border border-[#d3ddea] 
    text-black dark:text-white  
    rounded-xl px-4 py-3
    focus:border-[#0a4ea3] focus:ring-2 focus:ring-[#0a4ea3]/20 outline-none transition 
    placeholder-transparent
  "
        placeholder=" "

      />
      <label
        htmlFor="email"
  className="
    absolute 
    left-4 top-1/2 -translate-y-1/2 px-1 rounded-2xl
    text-sm text-gray-500 dark:text-gray-300  
    bg-white dark:bg-[#071629]  
    transition-all
    peer-placeholder-shown:top-5.5
    peer-placeholder-shown:-translate-y-1/2
    peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-300
    peer-focus:top-0 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white
    peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-black dark:peer-not-placeholder-shown:text-white
  "
      
        
      >
        Email Address
      </label>

        {formik.touched.email && formik.errors.email ? (
    <p className="text-red-500 text-sm mt-2">{formik.errors.email}</p>
  ) : null}
    </div>

    <div className="relative w-full">
      <input
              {...formik.getFieldProps("password")}

        type="password"
        id="password"
  className="
    peer w-full border border-[#d3ddea] 
    text-black dark:text-white  
    rounded-xl px-4 py-3
    focus:border-[#0a4ea3] focus:ring-2 focus:ring-[#0a4ea3]/20 outline-none transition 
    placeholder-transparent
  "
        placeholder=" "
        required
      />
      <label
        htmlFor="password"
  className="
    absolute 
    left-4 top-1/2 -translate-y-1/2 px-1 rounded-2xl
    text-sm text-gray-500 dark:text-gray-300  
    bg-white dark:bg-[#071629]  
    transition-all
    peer-placeholder-shown:top-5.5
    peer-placeholder-shown:-translate-y-1/2
    peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-300
    peer-focus:top-0 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white
    peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-black dark:peer-not-placeholder-shown:text-white
  "
      >
        Password
      </label>

              {formik.touched.password && formik.errors.password ? (
    <p className="text-red-500 text-sm mt-2">{formik.errors.password}</p>
  ) : null}
    </div>
  <p className="text-sm text-gray-500 mb-4 mt-4 cursor-pointer hover:text-blue-600 text-right">
    forget password!
  </p>
<button
  type="submit"
  disabled={loading}
  className={`w-full text-2xl bg-blue-600 text-white py-3 rounded-lg font-mono transition 
    flex items-center justify-center gap-2
    ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
>
  {loading ? (
    <>
      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      Lodding...
    </>
  ) : (
    "Login"
  )}
</button>


          {errorMessage && (
  <div className="mt-2 text-center text-red-800">
    {errorMessage.message ? errorMessage.message : errorMessage}
  </div>
)}
  </form>





  <p className="mt-4 text-center text-gray-600">
    Don't have an account?
    <Link to="register" className="text-blue-600 font-semibold">
      Sign Up
    </Link>
  </p>
</div>

<div className="relative w-60 h-full">
  <motion.img
    src={Character}
    alt="girl"
    className="
      hidden md:block
      absolute
      bottom-[50%]
      left-[-50%] 
      
    "
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  />
</div>

<div className="relative w-full h-full">
  <motion.img
    src={plan1}
    alt="plant left"
    className="
      hidden lg:block
      absolute
      bottom-0
      left-[-42%]
    "
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  />
</div>

<div className="relative w-full h-full">
  <motion.img
    src={plan2}
    alt="plant left"
    className="
      hidden lg:block md:block
      absolute
      bottom-0
      right-[-30%]
    "
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  />
</div>

    <div className="flex flex-col items-center mt-10 block md:block lg:hidden xl:hidden w-full">
      <div className="flex items-center w-full max-w-md mb-6">
        <hr className="flex-grow border-[.5px] border-black dark:border-white" />
        <span className="px-4 text-black dark:text-white text-sm">or login with</span>
        <hr className="flex-grow border-[.5px] border-black dark:border-white " />
      </div>
      </div>

    </div>
  );
}
