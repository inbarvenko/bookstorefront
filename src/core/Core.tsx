import React from 'react';
import RootStack from 'src/navigation/Navigation';
import store from 'src/redux/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}

export default App;
