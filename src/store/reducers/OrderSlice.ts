import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InfoOrder } from '../../model/IOrder';
import { pushOrder } from '../Thunk/orderThunk';

interface ProductState {
 order: {
  [key: string]: InfoOrder
 }
 isLoading: boolean
}

const initialState: ProductState = {
 order: {},
 isLoading: false
}

export const OrderSlice = createSlice({
 name: 'order',
 initialState,
 reducers: {
  pushProductInOrder(state, action: PayloadAction<InfoOrder>) {
   state.order[String(action.payload.productId)] = action.payload
  },

  removeProductFromOrder(state, action: PayloadAction<number>) {
   delete state.order[String(action.payload)]
  },

  incrementProductInOrder(state, action: PayloadAction<InfoOrder>) {
   const findOrder = state.order[String(action.payload.productId)]
   if (findOrder)
    findOrder.count = action.payload.count
  }
 },

 extraReducers(builder) {
  builder.addCase(pushOrder.fulfilled, (state) => {
   state.isLoading = false
   state.order = {}
  })
 },
})

export const { pushProductInOrder, incrementProductInOrder, removeProductFromOrder } = OrderSlice.actions
export default OrderSlice.reducer