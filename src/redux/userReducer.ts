import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../types';

const initialState: IUser = {
  username: null,
  email: null,
};

const userData = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
    removeUser: (state) => {
        state.email = null;
        state.username= null;
      },
  },
});

export default userData.reducer;
export const {setUser, removeUser} = userData.actions;
