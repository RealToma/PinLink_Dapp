import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  view: 'grid', 
  searchState: 'all', 
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    toggleView: (state,action) => {
      state.view = action.payload;
    },
    toggleSearchState: (state,action) => {
      state.searchState = action.payload;
    },
  },
});

export const { toggleView,toggleSearchState } = viewSlice.actions;

export default viewSlice.reducer;
