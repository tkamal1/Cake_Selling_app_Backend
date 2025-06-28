import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import mongoose from "mongoose";
import ProductRoute from "./Router/Product.js";
import UserRouter from "./Router/user.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const cookieSeckey = process.env.COOKIES_kEY;
// Middleware setup
app.use(express.json()); //Parses incoming JSON data (used in APIs)
app.use(express.urlencoded({ extended: false })); //Parses data from HTML forms
app.use(cors()); //Allows cross-origin API calls (very important for frontend-backend communication)
app.use(morgan("dev")); //Logs all HTTP requests in console
app.use(helmet()); //Secures your app by setting HTTP headers
app.use(compression()); //Compresses response bodies to improve performance
app.use(cookieParser(cookieSeckey));
//testing Router
app.get("/", (req, res) => {
  console.log("server testing ");
  
  return res.end("hello i am from server");
  
});

// Custom Route
app.use("/cake/product", ProductRoute);
// app.use("/cake/future_product");
// app.use("/cake/cart");
app.use("/cake/user", UserRouter);
// app.use("/cake/address");

// server
// MongoDB connection

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
