import mongoose from "mongoose";

const UserOtpSchema = new mongoose.Schema({
  User_Otp: {
    type: String,
    required: true,
  },
  otpExpiresAt: {
    type: Date,
    default: () => new Date(Date.now() + 2 * 60 * 1000), // 2 minutes from now
    index: { expires: 0 }, // 🔥 TTL index: expire at the given time
  },
});

const UserOtp = mongoose.model("userOtp", UserOtpSchema);
export default UserOtp;
