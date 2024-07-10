// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import packageSlice from './packageSlice';
import roomCountSlice from './roomCountSlice';

const store = configureStore({
  reducer: {
    package: packageSlice,
    roomCount : roomCountSlice
  },
});

export default store;