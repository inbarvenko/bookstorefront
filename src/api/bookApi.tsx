import {PostgrestError} from '@supabase/supabase-js';
import {Book} from '../types';
import {supabase} from './initSupabase';

type Props = {
  name: string;
  author: string;
};

type getBooksResponse = {
  data: Book[] | null;
  error: PostgrestError | null;
};

type getBooksProps = {
  page: number;
};

export const getBookPhoto = async (book: Props) => {
  const {data, error} = await supabase.storage.from('books').list('/', {
    search: book.author + ' ' + book.name,
  });

  console.log('photo', data);

  if (error) {
    console.log(error.message);
  } else {
    return data;
  }
};

export const getBooksRequest = async (params: getBooksProps) => {
  let {data, error}: getBooksResponse = await supabase
    .from('book')
    .select('*');
    // .range(--params.page * 5, params.page * 5 + 5);

  console.log('data', data);
  if (!data) return [];

  if (error) {
    console.log(error.message);
  } else {
    return data;
  }
};
