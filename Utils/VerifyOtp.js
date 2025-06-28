// utils/verifyOtp.js
import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.Account_SID;
const authToken = process.env.Auth_Token;
const serviceSid = process.env.TWILIO_SERVICE_SID;

const client = twilio(accountSid, authToken);

export const verifyOtp = async (phone, code) => {
  try {
    const verification_check = await client.verify.v2.services(serviceSid)
      .verificationChecks
      .create({
        to: `+91${phone}`,
        code,
      });

    console.log("Verification status:", verification_check.status);
    return verification_check.status === 'approved';
  } catch (error) {
    console.error("OTP verification error:", error.message);
    return false;
  }
};
