import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {Theme} from 'src/types/theme';
import crashlytics from '@react-native-firebase/crashlytics';

type InitialState = {
  theme: 'light' | 'dark';
  deviceToken: string;
};

const initialState: InitialState = {
  theme: 'light',
  deviceToken: '',
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      crashlytics().log('User changed theme');
      state.theme = action.payload.theme;
    },
    setToken(state, action: PayloadAction<string>) {
      crashlytics().log('User setted token');
      state.deviceToken = action.payload;
    },
  },
});

export const {setTheme, setToken} = appSlice.actions;
export default appSlice.reducer;
