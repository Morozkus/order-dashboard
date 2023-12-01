import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IOrder {
  productId: number,
  count: number
}

interface ProductState {
  order: {
    [key: string]: IOrder
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
    pushProductInOrder(state, action: PayloadAction<IOrder>) {
      state.order[String(action.payload.productId)] = action.payload
    },

    removeProductFromOrder(state, action: PayloadAction<number>) {
      delete state.order[String(action.payload)]
    },

    incrementProductInOrder(state, action: PayloadAction<IOrder>) {
      const findOrder = state.order[String(action.payload.productId)]
      if (findOrder)
        findOrder.count = action.payload.count
    }
  },
})

export const { pushProductInOrder, incrementProductInOrder, removeProductFromOrder } = OrderSlice.actions
export default OrderSlice.reducer