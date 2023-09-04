import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Book} from 'src/types/book';
import {Comment} from 'src/types/comment';
import crashlytics from '@react-native-firebase/crashlytics';

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
      crashlytics().log('Books are set');
    },
    setOneBook: (state, action: PayloadAction<Book>) => {
      state.book = action.payload;
      crashlytics().log('Book is set');
    },
    getBookById: (state, action: PayloadAction<string>) => {
      state.book = state.bookList.filter(t => t.id === action.payload)[0];
      crashlytics().log('Book is set');
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload!);
      crashlytics().log('Comment is added');
    },
    setCommets: (state, action: PayloadAction<Comment[]>) => {
      if (!action.payload) {
        state.comments = [];
      }
      state.comments = action.payload || [];
      crashlytics().log('Comment are set');
    },
  },
});

export default bookData.reducer;
export const {setBooks, setOneBook, getBookById, addComment, setCommets} =
  bookData.actions;
