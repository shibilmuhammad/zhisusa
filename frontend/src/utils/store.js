// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import packageSlice from './packageSlice';
import roomCountSlice from './roomCountSlice';
import activityDetailsSlice from './activityDetailsSlice';

const store = configureStore({
  reducer: {
    package: packageSlice,
    roomCount : roomCountSlice,
    activities : activityDetailsSlice
  },
});

export default store;