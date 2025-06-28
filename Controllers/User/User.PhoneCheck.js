import User from "../../Models/model.user.js";
import UserOtp from "../../Models/model.UserOtp.js";
import { sendOtp } from "../../Utils/SendOtp.js";
const UserPhoneCheck = async (req, res) => {
  const { U_phone } = req.body;
  const phone = U_phone;
  try {
    const UserLoginResponse = await User.findOne({ U_phone });
    if (!UserLoginResponse) {
      return res.status(404).json({
        success: false,
        msg: "Invalid Phone no.",
      });
    }
    const User_Otp = Math.floor(Math.random() * 1000000);
    const otpDoc = new UserOtp({ User_Otp }); // Step 1: create document
    const SaveOtp = await otpDoc.save(); // Step 2: save it to DB

    if (!SaveOtp) {
      return res.status(404).json({
        success: false,
        msg: "Otp not save.",
      });
    }
    const SendOtpResponse = await sendOtp(phone);

    return res.status(200).json({
      success: true,
      msg: " OTP sent successfully",
      data: SendOtpResponse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "server error ",
      error: error.message,
    });
  }
};

export default UserPhoneCheck;
