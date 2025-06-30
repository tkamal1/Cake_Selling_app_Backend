import mongoose from "mongoose";

const CartItemsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"]
      
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product ID is required"],
    },
    quantity: {
      type: Number,
      min: [1, "Quantity must be at least 1"],
      default: 1
    },
  },
  { timestamps: true }
);

const Cartitems =  mongoose.model("CartItems", CartItemsSchema);


export default Cartitems;
