import { createSlice } from '@reduxjs/toolkit';
import { packageSelected } from './personalize';

const categoresSlice = createSlice({
  name: 'adminCategories',
  initialState : {
    categories: []
  },
  reducers: {
    addToCategories:(state,action)=>{
        state.categories = action.payload
    }
  },
});

export const { addToCategories } = categoresSlice.actions;

export default categoresSlice.reducer;