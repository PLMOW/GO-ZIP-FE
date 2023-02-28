import { configureStore } from '@reduxjs/toolkit';
import themeToggle from './modules/themeToggle';
import carousel from './modules/carousel';
import login from './modules/login';

const store = configureStore({
  reducer: { themeToggle, carousel, login },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
