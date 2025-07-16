import express from "express"
import "dotenv/config";
import cors from "cors";
import connectDb from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
// initialize express app
const app = express()
// Connected to database
await connectDb()
// Middleware
app.use(cors());
app.use(express.json());

app.get ("/",(req,res)=> res.send("all is well done"));
app.use("/api/user",userRouter);
app.use("/api/owner",ownerRouter);
app.use("/api/bookings",bookingRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("server is running on the Port :",PORT)
});

export default app;