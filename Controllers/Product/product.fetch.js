import Product from "../../Models/model.product.js";

const ProductFetch = async (req, res) => {
  const { id } = req.params;

  try {
    const ProductFetchResponse = await Product.findById(id);

    if (!ProductFetchResponse) {
      return res.status(404).json({
        success: false,
        msg: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Product found successfully",
      data: ProductFetchResponse,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};

export default ProductFetch;
