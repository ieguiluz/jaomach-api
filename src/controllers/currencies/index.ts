import { Response, Request } from "express";
import { ICurrency } from "./../../types/currency";
import Currency from "./../../models/currency";

const getCurrencies = async (req: Request, res: Response): Promise <void> => {
  try {
    const currencies: ICurrency[] = await Currency.find();
    res.status(200).json({ currencies });
  } catch (error) {
    throw error;
  }
}

export { getCurrencies };