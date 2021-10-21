import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;

//  Copyright 2021, Renzo Barrios, All rights reserved.
