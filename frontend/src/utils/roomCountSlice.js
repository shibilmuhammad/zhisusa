import { createSlice } from '@reduxjs/toolkit';
import { packageSelected } from './personalize';

const roomCountSlice = createSlice({
  name: 'rooms',
  initialState : {
    rooms: [
        { id: 1, name: 'Room 1', adults: 0, children: 0 }
      ]
  },
  reducers: {
    addRoom: (state) => {
      const newRoomId = state.rooms.length > 0 ? state.rooms[state.rooms.length - 1].id + 1 : 1;
      state.rooms.push({ id: newRoomId, name: `Room ${newRoomId}`, adults: 0, children: 0 });
    },
    removeRoom: (state, action) => {
        state.rooms = state.rooms.filter(room => room.id !== action.payload.id);
      },
    incrementAdults: (state, action) => {
      const room = state.rooms.find(room => room.id === action.payload.id);
      if (room) {
        room.adults += 1;
      }
    },
    decrementAdults: (state, action) => {
      const room = state.rooms.find(room => room.id === action.payload.id);
      if (room && room.adults > 0) {
        room.adults -= 1;
      }
    },
    incrementChildren: (state, action) => {
      const room = state.rooms.find(room => room.id === action.payload.id);
      if (room) {
        room.children += 1;
      }
    },
    decrementChildren: (state, action) => {
      const room = state.rooms.find(room => room.id === action.payload.id);
      if (room && room.children > 0) {
        room.children -= 1;
      }
    },
  },
});

export const { addRoom, removeRoom, incrementAdults, decrementAdults, incrementChildren, decrementChildren } = roomCountSlice.actions;

export default roomCountSlice.reducer;