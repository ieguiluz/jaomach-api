import { Document } from "mongoose";
import { ICurrency } from "./currency";

export interface IProduct extends Document {
  code: string;
  name: string;
  description?: string;
  price: number;
  currency: string | ICurrency;
}