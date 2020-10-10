import React from 'react';
import Rotas from './rotas';
import {Provider} from 'react-redux';

import Store from './store';

export default function App() {
  return (
    <Provider store={Store}>
      <Rotas></Rotas>
    </Provider>
  );
}
