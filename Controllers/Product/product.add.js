import Product from "../../Models/model.product.js";

const ProductAdd = async (req, res) => {
  const {
    P_name,
    P_price,
    P_rating,
    P_description,
    P_category,
    P_weight,
    P_isEggless,
    P_flavors,
    P_available,
    P_discount,
    P_ingredients,
  } = req.body;
  const P_image = req.file.path;

  try {
    const ProductUploadResponse = await Product.create({
      P_name,
      P_price,
      P_rating,
      P_description,
      P_category,
      P_weight,
      P_isEggless,
      P_flavors,
      P_available,
      P_discount,
      P_ingredients,
      P_image,
    });

    if (!ProductUploadResponse) {
      return res.status(404).json({
        success: false,
        msg: "Product Upload Faild",
      });
    }

    return res.status(201).json({
      success: true,
      msg: "Product Upload SuccessFul",
      data: ProductUploadResponse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};

export default ProductAdd;
