import { createReducer } from '@reduxjs/toolkit';
import { setPrices, setSymbol } from './actions';

interface State {
  prices: any[];
  symbol: string;
}

const initialState: State = {
  prices: [],
  symbol: 'bitcoin',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPrices, (state, action) => {
      state.prices = action.payload;
    })
    .addCase(setSymbol, (state, action) => {
      state.symbol = action.payload;
    });
});

export default reducer;
