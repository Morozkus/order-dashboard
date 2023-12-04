import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from "../../model/IProduct";
import { getAllProduct } from '../Thunk/productThunk';

interface ProductState {
 productList: IProduct[]
 isLoading: boolean
}

const initialState: ProductState = {
 productList: [],
 isLoading: false
}

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