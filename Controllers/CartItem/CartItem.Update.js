import Cartitems from "../../Models/model.cartItems.js";

const CartItemsUpdate = async (req, res) => {
  const { _id, quantity } = req.body;
  try {
    const CartUpdateResponse = await Cartitems.findByIdAndUpdate(
      _id,
      { quantity },
      { new: true, runValidators: true }
    );
    if (!CartUpdateResponse) {
      return res.status(404).json({
        success: false,
        msg: "Update Failds",
      });
    }
    return res.status(200).json({
      sucess: true,
      msg: "Update Successful",
      data: CartUpdateResponse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};

export default CartItemsUpdate;
