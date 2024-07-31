import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrices } from '../services/api';
import { setPrices } from '../store/actions';

const PriceTable = () => {
  const dispatch = useDispatch();
  const prices = useSelector((state: any) => state.prices);
  const symbol = useSelector((state: any) => state.symbol);

  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await fetchPrices(symbol);
      dispatch(setPrices(data));
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch, symbol]);

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {prices.map((price: any) => (
          <tr key={price._id}>
            <td>{price.symbol}</td>
            <td>{price.price}</td>
            <td>{new Date(price.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PriceTable;
