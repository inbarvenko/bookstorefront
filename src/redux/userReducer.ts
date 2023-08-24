import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../types';

const initialState: IUser = {
  username: null,
  email: undefined,
  access_token: '',
};

const userData = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.access_token = action.payload.access_token;
    },
    removeUser: (state) => {
        state = initialState;
      },
  },
});

export default userData.reducer;
export const {setUser, removeUser} = userData.actions;
