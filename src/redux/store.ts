import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import booksReducer from './booksReducer';


const store = configureStore({
  reducer: {
    userData: userReducer,
    bookData: booksReducer,
  },
});

export default store;