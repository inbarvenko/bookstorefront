import {SignInData, SignUpData} from 'src/types/auth';
import {supabase} from './supabase';

export const signInWithEmail = async (info: SignInData) => {
  const {data, error} = await supabase.auth.signInWithPassword({
    email: info.emailIn,
    password: info.passwordIn,
  });

  // await supabase.auth.setSession(data.session!);

  // setAsyncStorageItem('session', {
  //   access_token: data.session!.access_token,
  //   refresh_token: data.session!.refresh_token,
  // });
  if (!data.user) {
    return {
      userInfo: null,
      error: error?.message,
    };
  }

  const {data: profile, error: profileError} = await supabase
    .from('profile')
    .select('*')
    .eq('id', data.user!.id);

  if (error) {
    return {
      userInfo: null,
      error: error?.message,
    };
  }

  if (profileError) {
    return {
      userInfo: null,
      error: profileError?.message,
    };
  }

  return {
    userInfo: {
      email: data.user.email,
      last_name: profile[0].last_name,
      first_name: profile[0].first_name,
      photoUrl: profile[0].photoUrl,
    },
    error: null,
  };
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

  // await supabase.auth.setSession(data.session!);
  // setAsyncStorageItem('session', {
  //   access_token: data.session!.access_token,
  //   refresh_token: data.session!.refresh_token,
  // });

  if (error) {
    return {email: null, error};
  } else {
    return {
      email: data.user?.email!,
      error: null,
    };
  }
};

export const sentUserPhoto = async (url: string) => {
  const {data, error} = await supabase.from('profile').update({photoUrl: url});

  if (error) {
    throw error;
  } else {
    return data;
  }
};
