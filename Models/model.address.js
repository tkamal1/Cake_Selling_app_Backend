import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Full name must be at least 2 characters long"],
      maxlength: [100, "Full name must be less than 100 characters"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [
        /^[6-9]\d{9}$/,
        "Please enter a valid 10-digit Indian phone number",
      ],
    },
    street: {
      type: String,
      required: [true, "Street address is required"],
      minlength: [5, "Street address must be at least 5 characters"],
      maxlength: [200, "Street address too long"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },
    state: {
      type: String,
      required: [true, "State is required"],
      trim: true,
    },
    zip: {
      type: String,
      required: [true, "ZIP/Pin code is required"],
      match: [/^\d{6}$/, "Please enter a valid 6-digit Indian PIN code"],
    },
    country: {
      type: String,
      default: "India",
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const Address = mongoose.model("Address", AddressSchema);

export default Address;
