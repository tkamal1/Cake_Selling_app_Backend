import Product from "../../Models/model.product.js";

const ProdutDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const ProductDeletResponse = await Product.findByIdAndDelete(id);
    if (!ProductDeletResponse) {
      return res.status(404).json({
        success: false,
        msg: "product Delete Faild",
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Product Delete SuccessFul",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};

export default ProdutDelete;
