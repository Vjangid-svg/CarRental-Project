import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();

// connecting backend port with frontend using axios
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppProvider = ({ children }) => {
  // the values we are going to tackel with
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [pickupDate, setPickupDate] = useState(" ");
  const [returnDate, setReturnDate] = useState(" ");

  const [cars, setCars] = useState([]);

  //   function to check if user is logged in

  const fetchUser = async () => {
    try {
        const {data}= await axios.get("/api/user/data")
        if(data.success){
            setUser(data.user)
            setIsOwner(data.user.role === "owner")
        }else{
            navigate("/")
        }
    } catch (error) {
        toast.error(error.message)
    }
  };

// function to fetch all cars from the server


//   const fetchCars = async () => {
//     try {
//         const {data}=await axios.get("/api/user/cars")
//         data.success?setCars(data.cars):toast.error(data.message)
//     } catch (error) {
//           toast.error(error.message)
//     }
//   };

  const fetchCars = async () => {
  try {
    const { data } = await axios.get("/api/user/cars");
    console.log("FETCHED DATA:", data); // <-- log this
    if (data.success) {
        console.log("Setting cars in context:", data.cars);
// setCars(data.cars);
      setCars(data.cars);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("FETCH ERROR:", error); // <-- catch error
    toast.error(error.message);
  }
};

//   funtion to logout the user

const logout =()=>{
    localStorage.removeItem("token")
    setToken(null)
    setUser(null)
    setIsOwner(null)
       axios.defaults.headers.common["Authorization"]=""
      toast.success("You have been logged out")

}

// useeffect to retrieve the token from local storsge
useEffect(()=>{
    const token = localStorage.getItem("token")
    setToken(token);
    fetchCars()
},[]);

// useeffect to fetch user data when token is available 
useEffect(()=>{
    if(token){
        axios.defaults.headers.common["Authorization"]=`${token}`
        fetchUser();
    }
},[token]);

  const value = {
    navigate,axios,user,setUser,token,setToken,isOwner,setIsOwner,fetchUser,showLogin,setShowLogin,logout,fetchCars,cars,setCars,pickupDate,setPickupDate,returnDate,setReturnDate
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};


//   const fetchUser = async () => {
//     try {
//     } catch (error) {}
//   };