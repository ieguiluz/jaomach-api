import { Response, Request } from "express";
import { IProduct } from "./../../types/product";
import Product from "./../../models/product";

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find().populate('currency');
    res.status(200).json({ products });
  } catch (error) {
    throw error;
  }
}

const showProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { code }
    } = req;
    const product: IProduct | null = await Product.findOne({ code }).populate('currency');
    res
      .status(200)
      .json({ product });
  } catch (error) {
    throw error;
  }
}

const addProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IProduct, "code" | "name" | "description" | "price" | "currency">

    const product: IProduct = new Product({
      code: body.code,
      name: body.name,
      description: body.description,
      price: body.price,
      currency: body.currency
    });

    const newProduct: IProduct = await product.save();

    res
      .status(201)
      .json({
        message: "Product added",
        product: newProduct,
      });
  } catch (error) {
    throw error;
  }
}

const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updateProduct: IProduct | null = await Product.findByIdAndUpdate(
      { _id: id },
      body,
      { new: true }
    );

    res.status(200).json({
      message: "Product updated",
      product: updateProduct,
    });
  } catch (error) {
    throw error;
  }
}

export { getProducts, addProduct, updateProduct, showProduct }