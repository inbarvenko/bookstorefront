import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Book} from '../types';
import { getBooksRequest } from '../api/bookApi';

type InitialState = {
  bookList: Book[];
};

const initialState: InitialState = {
  bookList: [],
};

export const getAllBooks = createAsyncThunk('todos/getTodos', getBooksRequest);

const bookData = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.bookList = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
        console.log(action.payload)
      if (!action.payload) {
        state.bookList = []
      }
      state.bookList = action.payload || [];
    });
    builder.addCase(getAllBooks.rejected, (state, action) => {
      console.log(`Error! Unable to get todos!`);
    });
  },
});

export default bookData.reducer;
export const {setBooks} = bookData.actions;
