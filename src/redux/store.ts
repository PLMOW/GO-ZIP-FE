import { configureStore } from '@reduxjs/toolkit';
import themeToggle from './modules/themeToggle';
import carousel from './modules/carousel';

const store = configureStore({
  reducer: { themeToggle, carousel },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
