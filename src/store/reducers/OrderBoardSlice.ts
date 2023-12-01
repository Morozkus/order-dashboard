import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllOrder, setOrderStatus } from '../Thunk/orderThunk';
import { IOrder, TStatusOrder } from '../../model/IOrder';

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
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllOrder.fulfilled, (state, action: PayloadAction<IOrder[]>) => {
            state.isLoading = false
            state.orders = action.payload
        })

        builder.addCase(getAllOrder.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(setOrderStatus.pending, (state) => {
           state.isLoading = true
        })

        builder.addCase(setOrderStatus.fulfilled, (state) => {
            state.isLoading = false
            getAllOrder()
        })
    },
})

export const { } = OrderSlice.actions
export default OrderSlice.reducer