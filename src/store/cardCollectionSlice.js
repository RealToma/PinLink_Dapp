// src/store/cardsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};

const cardCollectionSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      if(state.cards.some(card => card.id === action.payload.id)) return;
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      if(!state.cards.some(card => card.id === action.payload)) 
        {
          alert("Card not found")
        }
      state.cards = state.cards.filter(card => card.id !== action.payload);
    },
  },
});

export const { addCard, removeCard } = cardCollectionSlice.actions;

export default cardCollectionSlice.reducer;
