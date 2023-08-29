import {configureStore} from '@reduxjs/toolkit';
import userReducer from 'src/redux/slices/userReducer';
import booksReducer from 'src/redux/slices/booksReducer';

const store = configureStore({
  reducer: {
    userData: userReducer,
    bookData: booksReducer,
  },
});

export default store;
