// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import viewReducer from './viewSlice';
import cardCollectionReducer from './cardCollectionSlice';

const store = configureStore({
  reducer: {
    view: viewReducer,
    cards: cardCollectionReducer,

  },
});

export default store;
