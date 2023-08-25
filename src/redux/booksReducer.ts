import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Book} from '../types';
import {getBookPhotoRequest, getBooksRequest} from '../api/bookApi';

type InitialState = {
  bookList: Book[];
  book: Book;
};

const initialState: InitialState = {
  bookList: [],
  book: {
    id: '',
    author: '',
    description: '',
    name: '',
  },
};

export const getAllBooks = createAsyncThunk('books/getTodos', getBooksRequest);

const bookData = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.bookList = action.payload;
    },
    getBookById: (state, action: PayloadAction<string>) => {
      state.book = state.bookList.filter(t => t.id === action.payload)[0];
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      if (!action.payload) {
        state.bookList = [];
      }
      state.bookList = action.payload || [];
    });
    builder.addCase(getAllBooks.rejected, (state, action) => {
      console.log(`Error! Unable to get books!`);
    });
  },
});

export default bookData.reducer;
export const {setBooks, getBookById} = bookData.actions;
