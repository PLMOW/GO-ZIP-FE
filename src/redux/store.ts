import { configureStore } from '@reduxjs/toolkit';
import themeToggle from './modules/themeToggle';
import carousel from './modules/carousel';
import isLogin from './modules/isLogin';

const store = configureStore({
  reducer: { themeToggle, carousel, isLogin },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
