import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { motion } from "motion/react";
const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  const { pickupDate, setPickupDate, returnDate, setReturnDate, navigate } =
    useAppContext();

  const handelSearch = (e) => {
    e.preventDefault();
    navigate(
      "/cars?pickupLocation=" +
        pickupLocation +
        "&pickupDate" +
        pickupDate +
        "&retunDate=" +
        returnDate
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center  bg-light "
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[48px] font-bold text-center pt-[90px] pb-[50px]"
      >
        Luxury cars on Rent
      </motion.h1>

      <motion.form
        initial={{ scale: 0.95, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handelSearch}
        className="sm:bg-white border-boderColor  py-[27px] w-[320px]  sm:min-w-[50%] m-auto shadow-[0px_8px_20px_rgba(0,0,0,0.1)] rounded-xl sm:rounded-full p-6 items-start   "
      >
        <div className=" flex flex-col sm:flex-row  pl-[32px] gap-6">
          <div className=" flex flex-col items-start   justify-between">
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-500">
              {pickupLocation ? pickupLocation : "Please select location  "}
            </p>
          </div>
          <div className="flex flex-col justify-between items-start ">
            <label htmlFor="pickup-date">Pick-up Date</label>
            <input
              type="date"
              id="pickup-date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500"
              required
            />
          </div>

          <div className="flex flex-col items-start justify-between">
            <label htmlFor="return-date">Return Date</label>
            <input
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              type="date"
              id="return-date"
              className="text-sm text-gray-500 "
              required
            />
          </div>

          <div className="w-[30%]">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" flex  items-center  ml-auto   justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer"
            >
              <img
                src={assets.search_icon}
                alt="search"
                className="brightness-300"
              />
              Search
            </motion.button>
          </div>
        </div>
      </motion.form>

      <div className="m-auto pt-[50px] pb-[100px]">
        <motion.img
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          src={assets.main_car}
          className="max-h-74"
          alt="_car"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
