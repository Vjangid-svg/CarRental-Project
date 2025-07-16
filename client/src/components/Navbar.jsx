import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const Navbar = () => {
  const { setShowLogin, user, logout, axios, isOwner, setIsOwner } =
    useAppContext();

  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const changeRole = async () => {
    try {
      const { data } = await axios.post("/api/owner/change-role");
      if (data.success) {
        setIsOwner(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex justify-between  items-center px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-boderColor relative transition-all ${
        location.pathname === "/" ? "bg-light" : "bg-white"
      }`}
    >
      <div>
        <Link to="/">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={assets.logo}
            alt="_logo"
            className="h-8"
          />
        </Link>
      </div>

      <div
        className={` max-sm:fixed max-sm:h-screen max-sm:top-16 max-sm:border-t border-boderColor right-0 flex flex-col  sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
          location.pathname === "/" ? "bg-light" : "bg-white"
        } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        <div className=" flex flex-col sm:flex-row gap-4 md:gap-6">
          {menuLinks.map((link, index) => (
            <Link key={index} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-5">
          <div className="hidden lg:flex items-center text-sm gap-2 border border-boderColor px-3 rounded-full max-w-56">
            <input
              type="text"
              className="py-1.5 min-w-[50%] bg-transparent outline-none placeholder-gray-500"
              placeholder="Search cars"
            />
            <img src={assets.search_icon} alt="search" />
          </div>

          <div className=" flex flex-col sm:flex-row items-start sm:items-center lg:gap-6">
            <button
              onClick={() => (isOwner ? navigate("/owner") : changeRole())}
              className="cursor-pointer mb-5 sm:mb-0"
            >
              {isOwner ? "Dashboard " : "List Cars"}
            </button>
            <button
              onClick={() => {
                user ? logout() : setShowLogin(true);
              }}
              className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
            >
              {user ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>
      <button
        className="sm:hidden cursor-pointer"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
      </button>
    </motion.div>
  );
};

export default Navbar;
