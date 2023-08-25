import {PostgrestError} from '@supabase/supabase-js';
import {Book} from '../types';
import {supabase} from './initSupabase';

type Props = {
  book: Book;
  parseBlob: (data: Blob) => void;
};

type getBooksResponse = {
  data: Book[] | null;
  error: PostgrestError | null;
};

type getBooksProps = {
  page: number;
};



export const getBookPhotoRequest = async ({book, parseBlob}: Props) => {
  try {

    const {data, error} = await supabase.storage
      .from('books')
      .download(`photos/${book.author + ' ' + book.name}.jpg`);

    
    parseBlob(data!);
    
  } catch (error) {
    console.log('error: ', error);
  }
};

export const getBooksRequest = async (params: getBooksProps) => {
  let {data, error}: getBooksResponse = await supabase.from('book').select('*');
  // .range(--params.page * 5, params.page * 5 + 5);

  if (!data) return [];

  if (error) {
    console.log(error.message);
  } else {
    return data;
  }
};
