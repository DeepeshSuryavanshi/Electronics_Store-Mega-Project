import React from 'react';
import RootNavigator from './components/RootNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './storage/RootReducer';
var  store = createStore(RootReducer)

function App(){
 

  return (
    <Provider store={store}>
      <RootNavigator/>
    </Provider>
  );
}

export default App;
