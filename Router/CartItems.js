import express from "express";
const CartItemRoutes = express.Router();
import CartItemsAdd from "../Controllers/CartItem/CartItem.add.js";
import CartItemsUpdate from "../Controllers/CartItem/CartItem.Update.js";
import CartItemRemove from "../Controllers/CartItem/Cartitem.remove.js";
import CartItemGate from "../Controllers/CartItem/CartItem.get.js";
// Items add
CartItemRoutes.post("/add", CartItemsAdd);
// Items Update
CartItemRoutes.patch("/Update", CartItemsUpdate);
// item Remove
CartItemRoutes.delete("/Remove", CartItemRemove);
// gate Items
CartItemRoutes.get("/gate", CartItemGate);

export default CartItemRoutes;
