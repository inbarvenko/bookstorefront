import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IUser} from 'src/types/user';

const initialState: IUser = {
  username: null,
  email: undefined,
  access_token: '',
  photoUrl: undefined,
};

const userData = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload.email;
      state.access_token = action.payload.access_token;
    },
    setPhoto: (state, action: PayloadAction<string>) => {
      state.photoUrl = action.payload;
    },
  },
});

export default userData.reducer;
export const {setUser, setPhoto} = userData.actions;
