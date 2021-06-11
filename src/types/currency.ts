import { Document } from "mongoose";

export interface ICurrency extends Document {
  name: string;
  symbol: string;
}