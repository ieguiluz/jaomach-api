import { Router } from "express";
import { getProducts, addProduct, updateProduct, showProduct } from "../controllers/products";

const router: Router = Router();

router.get("/products", getProducts);

router.get("/products/:id", showProduct);

router.post("/add-product", addProduct);

router.put("/edit-product/:id", updateProduct);

export default router;