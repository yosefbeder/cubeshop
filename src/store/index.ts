import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import bagReducer from './bag';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    bag: bagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
