// src/store/store.js
import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import viewReducer from './viewSlice';
import cardCollectionReducer from './cardCollectionSlice';
import { localStorageMiddleware } from '@middleware/localStorageMiddleware';
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('viewState');
    console.log('serializedState', serializedState)
    if (serializedState === null) {
      return undefined;
    }
    return { view: JSON.parse(serializedState) };
  } catch (e) {
    console.warn('Failed to load state from localStorage', e);
    return undefined;
  }
};
const preloadedState = loadState();

const rootReducer = combineReducers({
  view: viewReducer,
  cards: cardCollectionReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState,
});

export default store;
