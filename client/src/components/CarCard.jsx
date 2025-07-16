// isme bs cars h 4 baki title carcarpage me h or carcar page hij youtube wala car car h
import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";

const Carcar = ({ car }) => {
  const navigate = useNavigate();
  // const { cars } = useAppContext();

  return (
    <>
      <div
        onClick={() => {
          navigate(`/car-details/${car._id}`);
          scrollTo(0, 0);
        }}
        className="group rounded-xl overflow-hidden shadow-lg  hover:-translate-y-1 transition-all duration-500  cursor-pointer"
      >
        <div className="h-48 relative overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105    "
            src={car.image}
            alt=""
          />
          <p className="absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full">
            Available Now
          </p>
          <p className=" font-semibold absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
            ${car.pricePerDay}{" "}
            <span className=" text-sm text-white/80">/day</span>{" "}
          </p>
        </div>
        <div className="p-4 sm:p-5">
          <div>
            <h2 className="text-lg font-medium">
              {car.brand} {car.model}
            </h2>
            <p className="text-muted-foreground text-sm">
              {car.category} * {car.year}
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-y-2 text-gray-600 ">
            <div className="flex items-center text-sm text-muted-foreground">
              <img src={assets.users_icon} className="h-4 mr-2" alt="" />
              <span className=" text-gray-600">
                {" "}
                {car.seating_capacity}Seats
              </span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <img src={assets.fuel_icon} className="h-4 mr-2" alt="" />
              <span className=" text-gray-600"> {car.fuel_type}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <img src={assets.car_icon} className="h-4 mr-2" alt="" />
              <span className=" text-gray-600"> {car.transmission}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <img src={assets.location_icon} className="h-4 mr-2" alt="" />
              <span className=" text-gray-600"> {car.location}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carcar;
