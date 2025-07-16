import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import CarCard from "../components/CarCard";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { motion } from "motion/react";
import toast from "react-hot-toast";

const Cars = () => {
  //   // geting search params from url
  const [input, setInput] = useState("");
  const [searchParams] = useSearchParams();
  const pickupLocation = searchParams.get("pickupLocation");
  const pickupDate = searchParams.get("pickupDate");
  const returnDate = searchParams.get("returnDate");

  const { cars, axios } = useAppContext();

  const isSearchData = pickupLocation && pickupDate && returnDate;
  const [filterCars, setFilterCars] = useState([]);

  const applyFilter = async () => {
    if (input === "") {
      setFilterCars(cars);
      return null;
    }

    const filtered = cars.slice().filter((car) => {
      return (
        car.brand.toLowerCase().includes(input.toLowerCase()) ||
        car.model.toLowerCase().includes(input.toLowerCase()) ||
        car.category.toLowerCase().includes(input.toLowerCase()) ||
        car.transmission.toLowerCase().includes(input.toLowerCase()) ||
        car.fuel_type.toLowerCase().includes(input.toLowerCase())
      );
    });
    setFilterCars(filtered);
  };

  const searchAvailibility = async () => {
    const { data } = await axios.post("/api/bookings/check-availability", {
      location: pickupLocation,
      pickupDate,
      returnDate,
    });
    if (data.success) {
      setFilterCars(data.availableCars);
      if (data.availableCars.length === 0) {
        toast("No cars available");
      }
      return null;
    }
  };
  useEffect(() => {
    isSearchData && searchAvailibility();
  }, []);
  useEffect(() => {
    cars.length > 0 && !isSearchData && applyFilter();
  }, [input, cars]);

  return (
    <>
      {/* cars pageavailable cars */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-[80px] flex flex-col items-center  bg-light max-md:px-4"
      >
        <div className="flex flex-col justify-center items-center text-center false">
          <h1 className="font-semibold text-4xl md:text-[40px]">
            Available Cars
          </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-156">
            Browse our selection of premium vehicles available for your next
            adventure
          </p>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow"
        >
          <img className="w-4.5 h-4.5 mr-2" src={assets.search_icon} alt="" />
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="w-full h-full outline-none text-gray-500"
            type="text"
            placeholder="Search by make, model, or features "
          />
          <img className="w-4.5 h-4.5 mr-2" src={assets.filter_icon} alt="" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10"
      >
        <p className="text-gray-500  max-w-7xl mx-auto">
          Showing {filterCars.length} Cars
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-18 ">
          {filterCars.map((car, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              key={index}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Cars;
