import Cartitems from "../../Models/model.cartItems.js";

const CartItemGate = async (req, res) => {
  try {
    const ItemGateResponse = await Cartitems.find();
    if (!ItemGateResponse) {
      return res.status(400).json({
        success: false,
        msg: "Item not found",
      });
    }
    return res.status(200).json({
      sucess: true,
      msg: "All items find SuccessFul",
      data: ItemGateResponse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};

export default CartItemGate;
