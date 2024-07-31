import axios from 'axios';

export const fetchPrices = async (symbol: string) => {
  const response = await axios.get(`/api/prices/${symbol}`);
  return response.data;
};
