import {PostgrestError} from '@supabase/supabase-js';
import {Book} from '../types';
import {supabase} from './initSupabase';

type GetBooksResponse = {
  data: Book[] | null;
  error: PostgrestError | null;
};

type GetBooksProps = {
  page: number;
};

type GetPhotoProps = {
  author: string;
  name: string;
  id: string;
};

export const getBooksRequest = async (params: GetBooksProps) => {
  let {data, error}: GetBooksResponse = await supabase.from('book').select('*');
  // .range(--params.page * 6, params.page * 6 + 6);

  if (!data) return [];

  data.forEach((book) => {
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
