import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import authReducer from './features/AuthSlice';

export const store = configureStore({
  reducer: {
    authReducer,
  },
});

export const useAppSelector = useSelector;
