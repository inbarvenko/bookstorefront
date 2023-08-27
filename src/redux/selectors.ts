import {createSelector} from 'reselect';
import {RootState} from './hooks';

const currentBookList = (state: RootState) => state.bookData.bookList;

export const filteredRatingBooks = createSelector([currentBookList], books => {
  const num = Math.random();

  books = books.filter(book => book.rate! > 4);
  
  return [
    books[Math.floor(num * (books.length - 1))],
    books[Math.floor(num * books.length)],
  ];
});
