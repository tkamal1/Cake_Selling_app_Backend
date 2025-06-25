import mongoose from "mongoose";

const FutureProductSchema = new mongoose.Schema(
  {
    Fp_name: {
      type: String,
      required: true,
    },
    Fp_expectedLaunchDate: {
      type: Date,
      required: true,
    },
    Fp_previewImage: {
      type: [String],
      required: true,
    },
    Fp_description: {
      type: String,
    },
    Fp_category: {
      type: String,
    },
    Fp_flavors: [String],
    Fp_customizable: {
      type: Boolean,
      default: false,
    },
    Fp_preOrderAvailable: {
      type: Boolean,
      default: false,
    },
    Fp_estimatedPrice: {
      type: Number,
    },
    Fp_isFeatured: {
      type: Boolean,
      default: false,
    },
    Fp_status: {
      type: String,
      enum: ["coming_soon", "open_for_preorder", "delayed"],
      default: "coming_soon",
    },
    Fp_tags: [String],
    Fp_createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const FutureProduct = mongoose.model("FutureProduct", FutureProductSchema);

export default FutureProduct;
