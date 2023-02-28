import { createSlice } from '@reduxjs/toolkit';

export interface userDataState {
  nickname: string;
  email: string;
}

export interface isLoginState {
  isLogin: boolean;
  userData: undefined | userDataState;
}

const isLoginSlicer = createSlice({
  name: 'isLoginSlicer',
  initialState: { isLogin: false, userData: undefined },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.userData = undefined;
    },
  },
});

export default isLoginSlicer.reducer;
export const { login, logout } = isLoginSlicer.actions;
