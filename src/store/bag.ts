import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBag } from '../api/commerce';
import { BagItemType, BagType, ProductType } from '../types';

const initialState: {
  http: {
    isLoading: boolean;
    hasError: boolean;
  };
  data: null | BagType;
} = {
  http: {
    isLoading: true,
    hasError: false,
  },
  data: null,
};

const fetchBag = createAsyncThunk(
  'fetchBag',
  async (products: ProductType[]) => await getBag(products),
);

const slice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addToBag(state, action: PayloadAction<BagItemType>) {
      state.data!.items.push(action.payload);
    },
    removeFromBag(state, action: PayloadAction<string>) {
      const i = state.data!.items.findIndex(item => item.id === action.payload);

      state.data!.items.splice(i, 1);
    },
    changeQuantity(
      state,
      action: PayloadAction<{ id: string; change: number }>,
    ) {
      const i = state.data!.items.findIndex(
        item => item.id === action.payload.id,
      );

      state.data!.items[i].quantity += action.payload.change;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBag.pending, state => {
      state.http.isLoading = true;
      state.http.hasError = false;
    });
    builder.addCase(fetchBag.fulfilled, (state, action) => {
      state.http.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBag.rejected, state => {
      state.http.isLoading = false;
      state.http.hasError = true;
    });
  },
});

export default slice.reducer;
export const actions = slice.actions;
