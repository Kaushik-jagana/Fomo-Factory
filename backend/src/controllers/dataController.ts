import { Request, Response } from 'express';
import Price from '../models/Price';

export const getPrices = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    const prices = await Price.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(prices);
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
};
