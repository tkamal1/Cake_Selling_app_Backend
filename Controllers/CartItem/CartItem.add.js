import Cartitems from "../../Models/model.cartItems.js";

const CartItemsAdd = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const ItemsAddResponse = await Cartitems.create({
      userId,
      productId,
      quantity,
    });

    if (!ItemsAddResponse) {
      return res.status(400).json({
        success: false,
        msg: "Items Add failds",
      });
    }
    return res.status(201).json({
      success: true,
      msg: "Items add SuccessFul",
      data: ItemsAddResponse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};

export  default CartItemsAdd;