import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <>
      {/* banner page */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" pt-0 mx-[30px]  md:pt-[96px] md:px-[178px]  sm:px-[100px] "
      >
        <div className="bg-gradient-to-r from-primary to-primary-dull/5 flex pb-2 flex-col-reverse lg:flex-row justify-between pt-[40px] ps-[56px] pe-[32px]  rounded-2xl">
          <div className="text-white max-w-[520px]">
            <h1 className="text-[30px] font-medium">
              Do You Own a Luxury Car?
            </h1>
            <p className="text-[16px] mt-2">
              {" "}
              Monetize your vehicle effortlessly by listing it on CarRental.
            </p>
            <p className="text-[16px]">
              We take care of insurance, driver verification and secure payments
              — so you can earn passive income, stress-free.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-[16px] bg-white text-primary px-3 py-2 rounded-xl"
            >
              List your car
            </motion.button>
          </div>
          <div className=" ">
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-h-45 mt-[40px] "
              src={assets.banner_car_image}
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Banner;
