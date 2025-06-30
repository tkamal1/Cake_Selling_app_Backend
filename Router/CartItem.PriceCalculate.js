import CartItems from "../Models/model.cartItems.js";
import express from "express";
import CartItemsPriceCal from '../Controllers/PriceCalculate/Items.PriceCal.js'
const CartCalRoute = express.Router();

CartCalRoute.get("/totalPrice",CartItemsPriceCal);

export default CartCalRoute;
