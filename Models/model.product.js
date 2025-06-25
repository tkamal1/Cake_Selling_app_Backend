import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    P_name: {
      type: String,
      required: true,
    },
    P_price: {
      type: Number,
      required: true,
    },
    P_rating: {
      type: Number,
      default: 0,
    },
    P_image: {
      type: [String],
      required: true,
    },
    P_description: {
      type: String,
    },
    P_category: {
      type: String,
    },

    P_weight: {
      type: String,
    },
    P_isEggless: {
      type: Boolean,
      default: false,
    },
    P_flavors: [String],

    P_available: {
      type: Boolean,
      default: true,
    },
    P_discount: {
      type: Number,
      default: 0,
    },
    P_ingredients: [String],

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Product = mongoose.model("Products", ProductSchema);

export default Product;
