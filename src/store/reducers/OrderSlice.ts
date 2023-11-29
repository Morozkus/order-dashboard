import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IOrder {
  productId: number,
  count: number
}

interface ProductState {
  order: IOrder[]
  isLoading: boolean
}

const initialState: ProductState = {
  order: [],
  isLoading: false
}

export const OrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    pushProductInOrder(state, action: PayloadAction<IOrder>) {
      state.order.push(action.payload)
    },

    removeProductFromOrder(state, action: PayloadAction<number>) {
      state.order = state.order.filter(ord => ord.productId !== action.payload)
    },

    incrementProductInOrder(state, action: PayloadAction<IOrder>) {
      const findOrder = state.order.find(ord => ord.productId === action.payload.productId)
      if (findOrder)
        findOrder.count = action.payload.count
    },

    dicrementProductInOrder(state, action: PayloadAction<IOrder>) {
      const findOrder = state.order.find(ord => ord.productId === action.payload.productId)
      if (findOrder)
        findOrder.count = action.payload.count
    }
  },
})

export const {pushProductInOrder, dicrementProductInOrder, incrementProductInOrder, removeProductFromOrder} = OrderSlice.actions
export default OrderSlice.reducer