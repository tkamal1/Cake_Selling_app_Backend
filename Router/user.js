import express from "express";
const UserRouter = express.Router();

import UserCreate from "../Controllers/User/User.create.js";
import UserPhoneCheck from "../Controllers/User/User.PhoneCheck.js";
import UserVerification from "../Controllers/User/User.OtpVerify.js";

//User Create
UserRouter.post("/create", UserCreate);
//User Phone check
UserRouter.post("/U_phoneCheck", UserPhoneCheck);
//Otp verification
UserRouter.post("/OtpVerify", UserVerification);

export default UserRouter;
