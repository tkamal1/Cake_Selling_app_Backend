import express from "express";

import ProductAdd from "../Controllers/Product/product.add.js";
import upload from "../Upload.js";
import ProductFetch from "../Controllers/Product/product.fetch.js";
import ProductFetchAlldata from "../Controllers/Product/product.fetch.all.js";
import ProductUpdate from "../Controllers/Product/product.update.js";
import ProdutDelete from "../Controllers/Product/product.delete.js";
const ProductRoute = express.Router();

//Product Add
ProductRoute.post("/add", upload.single("image"), ProductAdd);
//Product update
ProductRoute.patch("/update/:id", upload.single("P_image"), ProductUpdate);
//Product Delete
ProductRoute.delete("/delete/:id", ProdutDelete);
//Product Fetch
ProductRoute.get("/gate_All", ProductFetchAlldata);
//Product Fetch by id
ProductRoute.get("/fetch/:id", ProductFetch);

export default ProductRoute;
