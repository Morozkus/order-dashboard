import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from "../../model/IProduct";
import { getTest } from '../../supabase/supabase';

interface ProductState {
  productList: IProduct[]
  isLoading: boolean
}

const initialState: ProductState = {
  productList: [],
  isLoading: false
}

export const getAllProduct = createAsyncThunk<IProduct[]>(
  'product/getAll',
  getTest
)

export const ProductSlice = createSlice({
  name: 'product_list',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllProduct.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false
      state.productList = action.payload
    })

    builder.addCase(getAllProduct.pending, (state) => {
      state.isLoading = true
    })
  },
})

export default ProductSlice.reducer