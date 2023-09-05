import {PostgrestError} from '@supabase/supabase-js';
import {Book} from 'src/types/book';
import {supabase} from './supabase';
import {Comment} from 'src/types/comment';
import {getAsyncStorageItem} from 'src/utils/asyncStorage';
import crashlytics from '@react-native-firebase/crashlytics';

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

type GetOneBookProps = {
  bookId: string;
};

type newCommentProps = {
  commentText: string;
  bookId: string;
};

export const getBooksRequest = async (params: GetBooksProps) => {
  let {data, error}: GetBooksResponse = await supabase
    .from('book')
    .select('*')
    .range(--params.page * 6, params.page * 6 + 6);

  data!.forEach(book => {
    const {data: url} = supabase.storage
      .from('books')
      .getPublicUrl(`photos/${book.author + ' ' + book.name}.jpg`);

    book.photoUrl = url.publicUrl;
  });

  if (error) {
    crashlytics().log('User cannot got books.');
    throw crashlytics().recordError(Error(error.message));
  } else {
    crashlytics().log('User got books.');
    return data;
  }
};

export const getOneBookRequest = async (params: GetOneBookProps) => {
  let {data, error}: GetBooksResponse = await supabase
    .from('book')
    .select('*')
    .eq('id', params.bookId);

  const {data: url} = supabase.storage
    .from('books')
    .getPublicUrl(`photos/${data![0]!.author + ' ' + data![0].name}.jpg`);

  data![0].photoUrl = url.publicUrl;

  if (error) {
    crashlytics().log('User cannot get one book.');
    throw crashlytics().recordError(Error(error.message));
  } else {
    crashlytics().log('User got one book.');
    return data![0];
  }
};

export const getCommentsRequest = async (bookId: string) => {
  let {data, error}: GetCommentsResponse = await supabase
    .from('comments')
    .select('*, author:profile(last_name, first_name)')
    .eq('book', bookId);

  if (error) {
    crashlytics().log('User cannot get comments.');
    throw crashlytics().recordError(Error(error.message));
  } else {
    crashlytics().log('User got comments.');
    return data;
  }
};

export const sendCommentRequest = async ({
  commentText,
  bookId,
}: newCommentProps) => {
  const authorToken = await getAsyncStorageItem('session');
  const getUser = await supabase.auth.getUser(authorToken);

  const authorId = getUser.data.user?.id;

  const {data, error} = await supabase
    .from('comments')
    .insert([{author: authorId, book: bookId, comment_text: commentText}]);

  if (error) {
    crashlytics().log('User cannot sent comment.');
    throw Error(error.message);
  } else {
    crashlytics().log('User sent comment.');
    return data;
  }
};
