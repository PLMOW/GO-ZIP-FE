import { configureStore } from '@reduxjs/toolkit';
import themeToggle from './modules/themeToggle';

const store = configureStore({
  reducer: { themeToggle },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
