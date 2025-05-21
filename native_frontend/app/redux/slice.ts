// hooks.ts - Create custom hooks for TypeScript support
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use these hooks instead of plain useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// slices/userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the state types
export interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  activeCategory: string | null;
  bottomTab: string | null;
  catoLogueMode: boolean;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  activeCategory: null,
  bottomTab: null,
  catoLogueMode: false,

  isLoggedIn: false,
  loading: false,
  error: null,
};



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<string>) => {

      state.name = action.payload;

    },
    setactiveCategory: (state, action: PayloadAction<string>) => {

      state.activeCategory = action.payload;

    },
    activeBottomTab: (state, action: PayloadAction<string>) => {
      state.bottomTab = action.payload;
    },

    logout: (state) => {
      // Reset to initial state on logout
      return initialState;
    },

    setCatoulogueMode: (state) => {
      state.catoLogueMode = !state.catoLogueMode;
    },
  },

});

export const { setUserData, logout, setactiveCategory , setCatoulogueMode , activeBottomTab } = userSlice.actions;
export default userSlice.reducer;