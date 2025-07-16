import imagekit from "../config/imagekit.js";
import Booking from "../models/Booking.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import fs from "fs";

// api to change rrole of user
export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });
    res.json({ success: true, message: "Now user can llist cars" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// api to list car

export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
    let car = JSON.parse(req.body.carData);
    const imageFile = req.file;
    //  upload Image to ImageKit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/cars",
    });

    //  optimize throug h imagekit url transformation
    var optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "1280" },
        { quality: "auto" },
        { format: "webp" },
      ],
    });
    const image = optimizedImageUrl;
    await Car.create({ ...car, owner: _id, image });

    res.json({ success: true, message: "car ADDED" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Api to list Owners cars
export const getOwnerCars = async (req, res) => {
  try {
    const { _id } = req.user;
    const cars = await Car.find({ owner: _id });
    res.json({ success: true , cars });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// api to toggle car availability

export const toggleCarAvailability = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;
    const car = await Car.findById(carId);
    // checking is car belongs to user
    if (car.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unauthorized" });
    }
    car.isAvailable = !car.isAvailable;
    await car.save();
    res.json({ success: true, message: "Availibility is Toggled" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
// api to delete car

export const deleteCar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;
    const car = await Car.findById(carId);
    // checking is car belongs to user
    if (car.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unauthorized" });
    }
    car.owner = null;
    car.isAvailable = false;
    await car.save();
    res.json({ success: true, message: "car removed" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// api to get dashboard data

export const getDashboardData = async (req, res) => {
  try {
    const { _id, role } = req.user;
    if (role !== "owner") {
      return res.json({ success: false, message: "Unauthorized" });
    }

    const cars = await Car.find({ owner: _id });
    const bookings = await Booking.find({ owner: _id })
      .populate("car")
      .sort({ createdAt: -1 });

    const pendingBookings = await Booking.find({
      owner: _id,
      status: "pending",
    });

    const completedBookings = await Booking.find({
      owner: _id,
      status: "confirmed",
    });

    // calculate the monthely revenue from booking where status is confirmed
    const monthlyRevenue = bookings
      .slice()
      .filter((booking) => booking.status === "confirmed")
      .reduce((acc, booking) => acc + booking.price, 0);

    const dashboardData = {
      totalCars: cars.length,
      totalBookings: bookings.length,
      pendingBookings: pendingBookings.length,
      completedBookings: completedBookings.length,
      recentBookings: bookings.slice(0, 3),
      monthlyRevenue,
    };

    res.json({ success: true, dashboardData });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// api to update profile image

export const updateUserImage = async (req, res) => {
  try {
    const { _id } = req.user;
    const imageFile = req.file;
    //  upload Image to ImageKit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/users",
    });

    //  optimize throug h imagekit url transformation
    var optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "400" },
        { quality: "auto" },
        { format: "webp" },
      ],
    });
    const image = optimizedImageUrl;
    await User.findByIdAndUpdate(_id, { image });
    res.json({ success: true, message: "Profile image updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
