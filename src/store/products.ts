import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../api/commerce';
import { ProductType, StatusType } from '../types';

const initialState: {
  status: StatusType;
  data: null | ProductType[];
} = {
  status: 'loading',
  data: null,
};

export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async () => await getAllProducts(),
);

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, state => {
      state.status = 'failed';
      state.data = null;
    });
  },
});

export default slice.reducer;
export const actions = slice.actions;
