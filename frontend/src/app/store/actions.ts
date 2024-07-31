import { createAction } from '@reduxjs/toolkit';

export const setPrices = createAction<any[]>('SET_PRICES');
export const setSymbol = createAction<string>('SET_SYMBOL');
