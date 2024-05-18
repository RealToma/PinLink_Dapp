// src/store/viewSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const initialState = {
  view: 'grid', // default view
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    toggleView: (state,action) => {
      state.view = action.payload;
    },
  },
});

export const { toggleView } = viewSlice.actions;

export default viewSlice.reducer;
