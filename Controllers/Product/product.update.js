import Product from "../../Models/model.product.js";

const ProductUpdate = async (req, res) => {
  const { id } = req.params;

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

  const updateFildes = {
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
  };

  //  Add image if file is uploaded
  if (req.file && req.file.path) {
    updateFildes.P_image = [req.file.path];
  }

  // Remove undefined fields
  Object.keys(updateFildes).forEach(
    (key) => updateFildes[key] === undefined && delete updateFildes[key]
  );

  console.log("updatesfields", updateFildes.P_available);

  try {
    const ProductUpdateResponse = await Product.findByIdAndUpdate(
      id,
      updateFildes,
      { new: true, runValidators: true }
    );

    if (!ProductUpdateResponse) {
      return res.status(404).json({
        success: false,
        msg: "Product Update faild",
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Product Update SuccessFul",
      data: ProductUpdateResponse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};

export default ProductUpdate;
