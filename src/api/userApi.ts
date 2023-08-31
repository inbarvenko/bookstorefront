import {SignInData, SignUpData} from 'src/types/auth';
import {supabase} from './supabase';
import {setAsyncStorageItem} from 'src/utils/asyncStorage';

export const signInWithEmail = async (info: SignInData) => {
  const {data, error} = await supabase.auth.signInWithPassword({
    email: info.emailIn,
    password: info.passwordIn,
  });

  await supabase.auth.setSession(data.session!);

  setAsyncStorageItem('session', {
    access_token: data.session!.access_token,
    refresh_token: data.session!.refresh_token,
  });

  const {data: profile, error: profileError} = await supabase
    .from('profile')
    .select('*')
    .eq('id', data.user!.id);

  if (error || profileError) {
    throw error?.message || profileError?.message;
  } else {
    return {
      email: data.user.email,
      last_name: profile[0].last_name,
      first_name: profile[0].first_name,
      photoUrl: profile[0].photoUrl,
    };
  }
};

export const signOut = async () => {
  const {error} = await supabase.auth.signOut();

  throw error;
};

export const userRegister = async (info: SignUpData) => {
  const {data, error} = await supabase.auth.signUp({
    email: info.email,
    password: info.password,
  });

  await supabase.auth.setSession(data.session!);
  setAsyncStorageItem('session', {
    access_token: data.session!.access_token,
    refresh_token: data.session!.refresh_token,
  });

  if (error) {
    console.log('message: ', error.message, 'status: ', error.status);
    throw error;
  } else {
    return {
      email: data.user?.email!,
    };
  }
};

export const sentUserPhoto = async (url: string) => {
  const {data, error} = await supabase.from('profile').update({photoUrl: url});

  if (error) {
    throw error;
  } else {
    // console.log(photo);
    return data;
  }
};
