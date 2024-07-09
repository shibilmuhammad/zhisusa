import { createSlice } from '@reduxjs/toolkit';
import { packageSelected } from './personalize';

const packageSlice = createSlice({
  name: 'package',
  initialState : {
    data: packageSelected
  },
  reducers: {
    incrementCount: (state, action) => {
      const pkg = state?.data?.find(pkg => pkg.name === action.payload.name);
      if (pkg) {
        pkg.count += 1;
      }
    },
    decrementCount: (state, action) => {
      const pkg = state?.data?.find(pkg => pkg.name === action.payload.name);
      if (pkg && pkg.count > 0) {
        pkg.count -= 1;
      }
    },
    resetCount: (state, action) => {
      const pkg = state?.data?.find(pkg => pkg.name === action.payload.name);
      if (pkg) {
        pkg.count = 0;
      }
    },
  },
});

export const { incrementCount,decrementCount,resetCount } = packageSlice.actions;

export default packageSlice.reducer;