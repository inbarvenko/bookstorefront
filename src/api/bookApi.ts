import {PostgrestError} from '@supabase/supabase-js';
import {Book, Comment} from '../types';
import {supabase} from './supabase';

type GetBooksResponse = {
  data: Book[] | null;
  error: PostgrestError | null;
};

type GetCommentsResponse = {
  data: Comment[] | null;
  error: PostgrestError | null;
};

type GetBooksProps = {
  page: number;
};

type newCommentProps = {
  commentText: string;
  bookId: string;
  authorToken: string;
};

export const getBooksRequest = async (params: GetBooksProps) => {
  let {data, error}: GetBooksResponse = await supabase
    .from('book')
    .select('*')
    .range(--params.page * 6, params.page * 6 + 6);

  if (!data) {
    return [];
  }

  data.forEach(book => {
    const {data: url} = supabase.storage
      .from('books')
      .getPublicUrl(`photos/${book.author + ' ' + book.name}.jpg`);

    book.photoUrl = url.publicUrl;
  });

  if (error) {
    console.log(error.message);
  } else {
    return data;
  }
};

export const getCommentsRequest = async (bookId: string) => {
  let {data, error}: GetCommentsResponse = await supabase
    .from('comments')
    .select('*, author:profile(last_name, first_name)')
    .eq('book', bookId);

  if (error) {
    console.log(error.message);
  } else {
    return data;
  }
};

export const sendCommentRequest = async ({
  commentText,
  bookId,
  authorToken,
}: newCommentProps) => {
  const authorId = (await supabase.auth.getUser(authorToken)).data.user?.id;

  const {data, error} = await supabase
    .from('comments')
    .insert([{author: authorId, book: bookId, comment_text: commentText}]);

  if (error) {
    console.log(error.message);
  } else {
    console.log(data);
  }
};
