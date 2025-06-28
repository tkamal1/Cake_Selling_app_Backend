import User from "../../Models/model.user.js";
import { verifyOtp } from "../../Utils/VerifyOtp.js";
import jwt from "jsonwebtoken";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const UserVerification = async (req, res) => {
  const { U_phone, U_OTP } = req.body;
  const phone = U_phone;
  const code = U_OTP;
  try {
    const OtpVetifyResponse = await verifyOtp(phone, code);
    console.log("OtpVetifyResponse", OtpVetifyResponse);
    if (!OtpVetifyResponse) {
      return res.status(404).json({
        success: false,
        msg: "Invalid otp",
      });
    } else {
      const userDetails = await User.findOne({ U_phone });
      console.log("userDetails", userDetails);
      const payload = {
        UserId: userDetails.id,
        UserPh: userDetails.U_phone,
      };
      console.log("payload", payload);

      const U_token = jwt.sign({ UserInfo: payload }, JWT_SECRET_KEY, {
        expiresIn: "1d",
      });
      console.log("user token ", U_token);
      res.cookie("UserInfo", U_token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        signed: true,
      });

      return res.status(200).json({
        success: true,
        msg: "Otp Verification successFul",
        otResponse: OtpVetifyResponse,
        data: userDetails,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "server error",
      error: error.message,
    });
  }
};
export default UserVerification;
