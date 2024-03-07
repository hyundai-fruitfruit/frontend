import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/AuthSlice';
import roomReducer from './features/RoomSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
  },
});
