import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Book} from 'src/types/book';
import {Comment} from 'src/types/comment';

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
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload!);
    },
    setCommets: (state, action: PayloadAction<Comment[]>) => {
      if (!action.payload) {
        state.comments = [];
      }
      state.comments = action.payload || [];
    },
  },
});

export default bookData.reducer;
export const {setBooks, getBookById, addComment, setCommets} = bookData.actions;
