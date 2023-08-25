import { createSelector } from "reselect";
import { RootState } from "./hooks";


const currentBookList = (state : RootState) => state.bookData.bookList;

export const filteredRatingBooks = createSelector(
    [currentBookList],
    (books) => {
        console.log(Math.random())
        console.log(Math.random())

        console.log(Math.random())

        books.filter((book) => (book.rate! > 4));
        return [books[Math.floor(Math.random() * (books.length - 1))], books[Math.floor(Math.random() * books.length)]];
        
    }
  )