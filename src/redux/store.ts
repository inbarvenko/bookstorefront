import {configureStore} from '@reduxjs/toolkit';
import userReducer from '@/redux/slices/userReducer';
import booksReducer from '@/redux/slices/booksReducer';

const store = configureStore({
  reducer: {
    userData: userReducer,
    bookData: booksReducer,
  },
});

export default store;
