import Cartitems from "../../Models/model.cartItems.js";

const CartItemRemove = async (req, res) => {
  const {id} = req.body;
  try {
    const ItemRemove = await Cartitems.findByIdAndDelete(id);
    if (!ItemRemove) {
      return res.status(400).json({
        success: false,
        msg: "Item remove faild",
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Item remove SuccessFul",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "server faild",
      error: error.message,
    });
  }
};

export default CartItemRemove;
