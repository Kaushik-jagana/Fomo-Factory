import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSymbol } from '../store/actions';

const SymbolSelector = () => {
  const dispatch = useDispatch();
  const symbol = useSelector((state: any) => state.symbol);

  const handleSymbolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSymbol(e.target.value));
  };

  return (
    <select value={symbol} onChange={handleSymbolChange}>
      <option value="bitcoin">Bitcoin</option>
      <option value="ethereum">Ethereum</option>
      <option value="litecoin">Litecoin</option>
      <option value="ripple">Ripple</option>
      <option value="bitcoin-cash">Bitcoin Cash</option>
    </select>
  );
};

export default SymbolSelector;
