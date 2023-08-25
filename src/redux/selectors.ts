import { createSelector } from "reselect";
import { RootState } from "./hooks";


const currentBookList = (state : RootState) => state.bookData.bookList;

export const filteredRatingBooks = createSelector(
    [currentBookList],
    (books) => {
        return books.filter((book) => (book.rate! > 4)).slice(0,2);
    }
  )