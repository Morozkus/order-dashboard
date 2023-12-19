import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllOrder, setOrderStatus } from '../Thunk/orderThunk';
import { IOrder } from '../../model/IOrder';

interface ProductState {
 orders: IOrder[]
 isLoading: boolean
}

const initialState: ProductState = {
 orders: [],
 isLoading: false
}

export const OrderSlice = createSlice({
 name: 'orderBoard',
 initialState,
 reducers: {
  pushOrderBoard(state, action: PayloadAction<IOrder>) {
    state.orders.push(action.payload)
  }
 },
 extraReducers(builder) {
  builder.addCase(getAllOrder.fulfilled, (state, action: PayloadAction<IOrder[]>) => {
   state.isLoading = false
   state.orders = action.payload
  })

  builder.addCase(getAllOrder.pending, (state) => {
   state.isLoading = true
  })

  builder.addCase(setOrderStatus.fulfilled, () => {
   getAllOrder()
  })
 },
})

export const { pushOrderBoard } = OrderSlice.actions
export default OrderSlice.reducer