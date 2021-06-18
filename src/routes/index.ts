import { Router } from "express";
import { getProducts, addProduct, updateProduct, showProduct } from "../controllers/products";

const router: Router = Router();

router.get("/products", getProducts);

router.get("/products/:code", showProduct);

router.post("/products", addProduct);

router.put("/products/:id", updateProduct);

export default router;