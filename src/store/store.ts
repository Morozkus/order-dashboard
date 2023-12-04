import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/ProductSlice";
import TypesSlice from "./reducers/TypesSlice";
import OrderSlice from "./reducers/OrderSlice";
import OrderBoardSlice from "./reducers/OrderBoardSlice";
import OrderPageSlice from "./reducers/OrderPageSlice";


const rootReducer = combineReducers({
 product: ProductSlice,
 types: TypesSlice,
 order: OrderSlice,
 orderBoard: OrderBoardSlice,
 orderPage: OrderPageSlice
})

export const setupStore = () => {
 return configureStore({
  reducer: rootReducer
 })
}

// Типизация редусеров
export type RootState = ReturnType<typeof rootReducer>

// Тип стора
export type AppStore = ReturnType<typeof setupStore>

// Использование только определенных типов
export type AppDispatch = AppStore['dispatch']