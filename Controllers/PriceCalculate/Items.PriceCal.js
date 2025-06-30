import CartItems from "../../Models/model.cartItems.js";

const CartItemsPriceCal = async (req, res) => {
  try {
    // 1️⃣ Fetch all cart items with only product price
    const ItemsCalPriceResponse = await CartItems.find().populate(
      "productId",
      "P_price"
    );

    if (!ItemsCalPriceResponse || ItemsCalPriceResponse.length === 0) {
      return res.status(400).json({
        success: false,
        msg: "No items found",
      });
    }

    // 2️⃣ Add totalPrice to each item
    const updatedItems = ItemsCalPriceResponse.map(item => {
      const price = item.productId?.P_price || 0;
      const quantity = item.quantity;
      const totalPrice = price * quantity;

      return {
        ...item._doc,
        totalPrice: totalPrice,
      };
    });

    // 3️⃣ Calculate final cart total
    const finalCartTotal = updatedItems.reduce((sum, item) => sum + item.totalPrice, 0);

    // 4️⃣ Send the response
    res.status(200).json({
      success: true,
      msg: "Cart items with individual total and grand total",
      totalCartPrice: finalCartTotal,
      data: updatedItems,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};

export default CartItemsPriceCal;
