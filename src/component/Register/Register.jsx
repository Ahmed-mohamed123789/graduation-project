import React, { useState } from "react";
import characterImg from "../../assets/photo-project/register/freepik--Character--inject-3.png";
import plantImg from "../../assets/photo-project/register/freepik--Plant--inject-3.png";
import { motion } from "framer-motion"
import { useFormik } from "formik";
import * as Yup from 'yup'
import { registerUser } from "./services/authService";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";

export default function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
const [showRePassword, setShowRePassword] = useState(false);

  async function handleSubmit(values) {
    try {
      setLoading(true)
      setErrorMessage("")
      const {data} =await registerUser(values)
              console.log("REGISTER SUCCESS:", data);
navigate("/login", { replace: true });
    }catch (error) {
        setErrorMessage(error.response?.data || "Something went wrong");
      }finally {
    setLoading(false);
  }
  }

  const yupValidation = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .matches(/^[A-Za-z]+(?: [A-Za-z]+)*\s*$/, "Name must contain only letters"),
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^[A-Za-z0-9]{6,}@gmail\.com$/,
        "Email must have at least 6 letters or numbers and end with @gmail.com"
      ),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must be at least 8 characters long and include letters, numbers, and symbols"
      ),
    rePassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    onSubmit: handleSubmit,
    validationSchema: yupValidation
  });

  return (
    <div className=" px-4 md:px-20 text-black dark:text-white">

      <div className="w-full md:w-100  rounded-2xl shadow-lg mb-10 relative 
                flex flex-col py-6 md:py-10 px-3 md:px-3">
        <h2 className="text-4xl font-mono text-center  mb-2">
          SignUp
        </h2>

        <p className="text-center text-xl font-semibold text-gray-500 mb-6">
          Join Us Now        
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-6 w-full max-w-md mx-auto">

          {/* name */}
          <div className="relative w-full">
            <input
              {...formik.getFieldProps("name")}
              type="text"
              id="name"
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
              htmlFor="name"
              className="
                absolute left-4 top-1/2 -translate-y-1/2 px-1 rounded-2xl
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
              Name
            </label>
            {formik.errors.name && formik.touched.name &&
              <div className="mt-2 ml-3 text-sm text-red-800">{formik.errors.name}</div>
            }
          </div>

          {/* email */}
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
                absolute left-4 top-1/2 -translate-y-1/2 px-1 rounded-2xl
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
            {formik.errors.email && formik.touched.email &&
              <div className="mt-2 ml-3 text-sm text-red-800">{formik.errors.email}</div>
            }
          </div>

          {/* Password */}
          <div className="relative w-full">
            <input
              {...formik.getFieldProps("password")}
  type={showPassword ? "text" : "password"} 
              id="password"
              className="
                peer w-full border border-[#d3ddea] 
                text-black dark:text-white  
                rounded-xl px-4 py-3
                focus:border-[#0a4ea3] focus:ring-2 focus:ring-[#0a4ea3]/20 outline-none transition 
                placeholder-transparent
              "
              placeholder=" "
            />
<button 
  type="button"
  className="absolute right-3 top-5 z-20" 
  onClick={() => setShowPassword(!showPassword)}
>
  {showPassword ? <FaEyeSlash /> : <FaEye />}
</button>


            <label
              htmlFor="password"
              className="
                absolute left-4 top-1/2 -translate-y-1/2 px-1 rounded-2xl
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
            {formik.errors.password && formik.touched.password &&
              <div className="mt-2 ml-3 text-sm text-red-800">{formik.errors.password}</div>
            }
          </div>

          {/* Repassword */}
          <div className="relative w-full">
            <input
              {...formik.getFieldProps("rePassword")}
type={showRePassword ? "text" : "password"}
              id="rePassword"
              className="
                peer w-full border border-[#d3ddea] 
                text-black dark:text-white  
                rounded-xl px-4 py-3
                focus:border-[#0a4ea3] focus:ring-2 focus:ring-[#0a4ea3]/20 outline-none transition 
                placeholder-transparent
              "
              placeholder=" "
            />
  <button 
  type="button"
  className="absolute right-3 top-5 z-20" 
  onClick={() => setShowRePassword(!showRePassword)}
>
  {showRePassword ? <FaEyeSlash /> : <FaEye />}
</button>

            <label
              htmlFor="rePassword"
              className="
                absolute left-4 top-1/2 -translate-y-1/2 px-1 rounded-2xl
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
              Repassword
            </label>
            {formik.errors.rePassword && formik.touched.rePassword &&
              <div className=" text-sm ml-3 mt-2 text-red-800">{formik.errors.rePassword}</div>
            }
          </div>

<button
  type="submit"
  disabled={loading}
  className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition 
    flex items-center justify-center gap-2
    ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
>
  {loading ? (
    <span className="
      w-6 h-6 
      border-3 border-white 
      border-t-transparent 
      rounded-full 
      animate-spin
    "></span>
  ) : (
    "Register"
  )}
</button>




{/* <button
  type="submit"
  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold transition 
    flex items-center justify-center gap-2 cursor-pointer"
>
      Register

</button> */}


          {/* API Error Message */}
          {errorMessage && (
  <div className="mt-2 text-center text-red-800">
    {errorMessage.message ? errorMessage.message : errorMessage}
  </div>
)}

        </form>
      </div>

      <div className="relative w-full h-full">
        <motion.img
          src={characterImg}
          alt="girl"
          className="hidden md:block lg:block xl:block absolute bottom-1/5 left-[90%] w-70"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>

      <div className="relative w-full h-full">
        <motion.img
          src={plantImg}
          alt="plant left"
          className="hidden md:block lg:block absolute bottom-10 lg:bottom-1/6 xl:bottom-10 left-[-20%] xl:left-[-20%] w-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>

    </div>
  );
}
