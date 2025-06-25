const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cake",
    required: [true, "Product ID is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [1, "Quantity must be at least 1"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
    unique: true, // one cart per user
  },
  items: {
    type: [cartItemSchema],
    validate: [arrayLimit, "{PATH} cannot be empty"],
  },
  totalPrice: {
    type: Number,
    default: 0,
    min: [0, "Total price cannot be negative"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

function arrayLimit(val) {
  return val.length > 0;
}

export  { cartItemSchema, cartSchema };
