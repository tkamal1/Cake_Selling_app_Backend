import mongoose from "mongoose";

const UserOtpSchema = new mongoose.Schema({
  User_Otp: String,
  otpExpiresAt: {
    type: Date,
    default: () => Date.now() + 2 * 60 * 1000, // ⏰ 2 minutes from now
  },
});

const UserOtp = mongoose.model('userOtp', UserOtpSchema);
export default UserOtp;
