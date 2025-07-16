import React from "react";
import CarCard from "./CarCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { motion } from "motion/react";
const FeaturedSection = () => {
  const { cars } = useAppContext();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className=" flex flex-col items-center py-24 px-6  md:px-16 lg:px-24 xl-px-32"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Title />
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-18 "
      >
        {cars
          .filter((car) => car.isAvailable)
          .slice(0, 6)
          .map((car) => (
            <motion.div
              key={car._id}
              initial={{ scale:0.95, opacity: 0 }}
              whileInView={{ opacity: 1, scale:1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
      </motion.div>

      <motion.button
      initial={{ y: 20, opacity: 0 }}
      whileInView={{opacity:1,y:0}}
        transition={{ duration: 0.4, delay:0.6}}
        onClick={() => {
          navigate("/cars");
          scrollTo(0, 0);
        }}
        className="flex gap-2  m-auto text-center  rounded-[5px] items-center border-1 px-4 py-1 hover:bg-light transition-all duration-200 cursor-pointer"
      >
        Explore all cars <img src={assets.arrow_icon} alt="" />

      </motion.button>
    </motion.div>
  );
};

export default FeaturedSection;
