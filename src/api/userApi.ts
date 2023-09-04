import {SignInData, SignUpData} from 'src/types/auth';
import {supabase} from './supabase';
import crashlytics from '@react-native-firebase/crashlytics';

export const signInWithEmail = async (info: SignInData) => {
  const {data, error} = await supabase.auth.signInWithPassword({
    email: info.emailIn,
    password: info.passwordIn,
  });

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
    crashlytics().log('User cannot sign in.');
    crashlytics().recordError(Error(error?.message));

    return {
      userInfo: null,
      error: error?.message,
    };
  }

  if (profileError) {
    crashlytics().log('User cannot sign in.');
    crashlytics().recordError(Error(profileError?.message));
    return {
      userInfo: null,
      error: profileError?.message,
    };
  }

  crashlytics().log('User signed in.');

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

  if (error) {
    crashlytics().log('User cannot sign out.');
    throw crashlytics().recordError(Error(error?.message));
  }
  crashlytics().log('User signed out.');
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
    crashlytics().log('User cannot sign up.');
    crashlytics().recordError(Error(error?.message));
    return {email: null, error};
  } else {
    crashlytics().log('User signed up.');
    return {
      email: data.user?.email!,
      error: null,
    };
  }
};

export const sentUserPhoto = async (url: string) => {
  const {data, error} = await supabase.from('profile').update({photoUrl: url});
  crashlytics().log('User sent photo.');

  if (error) {
    throw error;
  } else {
    return data;
  }
};
