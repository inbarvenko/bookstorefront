import {configureStore} from '@reduxjs/toolkit';
import userReducer from 'src/redux/slices/userReducer';
import booksReducer from 'src/redux/slices/booksReducer';
import appReducer from './slices/appReducer';

const store = configureStore({
  reducer: {
    userData: userReducer,
    bookData: booksReducer,
    appData: appReducer,
  },
});

export default store;
