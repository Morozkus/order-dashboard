import { createSlice } from '@reduxjs/toolkit';
import { getOneOrder, setOrderStatus } from '../Thunk/orderThunk';
import { TStatusOrder } from '../../model/IOrder';

interface IOrder {
 productId: number,
 count: number
}

interface ProductState {
 infoOrder: IOrder[]
 isLoading: boolean
 status: TStatusOrder | null
}

const initialState: ProductState = {
 infoOrder: [],
 isLoading: false,
 status: null
}

export const OrderSlice = createSlice({
 name: 'orderPage',
 initialState,
 reducers: {},
 extraReducers(builder) {
  builder.addCase(getOneOrder.pending, (state) => {
   state.isLoading = true
  })

  builder.addCase(getOneOrder.fulfilled, (state, action) => {
   state.isLoading = false
   state.infoOrder = action.payload.products
   state.status = action.payload.status
  })

  builder.addCase(setOrderStatus.pending, (state) => {
   state.isLoading = true
  })

  builder.addCase(setOrderStatus.fulfilled, (state, action) => {
   state.isLoading = false
   state.status = action.payload.status
  })
 },
})

// export const { } = OrderSlice.actions
export default OrderSlice.reducer