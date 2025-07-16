import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Browse Cars", path: "/browse-cars" },
    { name: "List Your Car", path: "/list-cars" },
    { name: "About Us", path: "/aboutus" },
  ];
  const resources = [
    { name: "Help Center", path: "/help" },
    { name: "Terms of Service", path: "/t&C" },
    { name: "Privacy Policy", path: "/policy" },
    { name: "Insurance", path: "/insurance" },
  ];
  const footLink = [
    { name: "Privacy", path: "/privacy" },
    { name: "Terms ", path: "/t&C" },
    { name: "Cookies", path: "/cookies" },
  ];
  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className=" mx-[80px] md:mt-[240px] sm:mt:[140px] sm:mx-[100px]  flex flex-wrap justify-between items-start gap-8 pb-6   border-b-1  border-boderColor "
      >
        <div  className="">
          <motion.img 
            initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5,delay:0.3}}

          className="h-8 md:h-9" src={assets.logo} alt="" />
          <motion.p 
             initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5,delay:0.4}}
          className="max-w-80 mt-3 text-sm text-gray-500">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </motion.p>
          <motion.div
             initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5,delay:0.5}}
          
          className="flex items-center gap-3 mt-6">
            <img className="w-5 h-5" src={assets.facebook_logo} alt="" />
            <img className="w-5 h-5" src={assets.instagram_logo} alt="" />
            <img className="w-5 h-5" src={assets.twitter_logo} alt="" />
            <img className="w-5 h-5" src={assets.gmail_logo} alt="" />
          </motion.div>
        </div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay:0.4 }}
        className="flex flex-wrap justify-between w-1/2 gap-8">
          <div className="flex flex-col">
            <h1 className="text-base font-medium text-gray-800 uppercase pb-2">
              OUICK LINKS
            </h1>
            {quickLinks.map((link, index) => (
              <Link
                className=" text-gray-500 cursor-pointer text-sm pt-1"
                key={index}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-medium text-gray-800 uppercase pb-2">
              Resources
            </h1>
            {resources.map((link, index) => (
              <Link
                className=" text-gray-500 cursor-pointer text-sm pt-1"
                key={index}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div>
            <h1 className="text-base font-medium text-gray-800 uppercase pb-2">
              CONCTACT
            </h1>
            <p className=" text-gray-500 text-sm pt-1">1234 Luxury Drive</p>
            <p className=" text-gray-500 text-sm pt-1">
              San Francisco, CA 94107
            </p>
            <p className=" text-gray-500 text-sm pt-1">+1 234 567890</p>
            <p className=" text-gray-500 text-sm pt-1">info@example.com</p>
          </div>
        </motion.div>
      </motion.div>
      <motiondiv
        initial={{ y: 10, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6,delay:0.6}}
    
      className="flex px-[128px] justify-between py-[20px]">
        <p className=" text-gray-500 text-sm">
          ©{new Date().getFullYear()} Brand. All rights reserved.
        </p>

        <div>
          {footLink.map((link, index) => (
            <Link
              className=" text-gray-500 cursor-pointer text-sm pt-1 px-3"
              key={index}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motiondiv>
    </>
  );
};

export default Footer;
