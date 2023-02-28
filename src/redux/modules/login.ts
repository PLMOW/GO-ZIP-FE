import { createSlice } from '@reduxjs/toolkit';

export interface userDataState {
  nickname: string;
  email: string;
}

export interface loginState {
  isLogin: boolean;
  userData: undefined | userDataState;
}

const loginSlicer = createSlice({
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

export default loginSlicer.reducer;
export const { login, logout } = loginSlicer.actions;
