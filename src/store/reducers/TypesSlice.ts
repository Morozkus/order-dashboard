import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTypes } from '../../supabase/supabase';
import { ITypeProduct } from '../../model/IType';
import { getAllTypes } from '../Thunk/typesThunk';

interface ProductState {
  productTypes: ITypeProduct[]
  isLoading: boolean
}

const initialState: ProductState = {
  productTypes: [],
  isLoading: false
}

export const TypesSlice = createSlice({
  name: 'types_list',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllTypes.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(getAllTypes.fulfilled, (state, action: PayloadAction<ITypeProduct[]>) => {
      state.isLoading = false
      state.productTypes = action.payload
    })
  },
})

export default TypesSlice.reducer