/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-03-07 09:23:06
 * @modify date 2024-03-07 09:56:46
 * @desc 레벨, 경험치 redux slice
 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  experience: 0,
  level: 1,
  levelUp: false,
};

export const levelSlice = createSlice({
  name: 'exp',
  initialState,
  reducers: {
    addExperience: (state, action) => {
      state.experience += action.payload;
      if (state.experience >= 100) {
        state.experience -= 100;
        state.level++;
        state.levelUp = true;
        console.log(state.level);
      }
    },
    resetLevelUp: (state) => {
      state.levelUp = false;
    },
    levelUp: (state) => {
      state.level++;
      state.experience = 0;
    },
  },
});

export const { addExperience, resetLevelUp, levelUp } = levelSlice.actions;

export default levelSlice.reducer;
