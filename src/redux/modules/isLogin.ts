import { createSlice } from '@reduxjs/toolkit';

const isLoginSlicer = createSlice({
  name: 'isLoginSlicer',
  initialState: false,
  reducers: {
    login: (state) => true,
    logout: (state) => false,
  },
});

export default isLoginSlicer.reducer;
export const { login, logout } = isLoginSlicer.actions;
