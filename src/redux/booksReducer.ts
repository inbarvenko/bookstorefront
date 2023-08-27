import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Book, Comment} from '../types';
import {getBooksRequest, getCommentsRequest} from '../api/bookApi';

type InitialState = {
  bookList: Book[];
  book: Book;
  comments: Comment[];
};

const initialState: InitialState = {
  bookList: [],
  comments: [],
  book: {
    id: '',
    author: '',
    description: '',
    name: '',
    photoUrl: '',
  },
};

export const getAllBooks = createAsyncThunk(
  'books/getAllBooks',
  getBooksRequest,
);

export const getComments = createAsyncThunk(
  'books/getComments',
  getCommentsRequest,
);

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
    builder.addCase(getComments.fulfilled, (state, action) => {
      if (!action.payload) {
        state.comments = [];
      }
      state.comments = action.payload || [];
    });
    builder.addCase(getComments.rejected, (state, action) => {
      console.log(`Error! Unable to get comments!`);
    });
  },
});

export default bookData.reducer;
export const {setBooks, getBookById} = bookData.actions;
