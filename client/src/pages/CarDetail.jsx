// import { assets } from "../assets/assets";

import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { motion } from "motion/react";
// import { TailSpin } from "react-loader-spinner";


const CarDetail = () => {
  const { id } = useParams();
  const { cars, axios, pickupDate, setPickupDate, returnDate, setReturnDate } =
    useAppContext();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/bookings/create", {
        car: id,
        pickupDate,
        returnDate,
      });
      if (data.success) {
        toast.success(data.message);
        navigate("/my-bookings");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  // useEffect(() => {
  //   setCar(cars.find((car) => car._id === id));
  // }, [cars, id]);
  useEffect(() => {
  setLoading(true);
  const foundCar = cars.find((car) => car._id === id);
  setCar(foundCar);
  setLoading(false);
}, [cars, id]);


// if (loading) {
//   return (
//     <div className="flex justify-center items-center h-[400px]">
//       <TailSpin
//         visible={true}
//         height="80"
//         width="80"
//         color="#1D4ED8" // Tailwind 'blue-700' as primary color
//         ariaLabel="tail-spin-loading"
//       />
//     </div>
//   );
// }

if (!car) {
  return (
    <div className="flex justify-center items-center h-[400px]">
      <p className="text-gray-500 text-lg">Car not found</p>
    </div>
  );
}


  return (
    <>
      <div className=" mt-[24px] mx-[40px]  md:mt-[64px] md:mx-[128px]">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
        >
          {" "}
          <img
            src={assets.arrow_icon}
            className="rotate-180 opacity-65"
            alt=""
          />{" "}
          Back to all cars
        </button>
        <div className="flex flex-col md:flex-row justify-center gap-[50px]">
          <motion.div
           initial={{ y: 30, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6}}
          className="w-full  ">
            <motion.img
               initial={{ scale:0.98, opacity: 0 }}
        animate={{ opacity: 1, scale:1 }}
        transition={{ duration: 0.5}}
              className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
              src={car.image}
              alt=""
            />
            <motion.div
              initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ delay:0.2,duration: 0.5}}
            >
              <div>
                <h1 className="text-3xl font-bold">
                  {car.brand} {car.model}
                </h1>
                <p className="text-gray-500 text-lg">
                  {car.category} • {car.year}
                </p>
              </div>
              <hr className="border-boderColor my-6" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4  pb-[24px]">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4}}
                
                className="flex flex-col items-center bg-light p-4 rounded-lg">
                  <img className="h-5 mb-2" src={assets.users_icon} alt="" />{" "}
                  <p>{car.seating_capacity} Seats</p>
                </motion.div>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4}}
                
                className="flex flex-col items-center bg-light p-4 rounded-lg">
                  <img className="h-5 mb-2" src={assets.fuel_icon} alt="" />{" "}
                  <p>{car.fuel_type}</p>
                </motion.div>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4}}
                
                className="flex flex-col items-center bg-light p-4 rounded-lg">
                  <img className="h-5 mb-2" src={assets.car_icon} alt="" />{" "}
                  <p>{car.transmission}</p>
                </motion.div>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4}}
                
                className="flex flex-col items-center bg-light p-4 rounded-lg">
                  <img className="h-5 mb-2" src={assets.location_icon} alt="" />{" "}
                  <p>{car.location}</p>
                </motion.div>
              </div>
              <div className="  pb-[24px] ">
                <h1 className="text-xl font-medium mb-3">Description</h1>
                <p className="text-gray-500">{car.description}</p>
              </div>
              <div>
                <h1 className="text-xl font-medium mb-3">Features</h1>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li className="flex items-center text-gray-500">
                    <img className="h-4 mr-2 " src={assets.check_icon} alt="" />
                    360 Camera
                  </li>
                  <li className="flex items-center text-gray-500">
                    <img className="h-4 mr-2 " src={assets.check_icon} alt="" />
                    Bluetooth
                  </li>
                  <li className="flex items-center text-gray-500">
                    <img className="h-4 mr-2 " src={assets.check_icon} alt="" />
                    GPS
                  </li>
                  <li className="flex items-center text-gray-500">
                    <img className="h-4 mr-2 " src={assets.check_icon} alt="" />
                    Heated Seats
                  </li>
                  <li className="flex items-center text-gray-500">
                    <img className="h-4 mr-2 " src={assets.check_icon} alt="" />
                    Rear View Mirror
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
          <motion.form
            initial={{ y: 30, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6,delay:0.3}}
            onSubmit={ handelSubmit}
            className=" py-[27px] mb-[50px] md:mb-0  md:min-w-[390px] shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500 "
          >
            <div className=" flex  flex-col gap-6">
              <div className="flex justify-between pb-[24px] border-b-1 border-boderColor">
                <h1 className="flex items-center justify-between text-2xl text-gray-800 font-semibold">
                  ${car.pricePerDay}
                </h1>
                <p className="text-base text-gray-400 font-normal">per day</p>
              </div>

              <div className="flex flex-col gap-2  text-gray-500">
                <label htmlFor="pickup-date">Pick-up Date</label>
                <input
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  type="date"
                  id="pickup-date"
                  min={new Date().toISOString().split("T")[0]}
                  className="border border-boderColor px-3 py-2 rounded-lg"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 text-gray-500">
                <label htmlFor="return-date">Return Date</label>
                <input
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  type="date"
                  id="return-date"
                  className="border border-boderColor px-3 py-2 rounded-lg"
                  required
                />
              </div>

              <button className=" flex w-full  items-center    justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-2xl cursor-pointer">
                Book Now
              </button>
              <p className="text-center text-sm">
                No credit card required to reserve
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  ) }
// : (
//     <div>
//         render(<TailSpin
//   visible={true}
//   height="80"
//   width="80"
//   color="primary"
//   ariaLabel="tail-spin-loading"
//   radius="1"
//   wrapperStyle={{}}
//   wrapperClass=""
//   />)

//     </div>
//   );
// };

export default CarDetail;
