import { createSlice } from '@reduxjs/toolkit';

const zhisusaEventsSlice = createSlice({
  name: 'zhisusaEvents',
  initialState : {
    zhisusaEvents: []
  },
  reducers: {
    addToEvents:(state,action)=>{
        state.zhisusaEvents = action.payload
    }
  },
});

export const { addToEvents } = zhisusaEventsSlice.actions;

export default zhisusaEventsSlice.reducer;