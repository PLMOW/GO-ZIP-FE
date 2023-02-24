import { configureStore } from '@reduxjs/toolkit';
import themeToggleReducer from './modules/themeToggle';

const store = configureStore({
  reducer: { themeToggleReducer },
});

export default store;
