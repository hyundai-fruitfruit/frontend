/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-03-01 05:41:47
 * @modify date 2024-03-01 06:12:27
 * @desc 캐릭터 아이템 관리 slice
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedFoodOption: null,
  selectedBackOption: null,
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setBackground: (state, action) => {
      state.background = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
    setSelectedFoodOption: (state, action) => {
      state.selectedFoodOption = action.payload;
    },
    setSelectedBackOption: (state, action) => {
      state.selectedBackOption = action.payload;
    },
  },
});

export const { setBackground, addItem, removeItem, setSelectedFoodOption, setSelectedBackOption } = roomSlice.actions;

export default roomSlice.reducer;
