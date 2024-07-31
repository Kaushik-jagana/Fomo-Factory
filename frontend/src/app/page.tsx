import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import SymbolSelector from './components/SymbolSelector';
import PriceTable from './components/PriceTable';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Real-Time Price Tracker</h1>
        <SymbolSelector />
        <PriceTable />
      </div>
    </Provider>
  );
};

export default App;
