import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IUser} from 'src/types/user';

const initialState: IUser = {
  last_name: undefined,
  first_name: undefined,
  email: undefined,
  photoUrl: undefined,
};

const userData = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload.email;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.photoUrl = action.payload.photoUrl;
    },
    setPhoto: (state, action: PayloadAction<string>) => {
      state.photoUrl = action.payload;
    },
  },
});

export default userData.reducer;
export const {setUser, setPhoto} = userData.actions;
