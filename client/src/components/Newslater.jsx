import React from 'react'
import { motion } from "motion/react";
const Newslater = () => {
  return (
  <>
     {/* Newslatter */}
      <motion.div
       initial={{ y: 30, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{once:true,amount:0.3}}
      className="flex flex-col items-center sm:px-[100px] justify-center text-center space-y-2 max-md:px-4 my-10 " >
        <div className=" pb-[50px]">
          <motion.h1
           initial={{ y: 20, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5,delay:0.2 }}

          className="text-[40px] font-medium text-center ">
           Never Miss a Deal!
          </motion.h1>
          <motion.p 
           initial={{ y: 20, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5,delay:0.3 }}
    
          className="text-md m-auto md:text-base text-gray-500/90 text-center  max-w-156">
          Subscribe to get the latest offers, new arrivals, and exclusive discounts
          </motion.p>
        </div>
        <motion.form 
         initial={{ y: 20, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5,delay:0.4 }}

        className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
            <input type="text" placeholder="Enter your email id" name="search" className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500" /> <button className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md rounded-l-none">Subscribe</button>
        </motion.form>
      </motion.div>
  </>
  )
}

export default Newslater