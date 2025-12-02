import React from 'react'
import { motion } from "framer-motion"
import hero from "../../assets/photo-project/landing-page/amico.png";

export default function LandingPage() {
  return (
<div className="flex flex-col-reverse md:flex-row items-center justify-between py-10 text-black dark:text-white">

  <motion.div 
    initial={{ opacity: 0, y: 60 }}  
    animate={{ opacity: 1, y: 0 }}     
    transition={{ duration: 0.8 }}
    className="md:w-1/2 space-y-2 flex flex-col"
  >
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .9 }}
      className="text-4xl md:text-6xl  font-semibold text-center md:text-left leading-tight"
    >
      Get Hired Faster <br /> With AI Feedback
      
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className=" mb-3 text-center md:text-left"
    >
      Explore Job opportunities and Find your career.
    </motion.p>



    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex mx-auto md:mx-0 gap-10 md:gap-4 mt-4"
    >
      <button className="bg-blue-600 px-6 py-3 rounded-xl text-white">
        Make your CV
      </button>
      <button className="bg-gray-300 px-6 py-3 rounded-xl text-black">
        About Us
      </button>
    </motion.div>
  </motion.div>

  <motion.div 
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="md:w-1/2  md:flex justify-center mt-10 md:mt-0"
  >
    <img src={hero} className="w-[80%] lg:w[70%] mx-auto md:mx-0" alt="hero" />
  </motion.div>

</div>
  )
}
