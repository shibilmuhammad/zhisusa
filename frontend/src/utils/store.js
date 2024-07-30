// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import packageSlice from './packageSlice';
import roomCountSlice from './roomCountSlice';
import activityDetailsSlice from './activityDetailsSlice';
import categoriesDataSlice from './categoriesDataSlice';
import amenitiesAdminSlice from './amenitiesAdminSlice';
import zhisusaEventsSlice from './zhisusaEventsSlice';

const store = configureStore({
  reducer: {
    package: packageSlice,
    roomCount : roomCountSlice,
    activities : activityDetailsSlice,
    adminCategories : categoriesDataSlice,
    amenitiesAdmin : amenitiesAdminSlice,
    zhisusaEvents : zhisusaEventsSlice
  },
});

export default store;