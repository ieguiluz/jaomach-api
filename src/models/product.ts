import { IProduct } from "./../types/product";
import { model, Schema } from "mongoose";

const ProductSchema: Schema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: Schema.Types.ObjectId, ref: 'Currency',
      required: true,
    },
  }
);

export default model<IProduct>("Product", ProductSchema);