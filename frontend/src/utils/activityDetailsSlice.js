import { createSlice } from '@reduxjs/toolkit';
import { packageSelected } from './personalize';

const activityDetailsSlice = createSlice({
  name: 'rooms',
  initialState : {
    activities: [
      { id: 1, name: 'Hiking', count: 2, type: 'day', days: 0, hours: 0 },
      { id: 2, name: 'Swimming', count: 3, type: 'day', days: 0, hours: 0 },
    ],
  },
  reducers: {
    addActivity: (state, action) => {
      const newActivity = {
        id: state.activities.length > 0 ? state.activities[state.activities.length - 1].id + 1 : 1,
        name: action.payload.name,
        count: 0,
        type: 'day',
        days: 0,
        hours: 0,
      };
      state.activities.push(newActivity);
    },
    removeActivity: (state, action) => {
      state.activities = state.activities.filter(activity => activity.id !== action.payload.id);
    },
    incrementCount: (state, action) => {
      const activity = state.activities.find(activity => activity.id === action.payload.id);
      if (activity) {
        activity.count += 1;
      }
    },
    decrementCount: (state, action) => {
      const activity = state.activities.find(activity => activity.id === action.payload.id);
      if (activity && activity.count > 0) {
        activity.count -= 1;
      }
    },
    switchType: (state, action) => {
      const activity = state.activities.find(activity => activity.id === action.payload.id);
      if (activity) {
        activity.type = action.payload.type;
      }
    },
    incrementDayOrHour: (state, action) => {
      const activity = state.activities.find(activity => activity.id === action.payload.id);
      if (activity) {
        if (activity.type === 'day') {
          activity.days += 1;
        } else {
          activity.hours += 1;
        }
      }
    },
    decrementDayOrHour: (state, action) => {
      const activity = state.activities.find(activity => activity.id === action.payload.id);
      if (activity) {
        if (activity.type === 'day' && activity.days > 0) {
          activity.days -= 1;
        } else if (activity.type === 'hour' && activity.hours > 0) {
          activity.hours -= 1;
        }
      }
    },
  },
});

export const { incrementCount,
  decrementCount,
  switchType,
  incrementDayOrHour,
  decrementDayOrHour,addActivity,removeActivity } = activityDetailsSlice.actions;

export default activityDetailsSlice.reducer;