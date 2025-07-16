import React from 'react'
import Hero from '../components/Hero'
// import Cars from './Cars'
// import Footer from '../components/Footer'
// import CarDetail from './CarDetail'
// import Login from './Login'
// import MyBooking from './MyBooking'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Newslater from '../components/Newslater'

const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedSection/>
        <Banner/>
        <Testimonial/>
        <Newslater/>
        
             {/* <Cars/> */}
        <br /><br /><br /><br />
        {/* <Login/> */}
        {/* <CarDetail/> */}
        {/* <MyBooking/> */}
    </div>
  )
}

export default Home