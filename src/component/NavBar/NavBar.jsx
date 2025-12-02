import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/photo-project/landing-page/Group 2.png";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4">
      
      <Link to="/" className='text-center'>
        <div className="text-black ml-5 md:ml-0 dark:text-white text-xl font-bold flex flex-col sm:flex-row items-center">
          <img src={logo} className="w-20 mr-0 mb-2 sm:mr-2 sm:mb-0" alt="" />
          <span>Jop Sphere</span>
        </div>
      </Link>

      <div className="flex items-center gap-5 mr-5 md:mr-0">
        <Link to="login" className="text-black dark:text-white">Login</Link>
        <Link to="register" className="px-4 py-2 rounded-lg bg-blue-600 text-white dark:bg-blue-700">
          Register
        </Link>
      </div>
    </nav>
  );
}
