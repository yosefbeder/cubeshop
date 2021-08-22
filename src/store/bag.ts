import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBag } from '../api/commerce';
import { BagItemType, BagType, ProductType, StatusType } from '../types';

const initialState: {
  status: StatusType;
  isDisabled: boolean;
  data: null | BagType;
} = {
  status: 'loading',
  isDisabled: false,
  data: null,
};

export const fetchBag = createAsyncThunk(
  'fetchBag',
  async (products: ProductType[]) => await getBag(products),
);

const slice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    add(state, action: PayloadAction<BagItemType>) {
      state.data!.items.push(action.payload);
      state.data!.subtotal += action.payload.price;
    },
    remove(state, action: PayloadAction<string>) {
      const i = state.data!.items.findIndex(item => item.id === action.payload);

      state.data!.items.splice(i, 1);
    },
    changeQuantity(
      state,
      {
        payload: { id, change },
      }: PayloadAction<{ id: string; change: number }>,
    ) {
      const item = state.data!.items.find(item => item.id === id);

      item!.quantity += change;
      state.data!.subtotal += change * item!.price;
    },
    enableBag(state) {
      state.isDisabled = false;
    },
    disableBag(state) {
      state.isDisabled = true;
    },
    resetBag(state, action: PayloadAction<string>) {
      state.data = {
        id: action.payload,
        items: [],
        subtotal: 0,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBag.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchBag.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    });
    builder.addCase(fetchBag.rejected, state => {
      state.status = 'failed';
      state.data = null;
    });
  },
});

export default slice.reducer;
export const actions = slice.actions;
