import axios from 'axios';
import Price, { IPrice } from '../models/Price';

const fetchData = async (symbol: string) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
  const price = response.data[symbol].usd;
  const priceData = new Price({ symbol, price });
  await priceData.save();
};

export const pollData = async () => {
  const symbols = ['bitcoin', 'ethereum', 'litecoin', 'ripple', 'bitcoin-cash'];
  symbols.forEach((symbol) => {
    fetchData(symbol);
  });
};
