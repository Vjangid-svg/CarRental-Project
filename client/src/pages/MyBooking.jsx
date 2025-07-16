import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { motion } from "motion/react";
const MyBooking = () => {

    const {axios,user} = useAppContext()


    const [bookings,setBookings] = useState([])
     const fetchMyBookings = async()=>{
        try {
            const {data} = await axios.get("/api/bookings/user")
             if (data.success) {
                 setBookings(data.bookings);
      } else {
        toast.error(data.message);
      }
        } catch (error) {
            toast.error(error.message);
        }
       
     }
     useEffect(()=>{
       user && fetchMyBookings()
     },[user])
  return (
    <>
    <motion.div
           initial={{ y: 30, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6}}
    className='mt-[64px] px-[80px] sm:px-[192px]'>
        <div className='flex flex-col justify-center items-center text-center  md:items-start md:text-left'>
            <h1 className='font-semibold text-4xl md:text-[40px]'>My Bookings</h1>
            <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-156'>View and manage your all car bookings</p>
        </div>

      {
        bookings.map((booking,index)=>(
              
        <motion.div 
        
               initial={{ y: 20, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4,delay:index*0.1}}

        key={booking._id} className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-boderColor rounded-lg mt-5 first:mt-12'>
            <div className='md:col-span-1'>
                <div><img className='w-full rounded-xl h-auto aspect-video object-cover' src={booking.car.image} alt="" /></div>
                <p className='text-lg font-medium mt-2'>{booking.car.brand} {booking.car.model}</p>
                <p className='text-lg font-medium mt-2'>{booking.car.year}• {booking.car.category} • {booking.car.location}</p>
            </div>

            <div className='md:col-span-2'>
                <div className='flex items-center gap-2'>
                    <p className='px-3 py-1.5 bg-light rounded'>Booking #{index+1}</p>
                    <p className={`px-3 py-1 text-xs rounded-full ${booking.status === "confirmed"?" bg-green-400/15 text-green-600":" bg-red-400/15 text-red-600"}`}>{booking.status}</p>
                </div>
                <div className='flex items-start  gap-2 mt-3'>
                    <img className='w-4 h-4 mt-1' src={assets.calendar_icon_colored} alt="" />
                    <div>
                        <p className='text-gray-500'>Rental Period</p>
                        <p>{booking.pickupDate.split("T")[0]} to {booking.returnDate.split("T")[0]}</p>
                    </div>
                </div>
                <div className='flex items-start gap-2 mt-3'>
                    <img className='w-4 h-4 mt-1' src={assets.location_icon_colored} alt="" />
                    <div>
                        <p className='text-gray-500'>Pick-up Location</p>
                        <p>{booking.car.location}</p>
                    </div>
                </div>

            </div>

            <div className='md:col-span-1 flex flex-col justify-between gap-6'>
                <div className='text-sm text-gray-500 text-right'>
                    <p>Total Price</p>
                    <h1 className='text-2xl font-semibold text-primary'>${booking.car.pricePerDay}</h1>
                    <p>Booked on {booking.createdAt.split("T")[0]}</p>
                </div>

            </div>
           
        </motion.div>
        ))
      }
    </motion.div>
    </>
  )
}

export default MyBooking