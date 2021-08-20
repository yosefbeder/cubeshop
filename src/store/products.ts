import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface ProductType {
  id: string;
  imgSrc: string;
  name: string;
  price: number;
  available: number;
}

const initialState: {
  http: {
    isLoading: boolean;
    hasError: boolean;
  };
  data: null | ProductType[];
} = {
  http: {
    isLoading: true,
    hasError: false,
  },
  data: null,
};

const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async (): ProductType[] => {},
);

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.http.isLoading = true;
      state.http.hasError = false;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.http.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, state => {
      state.http.isLoading = false;
      state.http.hasError = true;
    });
  },
});

export default slice.reducer;
export const actions = slice.actions;
