import { ICurrency } from "./../types/currency";
import { model, Schema } from "mongoose";

const currencySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
  }
);

export default model<ICurrency>("Currency", currencySchema);