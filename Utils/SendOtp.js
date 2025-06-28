// utils/sendOtp.js
import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.Account_SID;
const authToken = process.env.Auth_Token;
const serviceSid = process.env.TWILIO_SERVICE_SID;

const client = twilio(accountSid, authToken);

export const sendOtp = async (phone) => {
  try {
    const verification = await client.verify.v2.services(serviceSid)
      .verifications
      .create({ to: `+91${phone}`, channel: 'sms' });

    console.log("OTP SID:", verification.sid);
    return verification.status === 'pending';
  } catch (error) {
    console.error("OTP send error:", error.message);
    return false;
  }
};

