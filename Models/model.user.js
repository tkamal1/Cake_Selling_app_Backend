import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [
        /^[6-9]\d{9}$/,
        "Please enter a valid 10-digit Indian phone number",
      ],
    },

    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
