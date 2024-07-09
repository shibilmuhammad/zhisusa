// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import packageSlice from './packageSlice';

const store = configureStore({
  reducer: {
    package: packageSlice,
  },
});

export default store;