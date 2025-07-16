import React, { useState } from "react";
import TitleOwner from "../../components/owner/TitleOwner";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddCar = () => {
  const { axios } = useAppContext();

  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    category: "",
    seating_capacity: 0,
    fuel_type: "",
    transmission: "-",
    pricePerDay: 0,
    location: " ",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return null
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("carData", JSON.stringify(car));

      const { data } = await axios.post("/api/owner/add-car", formData);

      if (data.success) {
        toast.success(data.message);
        setImage(null);
        setCar({
          brand: "",
          model: "",
          year: 0,
          category: "",
          seating_capacity: 0,
          fuel_type: "",
          transmission: "-",
          pricePerDay: 0,
          location: " ",
          description: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="px-4 py-10 md:px-10 w-full ">
        <TitleOwner
          title="Add New Car"
          subtitle="Fill in details to list a new car for booking, including pricing, availability, and car specifications."
        />
        <form
          onSubmit={handelSubmit}
          className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
        >
          <div className="flex items-center gap-2 w-full">
            <label
              htmlFor="fileInput"
              className=" bg-white rounded-md text-sm     cursor-pointer "
            >
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_icon}
                // src={assets.upload_icon}
                className="h-14 rounded cursor-pointer"
                alt=""
              />
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            <p className="text-gray-500 text-md">
              Upload a picture of your car
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col w-full">
              <label htmlFor="">Brand</label>
              <input
                value={car.brand}
                onChange={(e) => setCar({ ...car, brand: e.target.value })}
                type="text "
                placeholder="e.g. BMW, Mercedes, Audi..."
                required
                className="px-3 py-2 mt-1 border border-boderColor rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="">Model</label>
              <input
                value={car.model}
                onChange={(e) => setCar({ ...car, model: e.target.value })}
                type="text "
                placeholder="e.g. X5, E-Class, M4.... "
                required
                className="px-3 py-2 mt-1 border border-boderColor rounded-md outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col w-full">
              <label htmlFor="">Year</label>
              <input
                value={car.year}
                onChange={(e) => setCar({ ...car, year: e.target.value })}
                type="number"
                placeholder="2025"
                required
                className="px-3 py-2 mt-1 border border-boderColor rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="">Dily Price($)</label>
              <input
                value={car.pricePerDay}
                onChange={(e) =>
                  setCar({ ...car, pricePerDay: e.target.value })
                }
                type="number"
                placeholder="250"
                required
                className="px-3 py-2 mt-1 border border-boderColor rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="">Category</label>
              <select
                name=""
                value={car.category}
                onChange={(e) => setCar({ ...car, category: e.target.value })}
                className="px-3 py-2 mt-1 border border-boderColor rounded-md outline-none"
                id=""
              >
                <option value="Select Category">Select Category</option>
                <option value="Sedan">Sedan</option>
                <option value="Suv">Suv</option>
                <option value="Van">Van</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col w-full">
              <label htmlFor="">Transmission</label>
              <select
                name=""
                value={car.transmission}
                onChange={(e) =>
                  setCar({ ...car, transmission: e.target.value })
                }
                className="px-3 py-2 mt-1 border border-boderColor rounded-md outline-none"
                id=""
              >
                <option value="Select a transmission">
                  Select a transmission
                </option>
                <option value="Automatic">Automatic</option>
                <option value="Mannual">Mannual</option>
                <option value="Semi-Automatic">Semi-Automatic</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="">Fule Type</label>
              <select
                name=""
                value={car.fuel_type}
                onChange={(e) => setCar({ ...car, fuel_type: e.target.value })}
                className="px-3 py-2 mt-1 border border-boderColor rounded-md outline-none"
                id=""
              >
                <option value="Select a fule type">Select a fule type</option>
                <option value="Gas">Gas</option>
                <option value="Diesel">Diesel</option>
                <option value="Petrol">Petrol</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="">Seating Capacity</label>
              <input
                value={car.seating_capacity}
                onChange={(e) =>
                  setCar({ ...car, seating_capacity: e.target.value })
                }
                type="number"
                placeholder="0"
                required
                className="px-3 py-2 mt-1 border border-boderColor rounded-md outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="">Location</label>
            <select
              name=""
              value={car.location}
              onChange={(e) => setCar({ ...car, location: e.target.value })}
              className="px-3 py-2 mt-1 border border-boderColor rounded-md outline-none"
              id=""
            >
              <option value="">Select a location</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Houston">Houston</option>
              <option value="Chicago">Chicago</option>
              <option value="India">India</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="">Description</label>
            <textarea
              rows="5"
              value={car.description}
              onChange={(e) => setCar({ ...car, description: e.target.value })}
              placeholder="e.g. A luxurious SUV with a spacious interior and a powerful engine."
              required
              className="px-3 py-2 mt-1 border border-boderColor rounded-md outline-none"
              name=""
              id=""
            ></textarea>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer">
            <img src={assets.tick_icon} alt="" />
            {isLoading ? "Listing..." : "List Your Car"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCar;
