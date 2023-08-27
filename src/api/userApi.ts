import {SignInData, SignUpData} from '../types';
import {supabase} from './initSupabase';

export const signInWithEmail = async (info: SignInData) => {
  const {data, error} = await supabase.auth.signInWithPassword({
    email: info.email,
    password: info.password,
  });

  if (error) {
    console.log(error.message);
  } else {
    return {email: data.user.email, access_token: data.session.access_token};
  }
};

export const signOut = async () => {
  const {error} = await supabase.auth.signOut();
};

export const userRegister = async (info: SignUpData) => {
  if (info.password !== info.repeatPassword) {
    return {
      error: 'Passwords are not the same. Repeat please!',
      data: {
        email: '',
        access_token: '',
      },
    };
  }

  const {data, error} = await supabase.auth.signUp({
    email: info.email,
    password: info.password,
  });

  if (error) {
    console.log(error.message);
  } else {
    return {
      error: null,
      data: {
        email: data.user?.email!,
        access_token: data.session?.access_token!,
      },
    };
  }
};
