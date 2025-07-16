import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react";
const Testimonial = () => {
  return (
    <>
      {/* testimonial */}
      <div className="py-[96px] sm:px-[100px] md:px-[178px]">
        <div className=" pb-[50px]">
          <h1 className="text-[48px] font-medium text-center ">
            What Our Customers Say
          </h1>
          <p className="text-sm m-auto md:text-base text-gray-500/90 text-center mt-2 max-w-156">
            Discover why discerning travelers choose StayVenture for their
            luxury accommodations around the world.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  mx-[30px]">
          <motion.div
           initial={{ y: 40, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6,delay:0.2, ease: "easeOut" }}
      viewport={{once:true,amount:0.3}}
          className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full" src={assets.testimonial_image_1} alt="" />
              <div>
                <h1>Emma Rodriguez</h1>
              <p className="text-gray-500">Barcelona, Spain</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "I've rented cars from various companies, but the experience with
              CarRental was exceptional."
            </p>
          </motion.div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6,delay:0.4, ease: "easeOut" }}
      viewport={{once:true,amount:0.3}}
            className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full" src={assets.testimonial_image_2} alt="" />
              <div>
                <h1>John Smith</h1>
              <p className="text-gray-500">New York, USA</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!"
            </p>
          </motion.div>
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6,delay:0.6, ease: "easeOut" }}
      viewport={{once:true,amount:0.3}}
            className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full" src={assets.testimonial_image_1} alt="" />
              <div>
                <h1>Ava Johnson</h1>
              <p className="text-gray-500">Sydney, Australia</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
                <img src={assets.star_icon} alt="" />
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
            "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service."
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Testimonial