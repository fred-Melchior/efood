import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../store/reducers/cart'
import modalReducer from './reducers/modal'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
