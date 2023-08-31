import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {Theme} from 'src/types/theme';

const initialState: Theme = {
  theme: 'light',
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload.theme;
    },
  },
});

export const {setTheme} = appSlice.actions;
export default appSlice.reducer;
