import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import RootStack from './navigation/Navigation';


function App(): JSX.Element {
  
  return (
    <Provider store={store}>
      <RootStack/>
    </Provider>
  );
}

export default App;